import { useSelector } from 'react-redux';
import './edit.dictionary.scss';
import { RootState } from '../../store/store';
import { Dictionary } from '../../pages/dictionary.page/components';
import { editDictionaryColor } from '../../constants/colors';

type Props = {
  dictionaryKey: string,
  handleBtn: () => void,
}

export const EditDictionary: React.FC<Props> = ({ dictionaryKey, handleBtn }) => {
  const dictionaries = useSelector((state: RootState) => state.dictionarys.value);
  const dictionary = dictionaries[dictionaryKey];

  return (
    <article className="edit-dictionary">
      <div className="edit-dictionary__dictionary">
        <Dictionary
          name={dictionaryKey}
          dictionary={dictionary}
          background={editDictionaryColor}
          handleBtn={handleBtn}
        />

        
      </div>
    </article >
  );
};
