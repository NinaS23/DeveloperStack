-- CreateTable
CREATE TABLE "questions" (
    "id" SERIAL NOT NULL,
    "askedBy" VARCHAR(20) NOT NULL,
    "question" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "answeredBy" VARCHAR(20) NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);
