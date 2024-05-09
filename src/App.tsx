import { useEffect, useState } from "react";
import "./App.css";

function App() {


const [user, setUser] = useState([])

 useEffect(()=>{
  getUserData()
 }, [])

 const getUserData = async () => {
  const result = await fetch('https://randomuser.me/api/')
  const res = await result.json()
  console.log(res?.results)
  setUser(res.results)
 }
 
  return (
    <div className="App mt-5">
      <div className="container">
        {user?.length && user.map((userData:any, idx:any)=>(
           <div className="row" key={userData.cell}>
           <div className="col-12">
             <img src={userData.picture.large} alt="" className="img-fluid" height={200}/>
           </div>
           <div className="col-12">
             <div className=" mt-2">
               <div className="h3 text-primary mr-4">
                 Cell :
               </div>
               <div className="h4 text-secondary">
                 {userData.cell}
               </div>
             </div>
           </div>
           <div className="col-12">
             <div className="h3 text-primary mr-4">
               <div>
                 DOB :
               </div>
               <div className="h4 text-secondary">
                 {userData.dob.date}
               </div>
             </div>
           </div>
           <div className="col-12">
             <div className="h3 text-primary mr-4">
               <div>
                 Email :
               </div>
               <div className="h4 text-secondary">
                 {userData.email}
               </div>
             </div>
           </div>
           <div className="col-12">
             <div className="h3 text-primary mr-4">
               <div>
                 Gender :
               </div>
               <div className="h4 text-secondary">
                 {userData.gender}
               </div>
             </div>
           </div>
         </div>
        ))}
       
      </div>
    </div>
  );
}

export default App;
