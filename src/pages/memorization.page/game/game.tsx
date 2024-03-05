import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../store/store";

import { shuffleArray } from "../../../constants/shuffleArray";
import { NotFoundPage } from "../../not.found.page";

import './game.scss';
import classNames from "classnames";

const COUNT_TASKS = 10;
const COUNT_OPTINALS = 4;

export const Game = () => {
  const { dictionary = '' } = useParams();
  const dictionaries = useSelector((state: RootState) => state.dictionarys.value);
  const navigate = useNavigate();

  const [indexQuestion, setIndexQuestion] = useState(0);
  const [answerCurrent, setAnswerCurrent] = useState('');
  const [answersUsers, setAnswersUsers] = useState<string[]>([]);
  const [result, setResult] = useState(-1);

  const { game, answersCorrect } = useMemo(() => {
    if (!dictionaries[dictionary]) {
      return {
        game: null,
        answersCorrect: [],
      };
    }

    const words = shuffleArray(dictionaries[dictionary], COUNT_TASKS);
    const answersCorrect = words.map(word => word.ukr);

    const game = words.map(({ eng, ukr }) => {
      const answersWithoutCorrect = answersCorrect.filter(word => word !== ukr);
      const shuffledAnswers = shuffleArray(answersWithoutCorrect, COUNT_OPTINALS - 1);

      const randomIndex = Math.floor(Math.random() * (COUNT_OPTINALS + 1));
      const answers = [...shuffledAnswers.slice(0, randomIndex), ukr, ...shuffledAnswers.slice(randomIndex)];

      const item = {
        question: eng,
        answers,
      };

      return item;
    });

    return { game, answersCorrect };
  }, [dictionaries, dictionary]);

  useEffect(() => {
    setIndexQuestion(0);
    setAnswerCurrent('');
    setAnswersUsers([]);
    setResult(-1);
  }, [dictionaries, dictionary]);

  const handlebtnNext = () => {
    if (COUNT_TASKS !== indexQuestion + 1) {
      setIndexQuestion(currentIndex => currentIndex + 1);
      setAnswersUsers(answersCurrent => [...answersCurrent, answerCurrent]);
      setAnswerCurrent('');
    } else {
      const mismatchCount = [...answersUsers, answerCurrent].reduce((count, userAnswer, index) => {
        const correctAnswer = answersCorrect[index];

        if (userAnswer === correctAnswer) {
          return count + 1;
        }
        return count;
      }, 0);

      setResult(mismatchCount);
    }
  }

  const handleRestart = () => {
    navigate('../memorization');
  }

  if (!game) {
    return <NotFoundPage />;
  }

  return (
    <section className="game">
      <article className="game__article">
        <h2 className="game__name">{dictionary}</h2>

        <div className="game__filed">
          <ul className="game__list">
            {
              game.map(({ question, answers }) => (
                <li
                  key={question}
                  className="game__item"
                  style={{
                    translate: `${-100 * indexQuestion}%`,
                  }}
                >
                  <div className="game__main">
                    <h3 className="game__eng">
                      {question}
                    </h3>
                  </div>

                  <div className="game__bottom">
                    <ul className="game__answers answers">
                      {answers.map((answer) => (
                        <li key={`${question}-${answer}`} className="answers__item">
                          <input
                            type="radio"
                            id={`${question}-${answer}`}
                            name={`${question}-answers`}
                            value={answer}
                            onChange={() => setAnswerCurrent(answer)}
                          />
                          <label htmlFor={`${question}-${answer}`}>{answer}</label>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={handlebtnNext}
                      disabled={!answerCurrent}
                      className={classNames(
                        'game__btn-next',
                        { 'game__btn-next--disable': !answerCurrent },
                      )}
                    >
                      {COUNT_TASKS !== indexQuestion + 1 ? 'Ok' : 'Finish'}
                    </button>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </article>

      {result !== -1 && (
        <article className="game__result result">
          <div className="result__box">
            <div className="result__header">
              <h2 className="result__title">
                Result
              </h2>

              <p className="result__total">
                {`${result * 10}%`}
              </p>
            </div>

            <div className="result__controls">
              <button onClick={handleRestart} className="result__btn-restart">
                Restart
              </button>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};
