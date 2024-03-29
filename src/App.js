import {
  LandingPage,
  AboutUs,
  WhoCanDonate,
  BookAppointment,
  RequestBlood,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  LandingLayout,
  AppointmentLayout,
  RequestLayout,
  DashboardLayout,
} from "./components/Layout";
import "./index.css";
import { MedicalsPage, Dashboard, History, Wallet } from "./components/Dashboard";
import { Toaster } from 'react-hot-toast';
import { useUserLoginQuery } from "./features/user/useCheckAuth";
import { useConnect } from "@stacks/connect-react";
import React, { useState } from "react";

function App() {
 
  const [stxIsConnect, setstxIsConnect] = useState()
  
  useUserLoginQuery()

  const session = sessionStorage.getItem('INIT')
  if (session!==null) {
    
  }
  return (
    <>
   
    <Toaster position="top-center" reverseOrder={false} />
      <Router>
        <>
          <Routes>
            {/* Landing Page Routes */}
            <Route path="/" element={<LandingLayout />}>
              <Route index element={<LandingPage />} />
              <Route path="aboutus" element={<AboutUs />} />
              <Route path="who-can-donate" element={<WhoCanDonate />} />
            </Route>
            {/* Appointment Page Routes */}
            <Route path="/book-appointment" element={<AppointmentLayout />}>
              <Route index element={<BookAppointment />} />
            </Route>
            {/* RequestBlood Page Routes */}
            <Route path="/request-blood" element={<RequestLayout />}>
              <Route index element={<RequestBlood />} />
            </Route>
            {/* Dashboard Page Routes */}
            <Route path="/dashboard" element={<DashboardLayout setstxIsConnect={setstxIsConnect} />}>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard/main" element={<Dashboard />} />
              <Route path="medical" element={<MedicalsPage />} />
              <Route path="wallet" element={<Wallet stxIsConnect={stxIsConnect} />} />
              <Route path="history" element={<History />} />
            </Route>
          </Routes>
        </>
      </Router>
    </>
  );
}

export default App;
