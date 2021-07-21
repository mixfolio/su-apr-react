import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <SidebarLeft />
        <AppRouter />
        <SidebarRight />
      </div>
    </BrowserRouter>
  );
}

export default App;
