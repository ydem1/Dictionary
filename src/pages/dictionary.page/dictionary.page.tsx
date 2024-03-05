import { useState } from "react";
import { useSelector } from "react-redux";
import { Dictionary } from "../../components/dictionary";

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
          Object.entries(dictionaries).map(([name, dictionary], index) => (
            <li
              key={name}
              className="dictionary-page__item"
            >
              <Dictionary
                name={name}
                dictionary={dictionary}
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
