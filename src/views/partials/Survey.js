import React, { Component } from 'react'
import axios from 'axios';
import FormSurvey from './FormSurvey';
import MultiSteps from "multi-step-form-ui";
import { getUsername, API_DOMAIN } from "../helpers";

export class Survey extends Component {
  state = {
    survey: [
      // Rozwój osobisty
      {
        questionID: 1,
        question: `Czy masz plan na siebie?`,
      },
      {
        questionID: 2,
        question: `Czy inwestujesz w swój rozwój?`,
      },
      {
        questionID: 3,
        question: `Czy regularnie czytasz książki?`,
      },

      // Kariera
      {
        questionID: 4,
        question: `Czy obecna praca daje Ci satysfakcję?`,
      },
      {
        questionID: 5,
        question: `Czy lubisz swoją pracę?`,
      },
      {
        questionID: 6,
        question: `Czy praca pozwala Ci się rozwijać?`,
      },

      // Finanse
      {
        questionID: 7,
        question: `Czy jesteś zadowolony z poziomu dochodu?`,
      },
      {
        questionID: 8,
        question: `Czy masz zabezpieczenie finansowe na kilka miesięcy bez pracy?`,
      },
      {
        questionID: 9,
        question: `Czy wystarcza Ci na życie i podstawowe rzeczy?`,
      },

      // Otoczenie
      {
        questionID: 10,
        question: `Czy jesteś zadowolony z miejsca zamieszkania, stanu mieszkania?`,
      },
      {
        questionID: 11,
        question: `Czy lubisz swoje otoczenie?`,
      },
      {
        questionID: 12,
        question: `Czy otoczenie zapewnia Ci poczucie bezpieczeństwa?`,
      },

      // Partner, małżonek
      {
        questionID: 13,
        question: `Czy jesteś szczęśliwy w obecnym związku?`,
      },
      {
        questionID: 14,
        question: `Czy partner jest dla Ciebie wsparciem?`,
      },
      {
        questionID: 15,
        question: `Czy ufacie sobie?`,
      },

      // Rodzina i przyjaciele
      {
        questionID: 16,
        question: `Czy masz zaufane grono przyjaciół?`,
      },
      {
        questionID: 17,
        question: `Czy możesz polegać na rodzinnie i przyjaciołach?`,
      },
      {
        questionID: 18,
        question: `Czy lubisz spędzać czas z rodziną?`,
      },

      // Wypoczynek i rozrywka
      {
        questionID: 19,
        question: `Czy masz czas na swoje hobby i zainteresowania?`,
      },
      {
        questionID: 20,
        question: `Czy budzisz się wypoczęty?`,
      },
      {
        questionID: 21,
        question: `Czy wychodzisz z domu i odpoczywasz np. w parku, lesie?`,
      },

      // Zdrowie i sprawność fiz
      {
        questionID: 22,
        question: `Czy masz jakieś dolegliwości, choroby przewlekłe?`,
      },
      {
        questionID: 23,
        question: `Czy robisz profilaktyczne badania?`,
      },
      {
        questionID: 24,
        question: `Czy uprawiasz sport, ćwiczenia fizyczne, regularnie?`,
      },
    ],
    answers: []
  }

  removeSurvey = () => {
    const surContent = document.querySelector(".survey-content");
    const survey = document.querySelector("#survey");
    surContent.classList.add('fading-out');
    survey.classList.add('fading-out');
    setTimeout(()=>{
      surContent.remove();
      survey.remove();
      window.location.reload();
    }, 500);
  }

  submitForm = () => {
    axios.post(`${API_DOMAIN}/Survey/UserResponse`, {
      surveyName: "Life_Circle",
      userName: getUsername(),
      userResponseQuestionAndAnswerViewModels: this.state.answers
    },
      {
        'Content-Type': 'application/json'
      })
      .then((response) => {
          console.info("Wysłano ankietę. Następuje zamknięcie ankiety.");
          this.removeSurvey();
      })
      .catch((error) => {
        console.error("Błąd wysyłki ankiety.", error);
      });
  }

  handleChange = (question, answer) => {
    this.setState({
      answers: [...this.state.answers, {
        questionText: question,
        answerText: answer
      }]
    });
  }

  render() {
    return (
      <div id="survey" className="overlay">
        <MultiSteps>
          {(() => {
            const steps = [];

            for (let i = 0; i < this.state.survey.length; i++) {
              steps.push(
                <FormSurvey 
                  key={this.state.survey[i].questionID}
                  question={this.state.survey[i].question}
                  action={this.handleChange}
                  lastindex={this.state.survey.length}
                  submitForm={this.submitForm}
                />
              );
            }

            return steps;
          })()}
        </MultiSteps>
      </div>
    )
  }
} 

export default Survey
