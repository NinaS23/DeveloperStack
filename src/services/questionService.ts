import { getAnsewrsByQuestion } from "../repositories/answerRepository";
import { insertQuestion,getAllQuestions, findQuestion } from "../repositories/questionRepository";
import { TypeInsertQuestions } from "../types/questionTypes";


export async function createQuestion(question:TypeInsertQuestions) {
    await insertQuestion(question);
}


export async function getQuestions() {
    const allQuestions = getAllQuestions()
 
    return {questions:allQuestions}
}

export async function getById(questionId:number) {
    let arrAnsewrs = []
    const isQuestionEcistent = await findQuestion(questionId)
    if(isQuestionEcistent === null){
        throw { errorType: "not_found" }
    }
    const getAnswers = await getAnsewrsByQuestion(questionId)
    if (getAnswers === null) {
        throw { errorType: "no-content" }
    }
    for(let answer of getAnswers){
        const allAnswer ={
			answeredBy: answer.answeredBy,
			answer: answer.answer
        }
        arrAnsewrs.push(allAnswer)
    }
    const objFinal = {
        "id": isQuestionEcistent.id,
        "askedBy": isQuestionEcistent.askedBy,
        "question": isQuestionEcistent.question,
        "answers": [
           arrAnsewrs
        ]
    }
    return objFinal;
}