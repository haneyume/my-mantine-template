import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export { axios };

console.log('🐳', 'using provider - api');
