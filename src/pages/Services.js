import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';

const Services = () => {
	useEffect(() => {
		document.title = 'Home | Urban Flow';
	}, []);

	return (
		<div className="services-page">
			<HeroSection
				backgroundImage="/images/library/building-code-bcbc-vbbl.445b1be5.jpg"
				title="SERVICES"
				subtitle="latest research and points of view"
			/>
		</div>
	);
};

export default Services;
