// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Library from './pages/Library';
import Request from './pages/Request';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/services" element={<Services />} />
				<Route path="/library" element={<Library />} />
				<Route path="/request" element={<Request />} />
				<Route path="/career" element={<Career />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
