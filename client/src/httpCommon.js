import axios from "axios";

export default axios.create({
    baseURL:"http://localhost/final-project-beavers/server/",
    headers:{
        // "Content-type":"application/json"
    }
})