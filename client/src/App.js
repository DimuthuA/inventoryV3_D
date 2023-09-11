import "./App.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Resources from "./components/inventoryList/Resources";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./components/inventoryList/Update";
import Add from "./components/inventoryList/Add";
import MoreDetails from "./components/inventoryList/MoreDetails";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import DashBoard from "./components/common/DashBoard";
import NavBar from "./components/nav-bar/NavBar";
import ShowNavBar from "./components/nav-bar/ShowNavBar";
import Account from "./components/common/Account";
import Contact from "./components/common/Contact";
import MoreDetailsPub from "./components/inventoryList/MoreDetailsPub";
import CheckIn from "./components/check-in-out/CheckIn";
import CheckOut from "./components/check-in-out/CheckOut";
import Access from "./components/Auth/Access";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import ReportSection from "./components/reports/ReportSection";
import AdminDashboard from "./components/common/AdminDashboard";
import Piechart from "./components/reports/Piechart";
import Reserve from "./components/inventoryList/Reserve";

import AddReservDate from"./components/inventoryList/AddReservDate";
import Analytics from "./components/reports/Analytics";
import Maintenance from "./components/inventoryList/Maintenance";
import MaintenanceAdd from "./components/inventoryList/MaintenanceAdd";
import MtClashHandle from "./components/inventoryList/MtClashHandle";
import AdminReserView from "./components/inventoryList/AdminReserView";
import AdminMaintenanceView from "./components/inventoryList/AdminMaintenanceView";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <ShowNavBar>
          <NavBar />
        </ShowNavBar>
        <Routes>
          <Route path="/resources" element={<Resources />}></Route>
          <Route
            path="/add"
            element={
              <ProtectedRoute allowedRoles={Access.add}>
                <Add />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/update/:id"
            element={
              <ProtectedRoute allowedRoles={Access.update}>
                <Update />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/adminmore/:id"
            element={
              <ProtectedRoute allowedRoles={Access.adminmore}>
                <MoreDetails />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register></Register>}></Route>

         
         
          

          <Route path="/reserve/:id" element={<Reserve />}></Route>
        
          <Route path="/maintenance/:id" element={<Maintenance />}></Route>
          <Route path="/maintenanceAdd/:id" element={<MaintenanceAdd />}></Route>
          <Route path="/maintenanceClashes/:id/:data" element={<MtClashHandle />}></Route>
            
          <Route path="/adminReservations" element={<AdminReserView />}></Route>
          <Route path="/adminMaintenance" element={<AdminMaintenanceView />}></Route>

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={Access.dashboard}>
                <DashBoard />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/account"
            element={
              <ProtectedRoute allowedRoles = {Access.account}>
                <Account />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/contact"
           element={<ProtectedRoute allowedRoles = {Access.contact}>
            <Contact />
          </ProtectedRoute>}></Route>

          <Route path="/usermore/:id" 
          element={
            <ProtectedRoute allowedRoles={Access.publicmore}>
              <MoreDetailsPub />
            </ProtectedRoute>
          }></Route>
          <Route path="*" element={<h1>Not Found</h1>}></Route>
          <Route path="/check-in" element={<CheckIn />}></Route>
          <Route path="/check-out" element={<CheckOut />}></Route>
          <Route path="/reports" element ={<ReportSection/>}></Route>
          <Route path="/admindashboard" element ={<AdminDashboard/>}></Route>
          <Route path="/piechart" element ={<Piechart/>}></Route>
          <Route path = "/analytics" element ={<Analytics/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
