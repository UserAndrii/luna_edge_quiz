import { FC, ChangeEvent, FormEvent, useState } from 'react';

import { Button, CustomAnswerInput, CustomQuestionInput } from '../ui';

import { newQuizData } from '../../data';

import { IQuiz } from '../../types';

export const Form: FC = () => {
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState<IQuiz[]>([
    {
      id: 1,
      question: '',
      answers: [
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
      ],
    },
  ]);

  const handleQuestionChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const newQuestions = [...questions];
    newQuestions[index].question = e.target.value;
    setQuestions(newQuestions);
  };

  const handleAnswerChange = (
    e: ChangeEvent<HTMLInputElement>,
    questionIndex: number,
    answerIndex: number,
  ) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers[answerIndex].text = e.target.value;
    setQuestions(newQuestions);
  };

  const handleCorrectAnswerChange = (
    questionIndex: number,
    answerIndex: number,
  ) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answers.forEach(
      (answer, idx) => (answer.isCorrect = idx === answerIndex),
    );
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    const newQuestion = {
      id: questions.length + 1,
      question: '',
      answers: [
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
        { text: '', isCorrect: false },
      ],
    };
    setQuestions([...questions, newQuestion]);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const quiz = {
      title: quizTitle,
      quiz: questions,
    };
    console.log(quiz);
  };

  return (
    <form onSubmit={handleSubmit} className='lg:px-12'>
      <div className='mb-4'>
        <label className='mb-2 block text-lg font-medium' htmlFor='quizTitle'>
          Quiz Title:
        </label>
        <input
          id='quizTitle'
          type='text'
          value={quizTitle}
          onChange={e => setQuizTitle(e.target.value)}
          className='w-full rounded border border-gray-300 px-3 py-2 hover:border-yellow-600 focus:border-yellow-600 focus:outline-none'
        />
      </div>

      {questions.map((question, qIndex) => (
        <div key={qIndex} className='mb-6 rounded border border-gray-300 p-4'>
          <div className='mb-4'>
            <CustomQuestionInput
              indx={qIndex}
              question={question.question}
              onChange={e => handleQuestionChange(e, qIndex)}
            />
          </div>

          <ul className='grid gap-4 md:grid-cols-2'>
            {question.answers.map((answer, aIndex) => (
              <li key={aIndex} className='mb-2 flex items-center'>
                <CustomAnswerInput
                  indx={qIndex}
                  text={answer.text}
                  isCorrect={answer.isCorrect}
                  handleAnswer={e => handleAnswerChange(e, qIndex, aIndex)}
                  handleCorrect={() =>
                    handleCorrectAnswerChange(qIndex, aIndex)
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className='flex justify-center gap-6'>
        <Button
          type='button'
          onClick={addQuestion}
          className='rounded px-4 py-2 text-small normal-case'
        >
          {newQuizData.btnAddForm}
        </Button>
        <Button
          type='submit'
          className='rounded px-4 py-2 text-small normal-case'
        >
          {newQuizData.submitBtn}
        </Button>
      </div>
    </form>
  );
};
