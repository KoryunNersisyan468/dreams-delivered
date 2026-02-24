import React, { useEffect } from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'
import { useNavigate } from 'react-router-dom';

const DefaultLayout = () => {

  const navigate = useNavigate();
  const path = window.location.pathname
  const url = window.location.href

  useEffect(() => {
    const auth = localStorage?.getItem('auth');
    const authLogin = JSON.parse(auth);
    if (!localStorage?.getItem('auth') || authLogin?.role !== 'admin') {
      navigate('/admin/login');
    }

    if (!window.location.pathname.includes('/admin')) {
      localStorage.removeItem('auth');
    }

  }, [path,navigate,url]);
    return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
