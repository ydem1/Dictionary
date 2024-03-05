import { useState } from 'react';
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

  return (
    <article className="edit-dictionary">
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
            error={engWord === ''}
            errorMessage="The field must be filled"
          />

          <Input
            label="Ukraine word"
            placeHolder="Enter ukraine word"
            value={ukrWord}
            handleInput={(newValue: string) => setUkrWord(newValue)}
            icon="fa-solid fa-language"
            error={ukrWord === ''}
            errorMessage="The field must be filled"
          />

          <ControlPanel
            handleSubmit={handleSubmit}
            handleReset={handleReset}
            isDisable={ukrWord === '' || engWord === ''}
          />
        </div>
      </div>
    </article >
  );
};
