import React, { useState } from 'react';
import Navbar from './assets/componantes/navbar/Navbar.jsx';
import Home from './assets/pages/home/Home.jsx';
import Video from "./assets/componantes/videos/video.jsx";

import { Route, Routes } from 'react-router-dom';



const App = () => {
  
  const [sidebar,setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <main>
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar}/>}/>
          <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
        </Routes>
        
      </main>
    </div>
  );
}
export default App;
