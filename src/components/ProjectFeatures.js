// src/components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, description, link }) => {
	return (
		<div className="project-feature flex flex-col md:flex-row items-center">
			<h3 className="text-lg font-bold text-blue-900">{title}</h3>
			<span className=" font-bold mx-1"> - </span>
			<p className="text-gray-700">{description}</p>
		</div>
	);
};

export default ServiceCard;
