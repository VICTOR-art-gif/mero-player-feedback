import React from 'react';
import {createRoot} from 'react-dom/client';
import FeedbackHub from './feedback-hub';
import Track from './track';
const tracking=/\/track\/?$/.test(location.pathname);
createRoot(document.getElementById('root')!).render(tracking?<Track/>:<FeedbackHub/>);
