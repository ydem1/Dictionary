import './dictionary.scss';

export const Dictionary = () => {
  const dictionary = [
    {
      ukr: 'собака',
      eng: 'dog',
    },
    {
      ukr: 'кіт',
      eng: 'cat',
    },
    {
      ukr: 'птах',
      eng: 'bird',
    },
    {
      ukr: 'кролик',
      eng: 'rabbit',
    },
    {
      ukr: 'олень',
      eng: 'deer',
    },
    {
      ukr: 'мавпа',
      eng: 'monkey',
    },
    {
      ukr: 'слон',
      eng: 'elephant',
    },
    {
      ukr: 'тигр',
      eng: 'tiger',
    },
    {
      ukr: 'ведмідь',
      eng: 'bear',
    },
    {
      ukr: 'лисиця',
      eng: 'fox',
    },
  ];

  const name = 'new dictionary';

  return (
    <article className="dictionary">
      <h3 className="dictionary__name">
        {name}
      </h3>

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
          <li className="dictionary__words">
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
