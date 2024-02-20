import { Link } from "react-router-dom";
const Details = () => {
    const users=[{
        firstName:"Anshuman",
        lastName:"Tiwari"
    },
    {
        firstName:"Justin",
        lastName:"Tripathi"
    }
]
    return (
        <div className="mt-10">
            <div className="font-bold">
                Users
            </div>
            <div className="mt-4">
                <input type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
            </div>
            <div>
                {users.map(user => <User user={user} key={user.firstName} />)}
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
                        {user.firstName[0]}
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="w-fit h-fit pl-4">
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            <div className="flex items-center ">
                <div className="h-fit w-fit">
                    <Link 
                        to={"/send"}
                        state={{firstName:user.firstName+" "+user.lastName}}>
                    <button className=" bg-black text-white h-9 w-36 text-sm rounded-lg">Send Money</button></Link>
                </div>

            </div>

        </div>
    )
}
 
export default Details;