import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:8888/course-06/final-project-beavers/server/services/",
    headers:{
        // "Content-type":"application/json"
    }
})
