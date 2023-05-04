import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/Pages/HomePage/HomePage';
import WorksPage from './components/Pages/WorksPage/WorksPage';
import BlogPage from './components/Pages/BlogPage/BlogPage';
import ContactsPage from './components/Pages/ContactsPage/ContactsPage';
import WorksDetailsPage from './components/Pages/WorksDetailsPage/WorksDetailsPage';
import Footer from './components/Footer/Footer';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className='wrapper'>
      <HashRouter hashType='hashbang'>
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/works' element={<WorksPage />} />
            <Route path='/works/:id' element={<WorksDetailsPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
          </Routes>
        </main>
      </HashRouter>
      <Footer />
    </div>
  );
};

export default App;
