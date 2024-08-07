import React, { useState } from 'react';
import Navbar from './assets/componantes/navbar/Navbar.jsx';
import Home from './assets/pages/home/Home.jsx';
import Sidebar from './assets/componantes/navbar/sidebar/sidebar.jsx';
import { Route, Routes } from 'react-router-dom';



const App = () => {
  
  const [sidebar,setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <main>
        <Sidebar sidebar={sidebar}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/video/' element={<Home/>}/>
        </Routes>
        
      </main>
    </div>
  );
}
export default App;
