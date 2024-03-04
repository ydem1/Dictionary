import { useSelector } from "react-redux";
import { Dictionary } from "./components";

import './dictionary.page.scss';
import { RootState } from "../../store/store";

export const DictionaryPage = () => {
  const dictionaries = useSelector((state: RootState) => state.dictionarys.Dictionaries);

  return (
    <section className="dictionary-page">
      <ul className="dictionary-page__grid">
        {
          Object.entries(dictionaries).map(dictionary => (
            <li 
              key={dictionary[0]}
              className="dictionary-page__item"
            >
              <Dictionary name={dictionary[0]} dictionary={dictionary[1]} />
            </li>
          ))
        }
      </ul>
    </section>
  );
};
