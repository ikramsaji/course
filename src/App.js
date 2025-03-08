import { useEffect, useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './omoponents/SignUp';
import Header from './omoponents/Header'
import Home from './Home'; // Page Home
// import About from './About'; // Page About
// import Contact from './Contact'; // Page Contact
import Register from './omoponents/SignUp'; // Page Register
import Login from './Login'; // Page Login
import Dashboard from './Dashboard';
import Settings from '../src/Settings'
import Profile from '../src/Profile'
import Edit from '../src/Edit'
function App() {
  // const [firstname, setFirstname] = useState("");
  // console.log(firstname);//pour forms

  // const datashow = Data.map((i) => (
  //   <Cards image={i.image} title={i.title} desc={i.desc} key={i.id} /> // utiliser props pour aficher les card dynamiquement selan la base de donnée
  // ));


  // useEffect(()=>{fetch("https://api.imgflip.com/get_memes").then(res=>res.json()).then(data=>console.log(data))},[]); pour recuperee les data depuiis api
  


  //use use effect and usestate and props




//   const [data,setData]= useState([]);
//  const datashow= data.map((item,index)=><Name name={item} key={index} />) ;
 
//   useEffect(() => {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((res) => res.json())
//       .then((data) => console.log(setData(data.data.memes.map((i) => i.name))));
//   }, []);
  
  return (
    <div>
      {/* <form>
        <label htmlFor='1'>username</label>
        <input 
        id='1'
          type='text' 
          value={firstname} 
          onChange={(e) => setFirstname(e.target.value)} 
        />
      </form> */}



      {/* {datashow} */}

{/* {datashow} */}



      <Header />
      <Routes>
         <Route path="/Home" element={<Home />} />
      { /* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} >
          <Route path="profile" element={<Profile/>} />
          <Route path="profile/:id" element={<Edit />} />
          <Route path="settings" element={<Settings />} />
        </Route >
      </Routes>
  

    </div>
  );
}

export default App; // Don't forget to export the component