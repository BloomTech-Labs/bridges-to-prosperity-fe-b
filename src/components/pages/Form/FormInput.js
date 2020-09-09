import React from 'react';

const FormInput = ({ siteKeyValuePair, changeHandler = null }) => {
  console.log(siteKeyValuePair);
  const siteKey = siteKeyValuePair[0];
  const siteValue = siteKeyValuePair[1];
  let inputType = null;

  if (
    siteKey === 'id' ||
    siteKey === 'individualsDirectlyServed' ||
    siteKey === 'latitude' ||
    siteKey === 'longitude'
  ) {
    inputType = 'number';
  } else {
    inputType = 'text';
  }

  return (
    <input
      type={inputType}
      name={siteKey}
      placeholder={siteKey}
      value={siteValue}
      onChange={changeHandler}
    />
  );
};

export default FormInput;
