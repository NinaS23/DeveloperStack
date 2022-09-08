import { prisma} from "../config/database";
import { TypeCreateAnswers } from "../types/answerTypes";


export async function insertAnswers(answer: TypeCreateAnswers) {
    await prisma.answers.create({ data: answer })

}

export async function getAnsewrsByQuestion(questionId: number) {
    const result = await prisma.answers.findMany({ where: { questionId } })
    return result;
}