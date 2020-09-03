import React, { useState } from 'react';

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
  const [site, setSite] = useState(testState);

  const changeHandler = ev => {
    ev.persist();

    setSite({
      ...site,
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
        <input
          type="number"
          name="id"
          onChange={changeHandler}
          placeholder="id"
          value={site.id}
        />
        <input
          type="text"
          name="province"
          onChange={changeHandler}
          placeholder="province"
          value={site.province}
        />

        <input
          type="text"
          name="district"
          onChange={changeHandler}
          placeholder="district"
          value={site.district}
        />

        <input
          type="text"
          name="bridge_site_name"
          onChange={changeHandler}
          placeholder="bridge_site_name"
          value={site.bridge_site_name}
        />

        <input
          type="text"
          name="type"
          onChange={changeHandler}
          placeholder="type"
          value={site.type}
        />

        <input
          type="text"
          name="stage"
          onChange={changeHandler}
          placeholder="stage"
          value={site.stage}
        />

        <input
          type="text"
          name="province"
          onChange={changeHandler}
          placeholder="province"
          value={site.province}
        />

        <input
          type="text"
          name="subStage"
          onChange={changeHandler}
          placeholder="subStage"
          value={site.subStage}
        />

        <input
          type="text"
          name="province"
          onChange={changeHandler}
          placeholder="province"
          value={site.province}
        />

        <input
          type="number"
          name="individualsDirectlyServed"
          onChange={changeHandler}
          placeholder="individualsDirectlyServed"
          value={site.individualsDirectlyServed}
        />

        <input
          type="text"
          name="span"
          onChange={changeHandler}
          placeholder="span"
          value={site.span}
        />

        <input
          type="number"
          name="latitude"
          onChange={changeHandler}
          placeholder="latitude"
          value={site.latitude}
        />

        <input
          type="number"
          name="longitude"
          onChange={changeHandler}
          placeholder="longitude"
          value={site.longitude}
        />

        <span>Communities Served: </span>

        {site.communitiesServed &&
          site.communitiesServed.map(community => (
            <div key={community.id}>
              <input
                type="number"
                name="id"
                onChange={changeHandler}
                placeholder="id"
                value={community.id}
              />
              <input
                type="text"
                name="name"
                onChange={changeHandler}
                placeholder="name"
                value={community.name}
              />
            </div>
          ))}

        <button>Update</button>
      </form>
    </div>
  );
};

export default BridgeForm;
