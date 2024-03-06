import classNames from "classnames";
import React from "react";

type Props = {
  label: string,
  placeHolder: string,
  value: string,
  handleInput: (newValue: string) => void,
  icon: string,
  error: boolean,
  errorMessage: string,
};

export const Input: React.FC<Props> = ({
  label,
  placeHolder,
  value,
  handleInput,
  icon,
  error,
  errorMessage,
}) => {

  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control has-icons-left has-icons-right">
        <input
          className={classNames(
            'input',
            { 'is-success': !error && value !== '' },
            { 'is-danger': error },
          )}
          type="text"
          placeholder={placeHolder}
          onChange={(event) => handleInput(event.target.value)}
          value={value}
        />

        <span className="icon is-small is-left">
          <i className={icon} />
        </span>

        <span className="icon is-small is-right">
          <i className={classNames(
            { 'fas fa-check': !error && value !== '' },
            { 'fa-solid fa-triangle-exclamation': error },
          )}/>
        </span>
      </div>

      {error && <p className="help is-danger">{errorMessage}</p>}
      {!error && value !== '' && <p className="help is-success">This input is available</p>}
    </div>
  );
};
