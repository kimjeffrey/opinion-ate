import axios from 'axios';

const client = axios.create({
  baseURL:
    'https://outside-in-dev-api.herokuapp.com/dR5mZOOUsHllIbRnyjGsYC0u9IkEkeUx',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(res => res.data);
  },
  createRestaurant(name) {
    return client.post('/restaurants', {name}).then(res => res.data);
  },
};

export default api;
