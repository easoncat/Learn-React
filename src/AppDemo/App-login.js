import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';
import Layout from './Components/Auth/Layout';
import AuthPage from './pages/AuthPage';
import NeedAuth from './Components/Auth/NeedAuth';
import useAutoLogout from './hooks/useAutoLogout';

const App = memo(() => {
  useAutoLogout()
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/profile' element={<NeedAuth><ProfilePage /></NeedAuth>}></Route>
        <Route path='/authForm' element={<AuthPage />}></Route>
      </Routes>
    </Layout>
  )
})

export default App