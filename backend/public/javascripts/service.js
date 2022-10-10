const axios = require('axios')

const baseURL = "https://api.yelp.com/v3/businesses/search?term=icecream&location=Alpharetta+Ga";

// Make request
 const getYelpData = async ()  => {
   axios.defaults.headers['Authorization'] = 'Bearer nDvvoztcqyrfYTP_bunvMId01wUaES508rzVCNqRrxQzrjqV8ShGHRrN9E-IY4t1c0gw_wzJO8LX-MR0shzD4EE0Te9O-eQPdRF--lf9KMousVoZD4TcFR5HAzNEY3Yx'
  const data = (await axios.get(baseURL)).data
  return data.businesses.sort((a, b) => {
    const parsedA = parseInt(a.rating, 10);
    const parsedB = parseInt(b.rating, 10);
    return parsedA > parsedB ? -1 : 1; 
  }).map(selectFewerProps)
}

function selectFewerProps(show){
  const {id, name, alias, rating, location, phone, display_phone, image_url} = show;
  return {id, name, alias, rating, location, phone, display_phone, image_url};
}

module.exports = getYelpData;