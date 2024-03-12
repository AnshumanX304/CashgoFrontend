import { Link } from "react-router-dom";

const signin = () => {
    return ( 
        <div className="bg-[#737373] h-screen flex justify-center items-center" >
            <div className="h-fit w-fit bg-white rounded-lg p-5">
                <div className="flex justify-center items-center mb-5">
                    <div><p className="text-3xl text-center font-extrabold ">Sign In</p></div>
                </div>
                <div className="flex justify-center items-center ">
                    <div><p className="text-slate-500 text-xl text-center mx-3">Enter your credentials to access your account</p></div>
                </div>
                <div className="flex">
                    <div className="my-3 mx-3 w-full">
                        <form>
                            <label className="font-semibold my-2 ">Email</label>
                            <br></br>
                            <input className="w-full mb-5 mt-3 border-2 p-2 rounded-lg border-slate-300" type="email" placeholder="johndoe@example.com"/>
                            <br></br>
                            <label className="font-semibold my-2">Password</label>
                            <br></br>
                            <input className="w-full mb-5 mt-3 border-2 p-2 rounded-lg border-slate-300" type="password"/>
                            <br></br>
                            <button className="bg-black text-white w-full rounded-lg h-10 my-3">Sign In</button>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center align-center mb-5">
                    <div>Don't have an account ? <Link to="/signup"><span href="" className="underline">Sign Up</span></Link></div>
                </div>
            </div>
        </div>
     );
}
 
export default signin;