import React, { useState } from 'react';
import { Checkbox, Button } from 'antd';

const FilterBridgesCheckboxes = props => {
  return (
    <div className="check-box-section">
      <Checkbox
        checked={props.rejectedChecked}
        onChange={() => props.setRejectedChecked(!props.rejectedChecked)}
        style={{ margin: '0 5px' }}
      />{' '}
      Rejected
      <Checkbox
        checked={props.identifiedChecked}
        onChange={() => props.setIdentifiedChecked(!props.identifiedChecked)}
        style={{ margin: '0 5px' }}
      />{' '}
      Identified
      <Checkbox
        checked={props.completedChecked}
        onChange={() => props.setCompletedChecked(!props.completedChecked)}
        style={{ margin: '0 5px' }}
      />
      Completed
      <Checkbox
        checked={props.confirmedChecked}
        onChange={() => props.setConfirmedChecked(!props.confirmedChecked)}
        style={{ margin: '0 5px' }}
      />{' '}
      Confirmed
      <Checkbox
        checked={props.prospectingChecked}
        onChange={() => props.setProspectingChecked(!props.prospectingChecked)}
        style={{ margin: '0 5px' }}
      />{' '}
      Prospecting
      <Checkbox
        checked={props.constructionChecked}
        onChange={() =>
          props.setConstructionChecked(!props.constructionChecked)
        }
        style={{ margin: '0 5px' }}
      />{' '}
      Under Construction
    </div>
  );
};

export default FilterBridgesCheckboxes;
