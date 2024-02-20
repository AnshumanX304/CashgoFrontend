import { useLocation } from "react-router-dom";
const Sendmoney = () => {
    
    const location=useLocation()
    return ( 
        <div className="flex justify-center  items-center h-screen bg-slate-100">
            <div className="w-fit h-fit shadow-xl rounded-lg bg-white">
                <div className="p-10">
                    <div className=" font-extrabold text-4xl flex justify-center items-center">
                        <div className="h-fit w-fit">Send Money</div>
                    </div>
                    <div className="flex mt-20"> 
                        <div className=" h-16 w-16 rounded-full flex justify-center items-center bg-green-500">
                            <div className="text-white font-semibold text-3xl">
                                {location.state.firstName[0]}
                            </div>
                        </div>
                        <div className=" text-3xl  flex justify-center items-center">
                            <div className="mx-3 font-bold">
                                {location.state.firstName}
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p className="font-semibold">Amount (in Rs)</p>
                        <input className="w-full mt-5 border-2 p-2 rounded-lg border-slate-300" placeholder="Enter the amount"/>
                        <button className="w-full bg-green-500 my-5 h-10 text-base rounded-lg text-white hover:bg-green-400 hover:scale-101">Initiate Transfer</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Sendmoney;