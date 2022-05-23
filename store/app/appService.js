import Geolocation from 'react-native-geolocation-service';

const getPosition = async () => {
  const response = Geolocation.getCurrentPosition(
    position => {
      console.log(position);
      return position;
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
  return response;
};

const appService = {
  getPosition,
};

export default appService;
