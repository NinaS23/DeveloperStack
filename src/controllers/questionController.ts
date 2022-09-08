import { Request, Response } from 'express';
import * as questionService from "../services/questionService"
import * as answerService from "../services/answerService"

export async function createQuestion(req: Request, res: Response) {
  const {askedBy,question}  : {askedBy:string,question:string} = req.body;
   await questionService.createQuestion({askedBy,question})
  res.sendStatus(201)
}

export async function createAnswer(req: Request, res: Response) {
  const {answeredBy,answer} : {answeredBy:string,answer:string} = req.body;
  const {id} = req.params;
  const questionId = Number(id)
  await answerService.createAnswer({answeredBy,answer},questionId)
  res.sendStatus(201)
}

export async function get(req: Request, res: Response) {
  const allQuestions = await questionService.getQuestions()
  res.status(200).send(allQuestions)
}

export async function getById(req: Request, res: Response) {
  const {id} = req.params;
  const questionId = Number(id)
  const questionsById = await questionService.getById(questionId)
  res.status(200).send(questionsById)
}
