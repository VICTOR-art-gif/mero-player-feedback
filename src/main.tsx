import React from 'react';
import {createRoot} from 'react-dom/client';
import FeedbackHub from './feedback-hub';
import Track from './track';
import OfficialHome from './official-home';
import './official.css';
const tracking=/\/track\/?$/.test(location.pathname);
const feedback=/\/feedback\/?$/.test(location.pathname);
createRoot(document.getElementById('root')!).render(tracking?<Track/>:feedback?<FeedbackHub/>:<OfficialHome/>);
