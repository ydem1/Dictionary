import React from 'react';
import classNames from 'classnames';

import { editDictionaryColor } from '../../../constants/colors';
import { Dictionaries } from '../../../types/Dictionary';

import './dictionary.scss';

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
  const isCloseIcon = background === editDictionaryColor;

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
              { 'fa-regular fa-pen-to-square': !isCloseIcon },
              { 'fa-regular fa-circle-xmark': isCloseIcon },
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
        {dictionary.map(item => (
          <li
            key={`id:${item.eng}${item.ukr}`}
            className="dictionary__words"
          >
            <p className="dictionary__eng">
              {item.eng}
            </p>

            <p className="dictionary__ukr">
              {item.ukr}
            </p>
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
