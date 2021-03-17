import React from "react";

export interface CopyTextFieldProps {
  label: string;
  defText: string;
}

export const CopyTextField: React.FC<CopyTextFieldProps> = ({
  label,
  defText,
}) => {
  const reference: React.RefObject<HTMLInputElement> = React.createRef();
  const copyLink = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (reference.current) {
      reference.current.select();
      document.execCommand("copy");
    }
  };
  return (
    <div>
      {label}
      <input ref={reference} defaultValue={defText}></input>
      <button onClick={copyLink}>Copy</button>
    </div>
  );
};
