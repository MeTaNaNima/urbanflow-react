// src/components/Accordion.js
import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="accordion mb-4 border-b">
			<button
				className="accordion-title  p-4 text-left text-xl font-semibold focus:outline-none"
				onClick={toggleAccordion}>
				<span className="mr-2">{isOpen ? '-' : '+'}</span>
				{title}
			</button>
			<div
				className={`accordion-content overflow-hidden transition-max-height duration-1000 ease-in-out ${
					isOpen ? 'max-h-full' : 'max-h-0'
				}`}>
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
};

export default Accordion;
