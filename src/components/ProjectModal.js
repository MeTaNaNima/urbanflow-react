import React from 'react';
import Modal from 'react-modal';

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
	if (!project) return null;

	return (
		<Modal
			isOpen={isOpen}
			closeTimeoutMS={300}
			onRequestClose={onRequestClose}
			contentLabel="Project Details"
			className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-lg p-6 outline-none"
			overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="flex flex-row gap-8 z-[99999]">
				<div>
					<h2 className="text-2xl font-bold mb-4">{project.name}</h2>
					<p className="mb-4">{project.description}</p>
					<h3 className="text-lg font-bold">Client</h3>
					<p className="mb-4">{project.client}</p>
					<h3 className="text-lg font-bold">Location</h3>
					<p className="mb-4">{project.location}</p>
				</div>
				<div className="max-h-80 overflow-y-scroll">
					<h3 className="text-lg font-bold mb-4">Additional Data</h3>
					<ul className="list-disc list-inside">
						{project.additional_data.map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
				</div>
			</div>
			<button
				onClick={onRequestClose}
				className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
				Close
			</button>
		</Modal>
	);
};

export default ProjectModal;
