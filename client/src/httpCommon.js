import axios from "axios";

export default axios.create({
    baseURL:"http://localhost/final-project-beavers/server/services/",
    headers:{
        // "Content-type":"application/json"
    }
})
