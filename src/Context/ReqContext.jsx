import { createContext } from "react";
import axios from "../Components/InterceptorFile/interceptor";
import Url from "../Components/InterceptorFile/backendUrl"
import Cookies from "js-cookie";

const ReqContext=createContext();

export const ReqContextProvider=({children})=>{

    const login = async (payload) => {
        console.log("hello");
        return axios.post(Url+"user/signin", payload);
    };

    const homedata=async()=>{
        console.log("hii")
        return axios.get(Url+"user/homedata",
        {
             headers: {
                 "Content-Type": "application/json",
                 Authorization: 'Bearer ' + Cookies.get('ac_token')
             }
         })
    }

    return (
        <>
            <ReqContext.Provider value={{login,homedata}}>
                {children}
            </ReqContext.Provider>
        </>
    );
};
export default ReqContext;

