import React, { useState } from 'react';
import { Checkbox, Button } from 'antd';

const FilterBridgesCheckboxes = ({
  rejectedChecked,
  setRejectedChecked,
  identifiedChecked,
  setIdentifiedChecked,
  completedChecked,
  setCompletedChecked,
  confirmedChecked,
  setConfirmedChecked,
  prospectingChecked,
  setProspectingChecked,
  constructionChecked,
  setConstructionChecked,
}) => {
  return (
    <div className="check-box-section">
      <Checkbox
        checked={rejectedChecked}
        onChange={() => setRejectedChecked(!rejectedChecked)}
        style={{ margin: '0 5px' }}
      />{' '}
      Rejected
      <Checkbox
        checked={identifiedChecked}
        onChange={() => setIdentifiedChecked(!identifiedChecked)}
        style={{ margin: '0 5px' }}
      />{' '}
      Identified
      <Checkbox
        checked={completedChecked}
        onChange={() => setCompletedChecked(!completedChecked)}
        style={{ margin: '0 5px' }}
      />
      Completed
      <Checkbox
        checked={confirmedChecked}
        onChange={() => setConfirmedChecked(!confirmedChecked)}
        style={{ margin: '0 5px' }}
      />{' '}
      Confirmed
      <Checkbox
        checked={prospectingChecked}
        onChange={() => setProspectingChecked(!prospectingChecked)}
        style={{ margin: '0 5px' }}
      />{' '}
      Prospecting
      <Checkbox
        checked={constructionChecked}
        onChange={() => setConstructionChecked(!constructionChecked)}
        style={{ margin: '0 5px' }}
      />{' '}
      Under Construction
    </div>
  );
};

export default FilterBridgesCheckboxes;
