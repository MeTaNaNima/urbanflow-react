// src/components/LibraryCard.js
import React from 'react';

const LibraryItem = ({ libraryName, image, links }) => {
	return (
		<div className="library-card flex flex-col md:flex-row items-center justify-between p-4">
			<div className="flex-1">
				<h3 className="text-xl font-bold mb-2">{libraryName}</h3>
				<ul className="list-none">
					{links.map((link, index) => (
						<li key={index} className="mb-2">
							<a
								href={link.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:text-blue-700 duration-300 underline-offset-3 underline">
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</div>
			<div className="flex-shrink-0 ml-4 w-full md:w-1/3">
				<img
					src={image}
					alt={libraryName}
					className="w-full h-48 object-contain rounded-lg"
				/>
			</div>
		</div>
	);
};

export default LibraryItem;
