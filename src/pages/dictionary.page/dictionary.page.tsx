import { useSelector } from "react-redux";
import { Dictionary } from "./components";

import './dictionary.page.scss';
import { RootState } from "../../store/store";
import { colors } from "../../constants/colors";

export const DictionaryPage = () => {
  const dictionaries = useSelector((state: RootState) => state.dictionarys.value);

  return (
    <section className="dictionary-page">
      <ul className="dictionary-page__grid">
        {
          Object.entries(dictionaries).map((dictionary, index) => (
            <li 
              key={dictionary[0]}
              className="dictionary-page__item"
            >
              <Dictionary 
                name={dictionary[0]} 
                dictionary={dictionary[1]} 
                background={colors[index % colors.length]}
              />
            </li>
          ))
        }
      </ul>
    </section>
  );
};
