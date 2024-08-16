// src/components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, description, link }) => {
	return (
		<div className="project-feature flex flex-col md:flex-row items-center">
			<p className="text-lg font-bold text-blue-900">{title}:&nbsp;</p>
			<p className="text-gray-700 m-0"> {description}</p>
		</div>
	);
};

export default ServiceCard;
