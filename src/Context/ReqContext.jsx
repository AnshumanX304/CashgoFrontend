import { createContext } from "react";
const ReqContext=createContext();

export const ReqContextProvider=({children})=>{

    
    return (
        <>
            <ReqContext.Provider value={{}}>
                {children}
            </ReqContext.Provider>
        </>
    )
}
export default ReqContext;

