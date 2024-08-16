// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className=" bg-gray-100 p-4 my-auto sticky top-0 min-h-[80px] z-50">
			<header className="flex justify-between items-center max-w-screen-xl mx-auto max-sm:hidden">
				<div className="logo">
					<Link to="/">
						<img src="/images/UrbanFlowLogo.png" alt="Logo" className="h-[7rem]" />
					</Link>
				</div>
				<nav className="navigation">
					<ul className="flex space-x-4">
						<li>
							<Link
								to="/"
								className="text-navy font-medium hover:bg-gray-700 hover:text-white px-3 py-2 rounded duration-300">
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/services"
								className="text-navy font-medium hover:bg-gray-700 hover:text-white px-3 py-2 rounded duration-300">
								Services
							</Link>
						</li>
						<li>
							<Link
								to="/projects"
								className="text-navy font-medium hover:bg-gray-700 hover:text-white px-3 py-2 rounded duration-300">
								Projects
							</Link>
						</li>
						<li>
							<Link
								to="/library"
								className="text-navy font-medium hover:bg-gray-700 hover:text-white px-3 py-2 rounded duration-300">
								Library
							</Link>
						</li>
						{/* <li>
							<Link
								to="/request"
								className="text-navy font-medium hover:bg-gray-700 hover:text-white px-3 py-2 rounded duration-300">
								Request a Proposal
							</Link>
						</li> */}
						<li>
							<Link
								to="/career"
								className="text-navy font-medium hover:bg-gray-700 hover:text-white px-3 py-2 rounded duration-300">
								Career
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="text-navy font-medium hover:bg-gray-700 hover:text-white px-3 py-2 rounded duration-300">
								Contact
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;
