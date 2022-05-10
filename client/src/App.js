import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Login from "./pages/Authentication/Login";
import Registration from "./pages/Authentication/Registration";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <Routes>
             <Route path="/login" element={<Login />}></Route>
             <Route path="/register" element={< Registration />}></Route>
             <Route path="*" element={<Navigate to="/login" />} />
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
