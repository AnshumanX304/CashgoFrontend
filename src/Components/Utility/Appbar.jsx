import { useRecoilValue } from "recoil";
import { detailsAtom } from "../../Store/Atoms/DetailsAtom";
import { useEffect,useState } from "react";
const Appbar = () => {
    const details=useRecoilValue(detailsAtom); 
    // const [details,setDetails]=useState({});
    // useEffect(()=>{
    //     setDetails(useRecoilValue(detailsAtom));
    // },[])
    
    return (
        <div className="shadow flex h-14 justify-between">
            <div className="flex font-bold flex-col ml-5 h-full justify-center">
                CashGo
            </div>
            <div className="flex mr-5 font-semibold">
                <div className="flex flex-col justify-center h-full mr-4">
                    Hello
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {details.firstname[0].toUpperCase()}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Appbar;