import { Injectable } from "@angular/core";
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Question } from "./mockquestions/question";
import { COMPLETEDQUIZ } from "./mockquestions/mockresposte";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const risposte = COMPLETEDQUIZ;

    const tags = [
      'animali',
      'natura',
      'politica',
      'colore',
      'gossip',
    ];
    const questions = [
      {
        id: 1,
        tag: ["colore", "animali"],
        text: "Qual è il colore del cavallo bianco di Napoleone?",
        answertype: "radio",
        answers: [
          {
            value: "1",
            text: "bianco",
            correct: true
          },
          {
            value: "2",
            text: "rosso",
            correct: false
          },
          {
            value: "3",
            text: "blu",
            correct: false
          },
          {
            value: "4",
            text: "nero",
            correct: false
          }
        ]
      },
      {
        id: 2,
        tag: ["colore", "natura"],
        text: "Qual è il colore dell'acqua?",
        answertype: "radio",
        answers: [
          {
            value: "1",
            text: "giallo",
            correct: false
          },
          {
            value: "2",
            text: "bianco",
            correct: false
          },
          {
            value: "3",
            text: "trasparente",
            correct: true
          },
          {
            value: "4",
            text: "nero",
            correct: false
          }
        ]
      },
      {
        id: 3,
        tag: ["animali"],
        text: "Quanti cani ha la regina?",
        answertype: "radio",
        answers: [
          {
            value: "1",
            text: "4",
            correct: true
          },
          {
            value: "2",
            text: "32",
            correct: false
          },
          {
            value: "3",
            text: "8",
            correct: false
          },
          {
            value: "4",
            text: "0",
            correct: false
          }
        ]
      },
      {
        id: 4,
        tag: ["natura"],
        text: "Quanto è alto il Monte Bianco?",
        answertype: "radio",
        answers: [
          {
            value: "1",
            text: "2000 m",
            correct: false
          },
          {
            value: "2",
            text: "4696 m",
            correct: true
          },
          {
            value: "3",
            text: "300 cm",
            correct: false
          },
          {
            value: "4",
            text: "nero",
            correct: false
          }
        ]
      },
      {
        id: 5,
        tag: ["politica"],
        text: "Cesare passò il rubicone?",
        answertype: "radio",
        answers: [
          {
            value: "1",
            text: "sì",
            correct: true
          },
          {
            value: "2",
            text: "no",
            correct: false
          }
        ]
      },
      {
        id: 6,
        tag: ["natura"],
        text: "Perchè piove?",
        answertype: "checkbox",
        answers: [
          {
            value: "1",
            text: "perchè sì",
            correct: false
          },
          {
            value: "2",
            text: "perchè Gesù piange",
            correct: true
          },
          {
            value: "3",
            text: "perchè sotto c'è Fantozzi",
            correct: false
          },
          {
            value: "4",
            text: "perché le nuvole si scontrano",
            correct: true
          }
        ]
      },
      {
        id: 7,
        tag: ["natura", "politica"],
        text: "L'ecologia è giusta?",
        answertype: "radio",
        answers: [
          {
            value: "1",
            text: "sì",
            correct: true
          },
          {
            value: "2",
            text: "no",
            correct: false
          },
          {
            value: "3",
            text: "forse",
            correct: false
          }
        ]
      },
      {
        id: 8,
        tag: ["natura", "colore"],
        text: "Quali sono i colori delle foglie?",
        answertype: "checkbox",
        answers: [
          {
            value: "1",
            text: "verde",
            correct: true
          },
          {
            value: "2",
            text: "rosso",
            correct: false
          },
          {
            value: "3",
            text: "blu",
            correct: false
          },
          {
            value: "4",
            text: "nero",
            correct: false
          },
          {
            value: "5",
            text: "giallo",
            correct: true
          }
        ]
      },
      {
        id: 9,
        tag: ["gossip"],
        text: "Chi conduce il grande fratello?",
        answertype: "radio",
        answers: [
          {
            value: "1",
            text: "Thomas",
            correct: false
          },
          {
            value: "2",
            text: "Alessia Marcuzzi",
            correct: true
          },
          {
            value: "3",
            text: "Maria De Filippi",
            correct: false
          },
          {
            value: "4",
            text: "Maurizio Costanzo",
            correct: false
          }
        ]
      },
      {
        id: 10,
        tag: ["gossip", "politica", "colore"],
        text: "Di che colore ha i capelli Berlusca?",
        answertype: "checkbox",
        answers: [
          {
            value: "1",
            text: "verde",
            correct: false
          },
          {
            value: "2",
            text: "indefinito",
            correct: true
          },
          {
            value: "3",
            text: "trasparente",
            correct: false
          },
          {
            value: "4",
            text: "nero",
            correct: false
          }
        ]
      },
      {
        id: 11,
        tag: ["natura", "animali"],
        text: "Descrivi l'habitat della moffatta.",
        answertype: "textarea",
        answers: []
      }
    ];
    return { questions, risposte, tags };
  }
  genId(questions: Question[]): number {
    return questions.length > 0
      ? Math.max(...questions.map(question => question.id)) + 1
      : 1;
  }
  constructor() {}
}
