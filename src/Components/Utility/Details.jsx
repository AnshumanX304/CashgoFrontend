import { Link } from "react-router-dom";
import ReqContext from "../../Context/ReqContext";
import { useState,useContext,useEffect } from "react";


const Details = () => {

    const [users,setUsers]=useState([]);
    const {homedata}=useContext(ReqContext);
    async function getData(){
        await homedata()
        .then((res)=>{
            console.log(res)
            setUsers(res.data.users)
            console.log(users);
        })
        .catch((err)=>{
            console.log(err.response.data);
        })
    }
    
    useEffect(()=>{
        getData();
    },[])

    return (
        <div className="mt-10">
            <div className="font-bold">
                Users
            </div>
            <div className="mt-4">
                <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
            </div>
            <div>
                {users?users.map(user => <User user={user} key={user.id} />):<div>loading</div>}
            </div>
        </div>
      );
}

function User({user}){
    return(
        <div className="flex justify-between my-6 shadow">
            <div className="flex my-3 mx-2">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center">
                    <div className="flex flex-col justify-center h-full text-base">
                        {user.firstname[0]}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-fit h-fit pl-4">
                        {user.firstname} {user.lastname}
                    </div>
                </div>
            </div>
            <div className="flex items-center ">
                <div className="h-fit w-fit">
                    <Link 
                        to={"/send"}
                        state={{firstname:user.firstname+" "+user.lastname}}>
                    <button className=" bg-black text-white h-9 w-36 text-sm rounded-lg hover:scale-101 hover:bg-green-500 hover:text-sm">Send Money</button></Link>
                </div>

            </div>

        </div>
    )
}
 
export default Details;