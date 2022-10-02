import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Authentication/Login/Login";
import Registration from "./pages/Authentication/Registration/Registration";
import Messenger from "./pages/ChatDashboard";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <Routes>
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={< Registration />} />
             <Route path="/chat" element={<Messenger />} />
             <Route exact path="/" element={<Messenger />} />
             <Route path="*" element={<Navigate to="/chat" />} />
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
