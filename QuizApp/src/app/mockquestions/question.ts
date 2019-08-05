export class Question {
    id: number;
    tag: string [];
    text: string;
    answertype: string;
    answers: Answer [];
}

export class Answer {
    value: string;
    text: string;
    correct: boolean;
}


