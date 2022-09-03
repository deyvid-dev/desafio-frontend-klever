import React from 'react';
import Home from './pages/Home';
import AddToken from './pages/AddToken';
import EditToken from './pages/EditToken';
import Header from "../src/components/Header";
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
    return (
      <>
      <Header />
      <BrowserRouter>
        <Routes>
           <Route path="/" exact element={ <Home />} />
           <Route path="/addtoken" exact element={ <AddToken />} />
           <Route path="/edittoken" exact element={ <EditToken />} />
        </Routes>
      </BrowserRouter>
      </>
    )
}

export default App;
