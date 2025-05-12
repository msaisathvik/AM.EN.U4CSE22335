import * as React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function TimeSelector({ onIntervalChange }) {
  const [interval, setInterval] = React.useState(5);

  const handleChange = (event) => {
    const newInterval = event.target.value;
    setInterval(newInterval);
    if (onIntervalChange) {
      onIntervalChange(newInterval);
    }
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="interval-label">Time Interval (minutes)</InputLabel>
      <Select
        labelId="interval-label"
        value={interval}
        label="Time Interval (minutes)"
        onChange={handleChange}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={60}>60</MenuItem>
      </Select>
    </FormControl>
  );
}

export default TimeSelector;
