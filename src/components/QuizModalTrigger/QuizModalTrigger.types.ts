export interface Option {
  display: string;
  value: string;
  isRejection: boolean;
}

export interface Question {
  question: string;
  type: string;
  options: Option[];
}

export interface Questions {
  questions: Question[];
}
