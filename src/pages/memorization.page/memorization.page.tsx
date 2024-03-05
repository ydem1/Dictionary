import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router-dom";

import { colors } from "../../constants/colors";
import './memorization.page.scss';

export const MemorizationPage = () => {
  const dictionaries = useSelector((state: RootState) => state.dictionarys.value);

  return (
    <section className="memorization-page">
      <ul className="memorization-page__list list">
        {Object.entries(dictionaries).map(([name, dictionary], index) => (
          <li
            key={name}
            className="list__item"
            style={{
              background: colors[index % colors.length],
              pointerEvents: dictionary.length <= 10 ? 'none' : 'auto',
              opacity: dictionary.length <= 10 ? 4 / 10 : 1,
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
