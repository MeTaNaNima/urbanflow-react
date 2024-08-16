// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Message } from 'iconsax-react';
import { Call } from 'iconsax-react';

const Footer = () => {
	return (
		<footer className="border-t border-gray-300 bg-slate-100 py-7">
			<div className="flex justify-between items-center max-w-screen-xl mx-auto flex-col lg:flex-row gap-14 ">
				<div className="flex-1">
					<h2 className="text-lg font-bold text-blue-900 mb-4">Noven Consulting Inc.</h2>
					<p>HEAD OFFICE:</p>
					<p className="mb-7">
						410 West Georgia Street, 3rd Floor
						<br />
						Vancouver, BC, Canada V6B 1Z3
					</p>
					<div className="flex flex-col gap-2 text-xl">
						<div className="flex flex-row gap-2">
							<Message size="24" color="#0e7490" variant="Bold" />
							<a href="mailto:info@noven.ca">info@noven.ca</a>
						</div>
						<div className="flex flex-row gap-2">
							<Call size="24" color="#0e7490" variant="Bold" />
							<a href="tel:6047570610">(604) 757-0610</a>
						</div>
					</div>
				</div>
				<div className="flex-1 flex flex-col gap-5  items-center">
					<Link to="/" className="text-left">
						<img className="h-14" src="/images/logo.svg" alt="" />
					</Link>

					<span className="text-center text-gray-500 text-sm">
						Copyright © {new Date().getFullYear()} Noven Consulting Inc. All rights
						reserved.
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
