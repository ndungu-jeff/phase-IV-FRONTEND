import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './components/common/LandingPage'
import AboutUs from './components/common/AboutUs';
import LogIn from './components/common/LogIn';

// OWNERS DASHBOARD

import OwnerDashboard from './components/owners/OwnerDashboard';
// sign up
import RegisterOwner from './components/owners/RegisterOwner';
// post property
import PostHouse from './components/owners/PostHouse';
// all clients
const OwnerHouseTiles = lazy(() =>
  import("./components/owners/OwnerHouseTiles")
);
// owner clients
const MyClients = lazy(() =>
  import("./components/owners/MyClients")
);
// view client
import ClientDetails from "./components/owners/ClientDetails"
// import HouseDetails from './components/owners/HouseDetails';

import ClientLogIn from './components/common/ClientLogIn';

// Clients' DASHBOARD
import ClientDashboard from './components/clients/ClientDashboard';
import RegisterClient from './components/clients/RegisterClient';
// all houses view
const AllHouses = lazy(() =>
  import("./components/clients/AllHouses")
)
// view single house
import HouseDetails from './components/clients/HouseDetails';
//view client house
const Mystays = lazy(() =>
  import("./components/clients/MyStays")
)
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  // console.log(user)

  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Suspense fallback={<h2>Loading, Please wait...</h2>}>
        <Routes>   
          {/* GENERAL ROUTE FOR ENTRY  */}
          <Route path='/' element={<LandingPage/>}/>  
          <Route path='/about' element={<AboutUs/>}></Route>     
          {/* OWNER DASHBOARD COMPONENTS */}
          <Route path="/owner">
            <Route index={true} element={<LogIn/>}></Route>
            <Route path='register' element={<RegisterOwner/>}/>
            <Route path='dashboard' element={<OwnerDashboard />}/>
            {/* new house */}
            <Route path="new-listing" element={<PostHouse/>}/>
            {/* see owner houses */}
            <Route path='properties'>
              <Route index={true}  element={<OwnerHouseTiles />}></Route>
              <Route path='view' element={<HouseDetails/>}/>
            </Route>
            {/* see owner clients */}
            <Route path='clients' element={<MyClients />}>
              <Route path='view' element={<ClientDetails/>}/>
            </Route>
          </Route>
          {/* RIDER DASHBOARD COMPONENTS */}
          <Route path="/client">
            <Route index={true} element={<ClientLogIn/>}></Route>
            <Route path='register' element={<RegisterClient/>} />
            <Route path='dashboard' element={<ClientDashboard />}/>
            {/* see all houses */}
            <Route path='listings' >
              <Route index={true} element={<AllHouses />}></Route>
              <Route path='view' element={<HouseDetails/>}/>
            </Route>
            {/* see client stay */}
            <Route path='stays' element={<Mystays />}>
              <Route path='view' element={<HouseDetails/>}/>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
