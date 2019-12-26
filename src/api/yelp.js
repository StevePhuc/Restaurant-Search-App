import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Y0cceznK_qX3Yryx4FQzmLap0PeyQ9lFphhfy12doDMdBO-OYlLL4xi7q2JY09eOCwXXUtsw8heEOkvZn_gVYGko_3twR9Y6alMx5oc7cq3Yc2c4a12npbldS20DXnYx'
    }
})


