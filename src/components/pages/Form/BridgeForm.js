import React, { useContext, useEffect } from 'react';
import FormInput from './FormInput';
import { BridgesContext } from '../../../state/bridgesContext';

const testState = {
  id: 1014107,
  province: 'Northern Province',
  district: 'filler name',
  bridge_site_name: 'Buzi',
  type: 'Suspended',
  stage: 'Rejected',
  subStage: 'Technical',
  individualsDirectlyServed: 0.0,
  span: '',
  latitude: -2.42056,
  longitude: 28.9662,
  communitiesServed: [
    {
      id: 22050101,
      name: 'Agahehe',
    },
    {
      id: 22050102,
      name: 'Kabacuzi',
    },
    {
      id: 22050103,
      name: 'Kamutozo',
    },
    {
      id: 22050104,
      name: 'Kamweko',
    },
  ],
};

const BridgeForm = () => {
  const { detailsData, setDetailsData } = useContext(BridgesContext);
  let detailEntries;

  useEffect(() => {
    setDetailsData(testState);
  }, []);
  if (detailsData) {
    detailEntries = Object.entries(detailsData);
  }
  // console.log(detailEntries);

  const changeHandler = ev => {
    ev.persist();

    setDetailsData({
      ...detailsData,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // make a PUT request to edit the item
  };
  return (
    <div>
      <h3>Edit Bridge Site Information Form</h3>
      <form onSubmit={handleSubmit}>
        {detailsData &&
          detailEntries.map(element => (
            <FormInput
              siteKeyValuePair={element}
              changeHandler={changeHandler}
            />
          ))}
        <button>Update</button>
      </form>
    </div>
  );
};

export default BridgeForm;
