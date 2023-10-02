import axios from 'axios';

export const fetchapi = axios.create({
    baseURL: 'http://localhost:1337/api',
    headers: { 
        'Authorization': 'Bearer 7e6face527f9cae8beb114f9759dab91bb4d4eff21291d2c7d618d32a16535f9d950314cd9be722965173b5c3fb3d703021fc068666b66bde827b9fd80f2e67510912f40bb38d52730101b1dc8fb29d08a593582671e4de6356333ff1ca60920162b383ac6d6234e1f0517e6d1ff458b3fb1a5b5714b99cfb03df3cc6d01c346'
      },
});