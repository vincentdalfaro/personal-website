import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage.jsx';

import Collection from './pages/templates/Collections.jsx';
import Media from './pages/templates/Media.jsx'

import MediaDirectory from "./pages/MediaDirectory.jsx"
import ProfessionalPage from './pages/ProfessionalPage.jsx';
import ProjectPage from './pages/ProjectPage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<HomePage />}/>
        <Route path = "/media" element={<MediaDirectory />}/>
        <Route path="/media/birds" element={
        <Media
          key="birds"
          basePath="personal_website/birds"
          tabs={[{ key: 'pre2026', label: 'Pre-2026' }, { key: '2026', label: '2026' }]}
          photoClass="bird-photo"
          showCaptions={true}
        />
      } />

      <Route path="/media/film" element={
        <Media
          key="film"
          basePath="personal_website/film"
          tabs={[{ key: 'pre2025', label: 'Pre-2025' }, { key: '2025', label: '2025' }, { key: '2026', label: '2026' }]}
          photoClass="bella-photo"
        />
      } />

      <Route path="/media/tennis" element={
        <Media
          key="tennis"
          basePath="personal_website/tennis"
          tabs={[{ key: 'film', label: 'Film' }, { key: 'digital', label: 'Digital' }]}
          photoClass="bella-photo"
        />
      } />
        <Route path = "/collections/polaroids" element={<Collection folder="personal_website/polaroids" altPrefix="Polaroid" />} />
        <Route path = "/collections/digital" element={<Collection folder="personal_website/digital" altPrefix="Digital" />} />
        <Route path = "/collections/faces" element={<Collection folder="personal_website/faces" altPrefix="Faces" />} />
        <Route path = "/professional" element = {<ProfessionalPage/>}/>
        <Route path = "/projects" element = {<ProjectPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
