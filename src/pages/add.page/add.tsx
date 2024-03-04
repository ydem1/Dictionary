import { useState } from "react";
// import { Dictionaries } from "../../types/Dictionary";
import { Input } from "../../components/input/input";
import { useDispatch, useSelector } from "react-redux";
import { initNewDictionary } from "../../slices/dictionarysSlice";
import { RootState } from "../../store/store";

import './add.scss';

export const AddPage = () => {
  // const [newWords, setNewWords] = useState<Dictionaries[]>([]);
  const Dictionareis = useSelector((state: RootState) => state.dictionarys.value)
  const dispatch = useDispatch();

  const [dictionaryName, setDictionaryName] = useState('');

  const isError = Object.keys(Dictionareis).some(key => key === dictionaryName);

  const handleSubmit = () => {
    dispatch(initNewDictionary({ key: dictionaryName }));
    handleReset();
  };

  const handleReset = () => {
    setDictionaryName('');
  };

  return (
    <section className="add-page">
      <Input
        label="New dictionary name"
        value={dictionaryName}
        handleInput={(newValue: string) => setDictionaryName(newValue)}
        icon="fa-solid fa-republican"
        Error={isError}
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            onClick={handleSubmit}
            disabled={dictionaryName === '' || isError}
            className="button is-link"
          >
            Submit
          </button>
        </div>
        <div className="control">
          <button
            className="button is-link is-light"
            onClick={handleReset}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};
