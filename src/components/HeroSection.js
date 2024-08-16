// src/components/HeroSection.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const HeroSection = ({ backgroundImage, title, subtitle }) => {
	const location = useLocation();
	const pageName = location.pathname.replace('/', '').replace('-', ' ') || 'home';

	return (
		<div
			className={`${pageName}-hero-section hero-section h-[calc(100dvh / 3*2)] min-h-[500px] w-full bg-light-gray bg-cover bg-center flex justify-center items-center`}
			style={{
				backgroundImage: `linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.5),rgba(0,0,0,.5),rgba(0,0,0,.5)),url(${backgroundImage})`,
			}}>
			<div className="hero-text text-white flex flex-col justify-center items-center gap-20">
				<h1 className="text-5xl font-medium text-center">{title}</h1>
				<h2 className="italic text-4xl max-w-[35ch] text-center">{subtitle}</h2>
			</div>
		</div>
	);
};

export default HeroSection;
