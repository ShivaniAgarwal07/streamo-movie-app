import React from 'react';
import Home from "./Home";
import MovieDescription from './MovieDescription';
import Error from './Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Home/>}/>
            <Route path="movie/:id" element= {<MovieDescription/>}/>
            <Route path="*" element= {<Error/>}/>
          </Routes>
        </BrowserRouter>
    </>
  );
};

export default App