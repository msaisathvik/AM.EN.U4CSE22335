import { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import TimeSelector from '../components/TimeSelector';
import StockChart from '../components/StockChart';
import { fetchStockData } from '../api/stockService';

export default function StockPage() {
  const [minutes, setMinutes] = useState(30);
  const [stockData, setStockData] = useState(null);
  const ticker = "NVDA"; // default for now

  useEffect(() => {
    async function loadData() {
      try {
        const res = await fetchStockData(ticker, minutes);
        setStockData(res);
      } catch (err) {
        console.error("Failed to fetch stock data", err);
      }
    }
    loadData();
  }, [minutes]);

  return (
    <Container>
      <Typography variant="h4" mt={2}>Stock Price Aggregator</Typography>
      <TimeSelector minutes={minutes} setMinutes={setMinutes} />
      {stockData ? (
        <StockChart data={stockData.priceHistory} average={stockData.averageStockPrice} />
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
}
