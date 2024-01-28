import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '994b8ffb811f49869591d7989ad08b1e'
    }
})