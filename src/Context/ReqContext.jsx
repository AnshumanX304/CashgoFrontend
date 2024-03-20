import { createContext } from "react";
import axios from "../Components/InterceptorFile/interceptor";



const ReqContext=createContext();

export const ReqContextProvider=({children})=>{

    const login = async (payload) => {
        console.log("hello");
        return axios.post("http://localhost:3333/user/signin", payload)
    };

    return (
        <>
            <ReqContext.Provider value={{login}}>
                {children}
            </ReqContext.Provider>
        </>
    );
};
export default ReqContext;

