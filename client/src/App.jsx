import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
  <Route path='/' element={< Home />}/>
  <Route path='/dashboard' element={< Dashboard />}/>
  <Route path='/login' element={< Login />}/>
  <Route path='/profile' element={< Profile />}/>
  </Routes>
  </BrowserRouter>
}
