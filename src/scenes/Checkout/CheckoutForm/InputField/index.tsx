import React from 'react';

function InputField(props: {
  id: string;
  type: string;
  label: string;
  value: string;
  onChange: Function;
}) {
  const { id, label, type, value, onChange } = props;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        className="w-full border border-black p-2 rounded-none"
        required
      />
    </div>
  );
}

export default InputField;
