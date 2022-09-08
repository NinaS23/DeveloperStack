import { answers } from "@prisma/client";

export type TypeInsertAnswers = Omit<answers, "id"| "questionId" >

export type TypeCreateAnswers = Omit<answers , "id">