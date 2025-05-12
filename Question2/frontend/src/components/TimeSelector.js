import { MenuItem, Select, InputLabel, FormControl } from '@mui/material';

export default function TimeSelector({ minutes, setMinutes }) {
  return (
    <FormControl fullWidth>
      <InputLabel>Time Interval (minutes)</InputLabel>
      <Select
        value={minutes}
        label="Time Interval (minutes)"
        onChange={(e) => setMinutes(e.target.value)}
      >
        {[5, 10, 30, 60, 120].map((val) => (
          <MenuItem key={val} value={val}>{val}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
