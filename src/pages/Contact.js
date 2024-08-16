import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import { Link } from 'react-router-dom';
import { Message } from 'iconsax-react';
import { Call } from 'iconsax-react';

const Contact = () => {
	useEffect(() => {
		document.title = 'Contact | Urban Flow';
	}, []);

	return (
		<div className="contact-page">
			<HeroSection
				backgroundImage="/images/contact/fire-safety-plan-building-permit-occupancy.b14dd843.jpg"
				title="CONTACT US"
			/>

			<div className="py-24 bg-slate-100 px-3">
				<div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-14 mb-12">
					<div className="flex-1">
						<h2 className="text-lg font-bold text-blue-900 mb-4">
							Noven Consulting Inc.
						</h2>
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
				</div>
			</div>
		</div>
	);
};

export default Contact;
