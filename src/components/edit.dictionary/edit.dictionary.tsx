import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { editDictionaryColor } from '../../constants/colors';

import { Dictionary } from '../dictionary';
import { Input } from '../input';
import { ControlPanel } from '../control.panel';

import './edit.dictionary.scss';
import { addWordToDictionary } from '../../slices/dictionarysSlice';

type Props = {
  dictionaryKey: string,
  handleBtn: () => void,
};

export const EditDictionary: React.FC<Props> = ({ dictionaryKey, handleBtn }) => {
  const dictionaries = useSelector((state: RootState) => state.dictionarys.value);
  const dispatch = useDispatch();
  const dictionary = dictionaries[dictionaryKey];

  const [engWord, setEngWord] = useState('');
  const [ukrWord, setUkrWord] = useState('');

  const isValidWordEng = (word: string): boolean => {
    const regex = /^[a-zA-Z\s-]*$/;

    return regex.test(word);
  };

  function isValidWordUkr(word: string): boolean {
    const regex = /^[а-яА-ЯїЇіІєЄґҐ\s-]*$/;

    return regex.test(word);
  }

  const handleSubmit = () => {
    dispatch(addWordToDictionary({
      key: dictionaryKey,
      words: {
        eng: engWord,
        ukr: ukrWord,
      }
    }));

    handleReset();
  }

  const handleReset = () => {
    setUkrWord('');
    setEngWord('');
  }

  useEffect(() => {
    document.body.classList.add('is-clipped');
    return () => {
      document.body.classList.remove('is-clipped');
    }
  }, [])

  return (
    <article className="edit-dictionary modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        <div className="edit-dictionary__dictionary">
          <Dictionary
            name={dictionaryKey}
            dictionary={dictionary}
            background={editDictionaryColor}
            handleBtn={handleBtn}
          />

          <div className="edit-dictionary__input-words">
            <Input
              label="English word"
              placeHolder="Enter english word"
              value={engWord}
              handleInput={(newValue: string) => setEngWord(newValue)}
              icon="fa-solid fa-language"
              error={!isValidWordEng(engWord)}
              errorMessage="Enter the word in Latin and check for numbers or special characters"
            />

            <Input
              label="Ukraine word"
              placeHolder="Enter ukraine word"
              value={ukrWord}
              handleInput={(newValue: string) => setUkrWord(newValue)}
              icon="fa-solid fa-language"
              error={!isValidWordUkr(ukrWord)}
              errorMessage="Enter the word in Cyrillic and check for numbers or special characters"
            />

            <ControlPanel
              handleSubmit={handleSubmit}
              handleReset={handleReset}
              isDisable={ukrWord === '' || engWord === ''}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
