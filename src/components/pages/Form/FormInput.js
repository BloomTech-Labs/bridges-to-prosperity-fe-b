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
    <>
      {siteKey !== 'communitiesServed' ? (
        <input
          type={inputType}
          name={siteKey}
          placeholder={siteKey}
          value={siteValue}
          onChange={changeHandler}
        />
      ) : (
        <div>
          <span>Communities Served</span>
          {siteValue.map(element => (
            <div>
              <input
                type="number"
                name="id"
                placeholder="id"
                value={element.id}
                onChange={changeHandler}
              />
              <input
                type="text"
                name="name"
                placeholder="name"
                value={element.name}
                onChange={changeHandler}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default FormInput;
