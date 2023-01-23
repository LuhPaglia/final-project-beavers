import { useEffect } from "react";

const Logout = () => {
    useEffect(()=>{
        sessionStorage.clear();
        window.location.href = '/';
      })
}
export default Logout;