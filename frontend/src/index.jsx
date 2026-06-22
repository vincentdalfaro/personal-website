import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage.jsx';
import MediaPage from './pages/MediaPage.jsx'
import TennisGallery from './pages/subpages/TennisGallery.jsx'
import BirdGallery from './pages/subpages/BirdGallery.jsx'
import FilmGallery from './pages/subpages/FilmGallery.jsx';
import PolaroidGallery from './pages/subpages/PolaroidGallery.jsx'
import DigitalGallery from './pages/subpages/DigitalGallery.jsx'
import ProfessionalPage from './pages/ProfessionalPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<HomePage />}/>
        <Route path = "/media" element={<MediaPage />}/>
        <Route path = "/media/tennis" element = {<TennisGallery/>}/>
        <Route path = "/media/birds" element = {<BirdGallery/>}/>
        <Route path = "/media/film" element = {<FilmGallery/>}/>
        <Route path = "/media/polaroids" element = {<PolaroidGallery/>}/>
        <Route path = "/media/digital" element = {<DigitalGallery/>}/>
        <Route path = "/professional" element = {<ProfessionalPage/>}/>
        <Route path = "/projects" element = {<ProjectPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
