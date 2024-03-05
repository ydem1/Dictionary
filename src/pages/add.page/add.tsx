import { useState } from "react";
// import { Dictionaries } from "../../types/Dictionary";
import { Input } from "../../components/input";
import { useDispatch, useSelector } from "react-redux";
import { initNewDictionary } from "../../slices/dictionarysSlice";
import { RootState } from "../../store/store";

import './add.scss';
import { ControlPanel } from "../../components/control.panel";

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
    <section className="add-page box">
      <Input
        label="New dictionary name"
        placeHolder="Enter name"
        value={dictionaryName}
        handleInput={(newValue: string) => setDictionaryName(newValue)}
        icon="fa-solid fa-republican"
        error={isError}
        errorMessage="A dictionary with this name has already been created"
      />

      <ControlPanel
        handleSubmit={handleSubmit}
        handleReset={handleReset}
        isDisable={dictionaryName === '' || isError}
      />
    </section>
  );
};
