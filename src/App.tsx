import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import styled from 'styled-components'

import Header from './Header';
import Footer from './Footer';
import IntroPage from './pages/intro/IntroPage';
import AboutPage from './pages/about/AboutPage';
import MapWithDataLoader from './pages/travel/MapWithDataLoader';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

class App extends React.Component<{}, {}> {

  render() {
    return (
        <AppContainer className="travel-app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<IntroPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/travel" element={<MapWithDataLoader />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </AppContainer>
    );
  }
}

export default App;
