import axios from 'axios';

function fetchStockData(ticker, minutes) {
  axios
    .get(`http://localhost:5000/stocks/${ticker}?minutes=${minutes}&aggregation=average`)
    .then((response) => {
      // Handle the response data
      console.log(response.data);
    })
    .catch((error) => {
      // Handle errors
      console.error('Error fetching stock data:', error);
    });
}
