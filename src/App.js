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
import { MedicalsPage, Dashboard, History } from "./components/Dashboard";
import { UserProvider } from "./context/user/UserContext";

function App() {
  return (
    <>
    <UserProvider>
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
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="/dashboard/main" element={<Dashboard />} />
              <Route path="medical" element={<MedicalsPage />} />
              <Route path="wallet" element={<Dashboard />} />
              <Route path="history" element={<History />} />
            </Route>
          </Routes>
        </>
      </Router>
      </UserProvider>
    </>
  );
}

export default App;
