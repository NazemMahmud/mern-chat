import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Authentication/Login/Login";
import Registration from "./pages/Authentication/Registration/Registration";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <Routes>
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={< Registration />} />
             <Route path="/dashboard" element={<Dashboard />} />
             <Route path="*" element={<Navigate to="/login" />} />
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
