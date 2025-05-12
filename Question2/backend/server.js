const express = require('express');
const axios = require('axios');

const app = express(); // Initialize the Express application
const PORT = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define the endpoint to get the stock price data for the specified ticker
app.get('/stocks/:ticker', async (req, res) => {
  const { ticker } = req.params;
  const { minutes = 30, aggregation = 'average' } = req.query; // Default to 30 minutes if not provided

  try {
    // Make the request to the stock price API (test server)
    const response = await axios.get(`http://20.244.56.144/evaluation-service/stocks/${ticker}?minutes=${minutes}`);
    
    const priceHistory = response.data;

    // Calculate the average price from the price history
    const averagePrice = priceHistory.reduce((sum, entry) => sum + entry.price, 0) / priceHistory.length;

    // Send the data to the frontend with the calculated average
    res.json({
      averageStockPrice: averagePrice,
      priceHistory: priceHistory.map(entry => ({
        price: entry.price,
        lastUpdatedAt: entry.lastUpdatedAt
      }))
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
