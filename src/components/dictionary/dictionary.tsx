import React from 'react';
import classNames from 'classnames';

import { editDictionaryColor } from '../../constants/colors';
import { Dictionaries } from '../../types/Dictionary';

import './dictionary.scss';
import { useDispatch } from 'react-redux';
import { removeWordToDictionary } from '../../slices/dictionarysSlice';

type Props = {
  name: string,
  dictionary: Dictionaries[],
  background: string,
  handleBtn: (currentDictionary: string) => void,
}

export const Dictionary: React.FC<Props> = ({
  name,
  dictionary,
  background,
  handleBtn,
}) => {
  const dispatch = useDispatch();
  const isEdit = background === editDictionaryColor;

  return (
    <article className="dictionary">
      <div className="dictionary__header" style={{ background: background }}>
        <h3 className="dictionary__name">
          {name}
        </h3>

        <button
          onClick={() => handleBtn(name)}
          className="dictionary__btn"
        >
          <span className="icon is-small is-left">

            <i className={classNames(
              { 'fa-regular fa-pen-to-square': !isEdit },
              { 'fa-regular fa-circle-xmark': isEdit },
            )} />
          </span>
        </button>
      </div>

      <ul className="dictionary__list">
        <li className="dictionary__title">
          <h4 className="dictionary__title-eng">
            English
          </h4>

          <h4 className="dictionary__title-ukr">
            Ukraine
          </h4>
        </li>
        {dictionary.map((item, index) => (
          <li
            key={`id:${item.eng}${item.ukr}`}
            className="dictionary__words"
          >
            <p className="dictionary__eng">
              {item.eng}
            </p>

            <div className="dictionary__rigth-side">
              <p className="dictionary__ukr">
                {item.ukr}
              </p>

              {isEdit && (
                <button
                  onClick={() => dispatch(removeWordToDictionary({ key: name, indexRemove: index }))}
                  className="dictionary__btn-delete"
                >
                  <i className="fa-solid fa-trash fa-2xs" />
                </button>
              )}
            </div>
          </li>
        ))}

        <li className="dictionary__bottom">
          <div className="dictionary__separator" />

          <div className="dictionary__total">
            <p className="dictionary__total-title">
              Total
            </p>
            <p className="dictionary__total-value">
              {dictionary.length}
            </p>
          </div>
        </li>
      </ul>
    </article>
  );
};
