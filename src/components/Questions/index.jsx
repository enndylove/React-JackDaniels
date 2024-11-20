import React, {Component} from 'react';
import json from '../../questions.json';
import './index.scss';
import Processing from "../Processing";

class Questions extends Component {
    constructor() {
        super();
        this.state = {
            question: 1,
            allDone: false,
        };
    }

    getQuestionsLength() {
        return json.questions.length;
    }

    nextQuestion = () => {
        const { question } = this.state;
        if (question < this.getQuestionsLength()) {
            this.setState({ question: question + 1 });
        } else {
            this.setState({ allDone: true });
            this.props.onAllDone();
        }
    };

    doneAllQuestions() {
        return <Processing />;
    }

    getHtmlPlants() {
        const { question } = this.state;
        const plants = Array.from({ length: question }, (_, i) => (
            <span key={`plant-${i}`} className="primary"></span>
        ));

        const calcDefaultPlants = this.getQuestionsLength() - plants.length;
        for (let j = 0; j < calcDefaultPlants; j++) {
            plants.push(<span key={`plant-default-${j}`}></span>);
        }

        return plants;
    }

    render() {
        const { question, allDone } = this.state;

        if (allDone) {
            return this.doneAllQuestions();
        }

        const thisQuestion = json.questions[question - 1];

        return (
            <section className="section questions wrapper">
                <div className="action-time flex justify-center items-center w-full">
                    <div className="action-time__content flex items-center">
                        <svg className="action-time__content-icon" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5 8.125V11.25" stroke="black" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path
                                d="M9.42187 3.12501L2.54687 15C2.43734 15.1897 2.37959 15.4049 2.3794 15.6239C2.3792 15.843 2.43657 16.0582 2.54576 16.2481C2.65495 16.438 2.81212 16.5959 3.00154 16.7059C3.19095 16.8159 3.40595 16.8742 3.62499 16.875H17.375C17.594 16.8742 17.809 16.8159 17.9984 16.7059C18.1879 16.5959 18.345 16.438 18.4542 16.2481C18.5634 16.0582 18.6208 15.843 18.6206 15.6239C18.6204 15.4049 18.5626 15.1897 18.4531 15L11.5781 3.12501C11.4694 2.93507 11.3125 2.77721 11.1231 2.66742C10.9338 2.55764 10.7188 2.49982 10.5 2.49982C10.2811 2.49982 10.0662 2.55764 9.87685 2.66742C9.68753 2.77721 9.53057 2.93507 9.42187 3.12501V3.12501Z"
                                stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path
                                d="M10.5 15C11.0178 15 11.4375 14.5803 11.4375 14.0625C11.4375 13.5447 11.0178 13.125 10.5 13.125C9.98223 13.125 9.5625 13.5447 9.5625 14.0625C9.5625 14.5803 9.98223 15 10.5 15Z"
                                fill="black"/>
                        </svg>

                        <p className="action-time__content-title">
                            Hurry up! The number of prizes is limited!
                        </p>
                    </div>
                </div>

                <div className="questions__content">
                    <div className="questions__content-plants w-full flex justify-between items-center">
                        {this.getHtmlPlants()}
                    </div>
                    <div className="questions__content-title text-center">
                        {thisQuestion.title}
                    </div>
                    <div className="questions__content-btns w-full">
                        {thisQuestion.buttons.map((text, index) => (
                            <div
                                key={`button-${index}`}
                                className="questions__content-btn text-center w-full cursor-pointer"
                                onClick={this.nextQuestion}
                            >
                                {text}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="questions__content-nav flex items-center">
                    <span>Exclusive Prizes</span>
                    <span>Quick and Easy</span>
                    <span>only 6 left</span>
                </div>
            </section>
        );
    }
}

export default Questions;
