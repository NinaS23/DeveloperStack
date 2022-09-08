import { insertAnswers } from "../repositories/answerRepository";
import { findQuestion } from "../repositories/questionRepository";
import { TypeInsertAnswers } from "../types/answerTypes";


export async function createAnswer(answers: TypeInsertAnswers, id: number) {
    const isQuestionExistent = await findQuestion(id)
    if (isQuestionExistent === null) {
        throw { errorType: "not_found" }
    }
    const answerObj ={
        answeredBy:answers.answeredBy,
        answer:answers.answer,
        questionId:id
    }
    await insertAnswers(answerObj)
}