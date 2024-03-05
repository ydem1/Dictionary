import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";
import classNames from "classnames";

export const Header = () => {
  const isActiveCallback = ({ isActive }: { isActive: boolean }) => (
    classNames('header__link',
      {
        'header__link--isActive': isActive,
      })
  );

  const [tab, setTab] = useState('Dictionary');

  return (
    <header className="header">
      <h1 className="header__logo">{tab}</h1>

      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink
              className={isActiveCallback}
              onClick={() => setTab('Dictionary')}
              to="/"
            >
              Dictionary
            </NavLink>
          </li>

          <li className="header__item">
            <NavLink
              className={isActiveCallback}
              onClick={() => setTab('Create new dictionary')}
              to="/add"
            >
              Create new dictionary
            </NavLink>
          </li>

          <li className="header__item">
            <NavLink
              className={isActiveCallback}
              onClick={() => setTab('Memorization')}
              to="/memorization"
            >
              Memorization
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
};
