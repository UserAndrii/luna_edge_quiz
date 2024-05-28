import { FC, ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Button,
  CustomAnswerInput,
  CustomImageInput,
  CustomQuestionInput,
} from '../ui';

import { newQuizData } from '../../data';
import { useAppDispatch } from '../../redux/hooks';

import { IQuiz } from '../../types';
import { postQuiz } from '../../redux/operations';
import { FaArrowRightLong } from 'react-icons/fa6';

export const Form: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [quizTitle, setQuizTitle] = useState('');
  const [image, setImage] = useState('');
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
      thema: quizTitle,
      quiz: questions,
      img: image,
    };
    dispatch(postQuiz(quiz));
    toast.success('New quiz successfully added!');

    setQuizTitle('');
    setQuestions([]);
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} className='lg:px-12'>
      <CustomImageInput image={image} setImage={setImage} />

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

      <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
        <Button
          type='button'
          onClick={addQuestion}
          className='flex w-max rounded px-4 py-2 text-small normal-case'
        >
          {newQuizData.btnAddForm}
        </Button>
        <Button
          type='submit'
          className='flex w-max rounded px-4 py-2 text-small normal-case'
        >
          {newQuizData.submitBtn}
        </Button>

        <Button
          className='flex w-max items-center justify-center gap-2 text-small normal-case'
          onClick={() => navigate('/')}
        >
          Go Home
          <FaArrowRightLong />
        </Button>
      </div>
    </form>
  );
};
