import React, { Component } from 'react'
import FormSurvey from './FormSurvey';

export class Survey extends Component {
    state = {
        step: 1,
        survey: [
            // Rozwój osobisty
            {
                questionID: 1,
                question: `Czy masz plan na siebie?`,
                answer: null
            },
            {
                questionID: 2,
                question: `Czy inwestujesz w swój rozwój?`,
                answer: null
            },
            {
                questionID: 3,
                question: `Czy regularnie czytasz książki?`,
                answer: null
            },

            // Kariera
            {
                questionID: 4,
                question: `Czy obecna praca daje Ci satysfakcję?`,
                answer: null
            },
            {
                questionID: 5,
                question: `Czy lubisz swoją pracę?`,
                answer: null
            },
            {
                questionID: 6,
                question: `Czy praca pozwala Ci się rozwijać?`,
                answer: null
            },

            // Finanse
            {
                questionID: 7,
                question: `Czy jesteś zadowolony z poziomu dochodu?`,
                answer: null
            },
            {
                questionID: 8,
                question: `Czy masz zabezpieczenie finansowe na kilka miesięcy bez pracy?`,
                answer: null
            },
            {
                questionID: 9,
                question: `Czy wystarcza Ci na życie i podstawowe rzeczy?`,
                answer: null
            },

            // Otoczenie
            {
                questionID: 10,
                question: `Czy jesteś zadowolony z miejsca zamieszkania, stanu mieszkania?`,
                answer: null
            },
            {
                questionID: 11,
                question: `Czy lubisz swoje otoczenie?`,
                answer: null
            },
            {
                questionID: 12,
                question: `Czy otoczenie zapewnia Ci poczucie bezpieczeństwa?`,
                answer: null
            },

            // Partner, małżonek
            {
                questionID: 13,
                question: `Czy jesteś szczęśliwy w obecnym związku?`,
                answer: null
            },
            {
                questionID: 14,
                question: `Czy partner jest dla Ciebie wsparciem?`,
                answer: null
            },
            {
                questionID: 15,
                question: `Czy ufacie sobie?`,
                answer: null
            },

            // Rodzina i przyjaciele
            {
                questionID: 16,
                question: `Czy masz zaufane grono przyjaciół?`,
                answer: null
            },
            {
                questionID: 17,
                question: `Czy możesz polegać na rodzinnie i przyjaciołach?`,
                answer: null
            },
            {
                questionID: 18,
                question: `Czy lubisz spędzać czas z rodziną?`,
                answer: null
            },

            // Wypoczynek i rozrywka
            {
                questionID: 19,
                question: `Czy masz czas na swoje hobby i zainteresowania?`,
                answer: null
            },
            {
                questionID: 20,
                question: `Czy budzisz się wypoczęty?`,
                answer: null
            },
            {
                questionID: 21,
                question: `Czy wychodzisz z domu i odpoczywasz np. w parku, lesie?`,
                answer: null
            },

            // Zdrowie i sprawność fiz
            {
                questionID: 22,
                question: `Czy masz jakieś dolegliwości, choroby przewlekłe?`,
                answer: null
            },
            {
                questionID: 23,
                question: `Czy robisz profilaktyczne badania?`,
                answer: null
            },
            {
                questionID: 24,
                question: `Czy uprawiasz sport, ćwiczenia fizyczne, regularnie?`,
                answer: null
            },
        ]
    }

    // Proceed to next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1 
        });
    }
    
    // Go back to prev step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1 
        });
    }

    handleChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }


    render() {
        const {step, survey} = this.state;

        switch (step) {
            for (let i = 1; i <= survey.length; i++) {
                case i:
                    return (
                        <FormSurvey 
                            nextStep={this.nextStep} 
                            handleChange={this.handleChange}
                            question={survey[i].question}
                        />
                    )
            }
        }

        return (
            <div>
                
            </div>
        )
    }
}

export default survey
