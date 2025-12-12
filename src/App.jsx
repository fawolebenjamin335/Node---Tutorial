import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
export default function App() {


  return (
    <div>
      <Layout>
        <Routes>
          <Route   path='/'  element={<Home />} />
       </Routes>
      </Layout>
   
    </div>
  )
}
