// src/components/ProjectCard.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectCard = ({ project }) => {
	return (
		<div className="project-card rounded-lg bg-slate-100 hover:scale-105 duration-300 hover:shadow-2xl">
			<Carousel
				showThumbs={false}
				showArrows={false}
				autoPlay
				infiniteLoop
				showStatus={false}
				className="rounded-lg">
				{project.images.map((image, index) => (
					<div key={index}>
						<img
							className="aspect-square object-cover rounded-t-lg"
							src={image}
							alt={`Project ${project.name}`}
						/>
					</div>
				))}
			</Carousel>
			<div className="project-title py-6 px-2">
				<h3 className="text-lg text-blue-900 font-bold text-center">{project.name}</h3>
			</div>
		</div>
	);
};

export default ProjectCard;
