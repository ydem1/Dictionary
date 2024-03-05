import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";

import { colors } from "../../constants/colors";
import './memorization.page.scss';

export const MemorizationPage = () => {
  const dictionaries = useSelector((state: RootState) => state.dictionarys.value);
  const navigate = useNavigate();

  const handleStartGame = () => {
    navigate('./game');
  };

  return (
    <section className="memorization-page">
      <ul className="memorization-page__list list">
        {Object.entries(dictionaries).map(([name, dictionary], index) => (
          <li
            key={name}
            className="list__item"
            style={{ background: colors[index % colors.length] }}
          >
            <button onClick={handleStartGame} className="list__btn">
              <h3 className="list__name">
                {name}
              </h3>

              <p className="list__count-words">
                {dictionary.length}
              </p>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
