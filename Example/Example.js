// api.js
const axios = require('axios')

async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    console.log(response, "Response")
    return response?.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}


module.exports = fetchData