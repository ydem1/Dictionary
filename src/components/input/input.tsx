import classNames from "classnames";
import React from "react";

type Props = {
  label: string,
  value: string,
  handleInput: (newValue: string) => void,
  icon: string,
  Error: boolean,
};

export const Input: React.FC<Props> = ({
  label,
  value,
  handleInput,
  icon,
  Error,
}) => {


  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className={classNames(
            'input',
            { 'is-success': !Error && value !== '' },
            { 'is-danger': Error },
          )}
          type="text"
          placeholder="Text input"
          onChange={(event) => handleInput(event.target.value)}
          value={value}
        />

        <span className="icon is-small is-left">
          <i className={icon}></i>
        </span>

        <span className="icon is-small is-right">
          <i className={classNames(
            { 'fas fa-check': !Error && value !== '' },
            { 'fa-solid fa-triangle-exclamation': Error },

          )}></i>
        </span>
      </div>

      {Error && <p className="help is-danger">A dictionary with this name has already been created</p>}
      {!Error && value !== '' && <p className="help is-success">This username is available</p>}
    </div>
  );
};
{/* <i class="fa-solid fa-triangle-exclamation"></i> */ }