import { questions } from "@prisma/client";

export type TypeInsertQuestions = Omit<questions, "id" >