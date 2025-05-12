import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ReferenceLine } from 'recharts';
import { Typography } from '@mui/material';

export default function StockChart({ data, average }) {
  return (
    <>
      <Typography variant="h6" align="center" mt={2}>Stock Price Chart</Typography>
      <LineChart width={800} height={400} data={data}>
        <XAxis dataKey="lastUpdatedAt" />
        <YAxis />
        <Tooltip />
        <CartesianGrid strokeDasharray="3 3" />
        <Line type="monotone" dataKey="price" stroke="#1976d2" />
        <ReferenceLine y={average} label="Avg" stroke="red" strokeDasharray="3 3" />
      </LineChart>
    </>
  );
}
