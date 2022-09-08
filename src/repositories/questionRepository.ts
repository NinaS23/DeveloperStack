// TODO
import { prisma} from "../config/database";
import { TypeInsertQuestions } from "../types/questionTypes";

export async function insertQuestion(question: TypeInsertQuestions) {
    await prisma.questions.create({ data: question })

}

export async function findQuestion(id: number) {
    const result = await prisma.questions.findFirst({ where: { id } })
    return result;
}

export async function getAllQuestions() {
    const result = await prisma.questions.findMany()
    return result;
}


export async function getQuestionsByQuestionId() {
    const result = await prisma.questions.findFirst()
    return result;
}