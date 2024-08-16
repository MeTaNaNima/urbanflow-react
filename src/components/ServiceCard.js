// src/components/ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ title, description, link }) => {
	return (
		<div className="service-card">
			<h3 className="text-lg font-bold mb-2 text-cyan-700">{title}</h3>
			<p className="text-gray-700 mb-2">{description}</p>
			<Link
				to={link}
				className="text-blue-500 hover:text-blue-700 italic text-sm duration-300 hover:tracking-widest">
				Learn More...
			</Link>
		</div>
	);
};

export default ServiceCard;
