import Appbar from "../Utility/Appbar";
import Details from "../Utility/Details";
const Dashboard = () => {
    return ( 
        <div className="items-center justify-center">
            <Appbar/>
            <div className="w-full h-fit p-10">
                <div className="flex">
                    <div className="font-semibold">Your Balance</div>
                    <div className="ml-5">Rs 10,000</div>
                </div>
                <Details/>
            </div>
        </div>
     );
}
 
export default Dashboard;