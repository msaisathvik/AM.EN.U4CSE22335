import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, CircularProgress } from '@mui/material';
import StockChart from '../components/StockChart';

const StockPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const ticker = 'AAPL'; // Example ticker
  const minutes = 30;

  useEffect(() => {
    axios
      .get(`/stocks/${ticker}?minutes=${minutes}&aggregation=average`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch stock data:', error);
        setLoading(false);
      });
  }, [ticker, minutes]);

  if (loading) {
    return (
      <Container>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {ticker} Stock Price - Last {minutes} Minutes
      </Typography>
      <StockChart data={data.priceHistory} average={data.averageStockPrice} />
    </Container>
  );
};

export default StockPage;
