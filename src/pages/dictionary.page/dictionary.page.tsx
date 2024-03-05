import { useState } from "react";
import { useSelector } from "react-redux";
import { Dictionary } from "./components";

import './dictionary.page.scss';
import { RootState } from "../../store/store";
import { colors } from "../../constants/colors";
import { EditDictionary } from "../../components/edit.dictionary";

export const DictionaryPage = () => {
  const [isEditDictionary, setIsEditDictionary] = useState(false);
  const [selectDictionary, setIsSelectDictionary] = useState('');

  const dictionaries = useSelector((state: RootState) => state.dictionarys.value);

  const handleEditBtn = (currentDictionary: string) => {
    setIsEditDictionary(true);
    setIsSelectDictionary(currentDictionary);
  }

  const handleCloseBtn = () => {
    setIsEditDictionary(false);
    setIsSelectDictionary('');
  }

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
                handleBtn={handleEditBtn}
              />
            </li>
          ))
        }
      </ul>

      {isEditDictionary &&
        <EditDictionary
          dictionaryKey={selectDictionary}
          handleBtn={handleCloseBtn}
        />
      }
    </section>
  );
};
