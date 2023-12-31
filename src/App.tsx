import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import React from 'react';
import './App.css';
import Main from './pages/Main/Main';
import PostProvider from './context/Postcontext';
import Addpost from './pages/AddPost/Addpost';
import Systems from "./pages/Tags/Systems";
import Edit from "./pages/Edit/Edit";

export default function App() {
  return (
    <BrowserRouter>
      <PostProvider>
        <Routes>
          <Route path="/" index element={<Main/>}/>
          <Route path="newpost" element={<Addpost/>}/>
          <Route path='/system/:id' element={<Systems/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </PostProvider>
    </BrowserRouter>
  
  );
}

