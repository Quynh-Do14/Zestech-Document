import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home-page';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { privatesRoutes } from './infratructure/routes';
import { PrivateRoute } from './infratructure/routes/private-router';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {privatesRoutes.map((page, index) => {
            if (page.private) {
              return (
                <Route
                  key={index}
                  path={page.path}
                  element={
                    <PrivateRoute component={<page.component />} />
                  } />
              )
            }
            else {
              return (
                <Route
                  key={index}
                  path={page.path}
                  element={
                    <page.component />
                  } />
              )
            }
          })}
        </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
