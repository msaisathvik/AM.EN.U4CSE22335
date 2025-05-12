import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, CircularProgress } from '@mui/material';
import Heatmap from '../components/Heatmap';

const CorrelationHeatmapPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const minutes = 30;

  useEffect(() => {
    axios
      .get(`/correlation?minutes=${minutes}`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch correlation data:', error);
        setLoading(false);
      });
  }, [minutes]);

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
        Stock Correlation Heatmap - Last {minutes} Minutes
      </Typography>
      <Heatmap data={data} />
    </Container>
  );
};

export default CorrelationHeatmapPage;
