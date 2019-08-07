export class Question {
  id: number;
  tag: string[];
  text: string;
  answertype: string;
  answers: Answer[];
}

export class Answer {
  value: string;
  text: string;
  correct: boolean;
}

// export class Risposte {
//   id: number;
//   answers: string[];
// }

export class completedQuiz {
  id: number;
  data: string;
  tag: string[];
  answersuser: Answersuser[];
}

export class Answersuser {
  id: number;
  answer: string[];
  correct: string[];
}


