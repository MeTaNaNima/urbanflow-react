// src/pages/Projects.js
import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectFeatures from '../components/ProjectFeatures';
import HeroSection from '../components/HeroSection';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
	const [projects, setProjects] = useState([]);
	const [selectedProject, setSelectedProject] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	useEffect(() => {
		document.title = 'Projects | Urban Flow';
	}, []);

	useEffect(() => {
		// Fetch the JSON data from the public directory
		fetch('/projects/projects.json')
			.then((response) => response.json())
			.then((data) => setProjects(data))
			.catch((error) => console.error('Error fetching projects data:', error));
	}, []);

	const openModal = (project) => {
		setSelectedProject(project);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		setSelectedProject(null);
	};

	return (
		<div className="projects-page">
			<HeroSection
				backgroundImage="/images/projects/occupant-load-permit.f3ff0892.jpg"
				title="PROJECT EXPERIENCE"
				subtitle="exceeding your expectations"
			/>

			<div className="py-24 bg-slate-100 px-3">
				<div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-14 mb-12">
					<div className="flex-1 flex flex-col gap-5 justify-center">
						<h4 className="text-blue-900 text-xl font-bold">
							RECENT FEATURED PROJECTS
						</h4>
						<p className="text-blue-900">
							Noven Consulting brought to the design development and construction
							community significant experience in Building Code Consulting and Fire
							Protection Engineering services. Over the many years, the senior members
							of Noven Consulting have worked on countless projects providing Building
							Code, Fire Protection Engineering, Certified Professional and Fire Code
							Consulting services, providing cost benefit solutions for developers and
							breaking new ground in fields of Fire Protection Engineering. Our
							projects are in all fields of building construction, including:
						</p>
						<ProjectFeatures
							title="Residential Construction"
							description="Concrete, steel, prefabricated, wood frame and mixed use."
						/>
						<ProjectFeatures
							title="Institutional"
							description="Hospital, seniors care facilities, schools, prisons, seniors housing and nursing homes, psychiatric or detention quarters."
						/>
						<ProjectFeatures
							title="Assembly Occupancies"
							description="Theatres, licensed beverage establishments, restaurants, community centres, gymnasia and large public assembly facilities."
						/>
						<ProjectFeatures
							title="Commercial"
							description="Office, banks, retail and department stores, malls or complexes."
						/>
						<ProjectFeatures
							title="Industrial"
							description="Factories and process facilities, air craft hangars, repair garages, manufacturing facilities and lumber mills."
						/>
					</div>
				</div>
			</div>

			<div className="projects-section py-24 px-3">
				<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div key={index} onClick={() => openModal(project)}>
							<ProjectCard project={project} />
						</div>
					))}
				</div>
			</div>

			<ProjectModal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				project={selectedProject}
			/>
		</div>
	);
};

export default Projects;
