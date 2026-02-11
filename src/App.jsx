import React from 'react';
import styled from 'styled-components';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Header from "./components/Header/Header.jsx";
import './App.css'
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

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
                <Header/>
                <MainContent>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </MainContent>
            </AppContainer>
        </Router>
    )
}

export default App
