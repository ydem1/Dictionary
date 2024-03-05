import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

import { colors } from "../../constants/colors";
import './memorization.page.scss';
import { COUNT_TASKS } from "../../constants/game";

export const MemorizationPage = () => {
  const dictionaries = useSelector((state: RootState) => state.dictionarys.value)

  const sortedDictionaries = Object.entries(dictionaries).sort((first, second) => (
    second[1].length - first[1].length
  ));

  return (
    <section className="memorization-page">
      <ul className="memorization-page__list list">
        {sortedDictionaries.map(([name, dictionary], index) => (
          <li
            key={name}
            className="list__item"
            style={{
              background: colors[index % colors.length],
              pointerEvents: dictionary.length <= COUNT_TASKS ? 'none' : 'auto',
              opacity: dictionary.length <= COUNT_TASKS ? 4 / 10 : 1,
            }}
          >
            <Link
              to={`./game/${name}`}
              className="list__btn"
            >
              <h3 className="list__name">
                {name}
              </h3>

              <p className="list__count-words">
                {dictionary.length}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
