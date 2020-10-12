import React from 'react';
import { Checkbox } from 'antd';

const FilterBridgesCheckboxes = props => {
  return (
    <div className="check-box-section">
      <div className="restricted" style={{ color: 'red' }}>
        <Checkbox
          checked={props.rejectedChecked}
          onChange={() => props.setRejectedChecked(!props.rejectedChecked)}
          style={{ margin: '0 5px' }}
        />
        Rejected
      </div>
      <div className="restricted" style={{ color: 'orange' }}>
        <Checkbox
          checked={props.identifiedChecked}
          onChange={() => props.setIdentifiedChecked(!props.identifiedChecked)}
          style={{ margin: '0 5px' }}
        />{' '}
        Identified
      </div>
      <div className="restricted" style={{ color: 'green' }}>
        <Checkbox
          checked={props.completedChecked}
          onChange={() => props.setCompletedChecked(!props.completedChecked)}
          style={{ margin: '0 5px' }}
        />
        Completed
      </div>
      <div className="restricted" style={{ color: 'purple' }}>
        <Checkbox
          checked={props.confirmedChecked}
          onChange={() => props.setConfirmedChecked(!props.confirmedChecked)}
          style={{ margin: '0 5px' }}
        />{' '}
        Confirmed
      </div>
      <div className="restricted" style={{ color: 'blue' }}>
        {' '}
        <Checkbox
          checked={props.prospectingChecked}
          onChange={() =>
            props.setProspectingChecked(!props.prospectingChecked)
          }
          style={{ margin: '0 5px' }}
        />{' '}
        Prospecting
      </div>
      <div className="restricted" style={{ color: 'dark gray' }}>
        <Checkbox
          checked={props.constructionChecked}
          onChange={() =>
            props.setConstructionChecked(!props.constructionChecked)
          }
          style={{ margin: '0 5px' }}
        />{' '}
        Under Construction
      </div>
    </div>
  );
};

export default FilterBridgesCheckboxes;
