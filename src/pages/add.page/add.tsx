import { useState } from "react";
import { Input } from "../../components/input";
import { useDispatch, useSelector } from "react-redux";
import { initNewDictionary } from "../../slices/dictionarysSlice";
import { RootState } from "../../store/store";

import './add.scss';
import { ControlPanel } from "../../components/control.panel";
import { EditDictionary } from "../../components/edit.dictionary";

export const AddPage = () => {
  const [isEditDictionary, setIsEditDictionary] = useState(false);

  const Dictionareis = useSelector((state: RootState) => state.dictionarys.value)
  const dispatch = useDispatch();

  const [dictionaryName, setDictionaryName] = useState('');

  const isError = Object.keys(Dictionareis).some(key => key === dictionaryName);

  const handleSubmit = () => {
    dispatch(initNewDictionary({ key: dictionaryName }));
    setIsEditDictionary(true)
  };

  const handleReset = () => {
    setDictionaryName('');
  };

  const handleClickBtn = () => {
    setIsEditDictionary(false);
    handleReset();
  }

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

      {isEditDictionary &&
        <EditDictionary
          dictionaryKey={dictionaryName}
          handleBtn={handleClickBtn}
        />
      }
    </section>
  );
};
