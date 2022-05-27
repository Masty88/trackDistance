import axios from 'axios';

//Matrix
const getDirection = async (startCoordinates, endCoordinates) => {
  const response = await axios.get(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${startCoordinates};${endCoordinates}?access_token=`)
  return response.data;
};

const appService = {
  getDirection,
};

export default appService;
