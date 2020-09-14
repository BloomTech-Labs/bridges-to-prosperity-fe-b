import React, { useState } from 'react';
import { Checkbox, Button } from 'antd';

const FilterBridgesCheckboxes = ({ completedChecked, setCompletedChecked }) => {
  return (
    <div className="check-box-section">
      <Checkbox style={{ margin: '0 5px' }} /> Rejected
      <Checkbox style={{ margin: '0 5px' }} /> Identified
      <Checkbox
        checked={completedChecked}
        onChange={() => setCompletedChecked(!completedChecked)}
        style={{ margin: '0 5px' }}
      />
      Completed
      <Checkbox style={{ margin: '0 5px' }} /> Confirmed
      <Checkbox style={{ margin: '0 5px' }} /> Prospecting
      <Checkbox style={{ margin: '0 5px' }} /> Under Construction
    </div>
  );
};

export default FilterBridgesCheckboxes;
