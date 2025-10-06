import React from 'react';
import styled from 'styled-components';
import { HashRouter as Router } from 'react-router-dom';
import Hero from "./components/Hero/Hero.jsx";
import Header from "./components/Header/Header.jsx";

const AppContainer = styled.div`
  background-color: #1e1e1e; /* Match the background color of the hero section */
  min-height: 100vh;
  padding: 20px 0;
`;

const MainContent = styled.div`
`;
function App() {

  return (
      <Router>
        <AppContainer>
          <Header />
          <MainContent>
            <Hero />
            </MainContent>
          </AppContainer>
        </Router>
  )
}

export default App
