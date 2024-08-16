// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
	return (
		<div className="home-page">
			<div
				className="home-hero h-[calc(100dvh-80px)] w-full bg-light-gray bg-cover bg-center flex justify-center items-center"
				style={{
					backgroundImage:
						'linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.5),rgba(0,0,0,.5),rgba(0,0,0,.5)),url(/images/home/building-code-certified-professional.jpg)',
				}}>
				<div className="home-hero-text text-white flex flex-col justify-center items-center gap-20">
					<h2 className="italic text-4xl max-w-[35ch] text-center">
						a fresh professional approach to your regulatory code compliance needs
					</h2>
					<h1 className="text-5xl font-medium text-center">
						Bulding Code Consulting <br /> & <br /> Fire Protection Engineering
					</h1>
					<a href="#GetInTouch" className="absolute bottom-2 right-[10vw]">
						<svg class="w-[60px] h-[75px]">
							<path
								fill="none"
								stroke="white"
								stroke-width="3"
								d="M0 0 L30 32 L60 0"></path>
						</svg>
					</a>
				</div>
			</div>

			<div id="GetInTouch" className="py-24 px-3">
				<div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-14 mb-12">
					<div className="flex-1 flex flex-col gap-5">
						<h4 className="text-blue-900 text-xl font-bold">
							Building Code and Fire Protection Engineering Services
						</h4>
						<p className="text-blue-900">
							Noven Consulting Inc. was established to provide professional Fire
							Protection Engineering, Building Code Consulting and Certified
							Professional services to architects, building owners, law firms,
							insurance underwriters, developers, industry and government agencies.
							Included in this broad field of expertise is the firm's ability to
							assess functional and safety aspects of buildings and design of their
							life safety and fire protection systems.
						</p>
					</div>
					<div className="flex-1 flex  items-center justify-center">
						<img className="h-10" src="/images/logo.svg" alt="" />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row-reverse max-w-screen-xl mx-auto gap-14 mt-3">
					<div className="flex-1 flex flex-col gap-5">
						<h4 className="text-blue-900 text-xl font-bold">
							Performance-focused Services for All Sizes of Challenges
						</h4>
						<p className="text-blue-900">
							Our experience and local knowledge, enables us to provide superior
							performance-focused services to our clients in a wide variety of
							sectors, including Commercial, Cultural, Healthcare, Hospitality,
							Institutional, Residential, Retail, and Sports & Recreation. Together,
							we are committed to protecting people, property and reputations, and
							through our participation in national codes and standard associations
							and committees, strive to advance our position as the leader in our
							field.
						</p>
					</div>
					<div className="flex-1 flex items-center justify-center">
						<Link
							to="/contact"
							className="text-navy font-medium hover:bg-blue-900 hover:text-white border-2 border-blue-900 px-10 py-3 rounded duration-300 uppercase">
							Get in Touch
						</Link>
					</div>
				</div>
			</div>

			<div className="py-24 bg-slate-100 px-3">
				<div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-14 mb-12">
					<div className="flex-1 flex flex-col gap-5 justify-center">
						<h4 className="text-blue-900 text-xl font-bold">Certified & Experienced</h4>
						<p className="text-blue-900">
							Our engineers and technical staff work regularly with many Provincial
							and National Codes, as well as related International Codes and
							Standards. Internationally, Noven works regularly with a number of
							universally accepted Codes, including NFPA 101 and 5000, Universal
							Building Code and the International Building Code. Noven Consulting has
							decades of experience in the fields of Fire Protection Engineering and
							Building Code Consulting. In all cases, our senior technical staff
							member will be assigned to your project.
						</p>
					</div>
					<div className="flex-1 flex  items-center justify-center">
						<img
							className="rounded-lg"
							src="/images/home/code-consultant-langley-richmond-north-vancouver-west-vancouver.jpeg"
							alt=""
						/>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row-reverse max-w-screen-xl mx-auto gap-14 mb-12">
					<div className="flex-1 flex flex-col gap-5 justify-center">
						<h4 className="text-blue-900 text-xl font-bold">Dedicated & Recognized</h4>
						<p className="text-blue-900">
							The firm, through its participation in recognized national associations
							and committees, has earned a reputation as a leader in its field.
							Members bf Noven Consulting participate in provincial Building Code and
							Fire Code committees, assisting the development and implementation of
							the future of the industry.
						</p>
					</div>
					<div className="flex-1 flex  items-center justify-center">
						<img
							className="rounded-lg"
							src="/images/home/cp-code-consulting-vancouver-surrey-burnaby.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>

			<div className="py-24 px-3">
				<div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-14 mb-12">
					<h3 className="text-3xl font-bold text-blue-900">Services</h3>
				</div>
				<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					<ServiceCard
						title="CERTIFIED PROFESSIONAL (CP) SERVICES"
						description="Certain municipalities authorize a Registered Engineer or Architect to provide a detailed coordinated review of the life safety and fire protection requirements for a project."
						link="/services"
					/>
					<ServiceCard
						title="BUILDING CODE CONSULTING"
						description="Noven Consulting maintains a number of primary objectives in the provision of Building and Fire Code Consulting and Fire Protection Engineering services."
						link="/services"
					/>
					<ServiceCard
						title="INDEPENDENT PROFESSIONAL FOR PROJECTS ON FEDERAL LANDS"
						description="An independent professional is retained to fulfill the role of Authority Having Jurisdiction on projects where the Authority Having Jurisdiction does not have a building department to provide design and construction reviews."
						link="/services"
					/>
					<ServiceCard
						title="STRUCTURAL FIRE ENGINEERING"
						description="Structural fire engineering as one component of a comprehensive performance-based approach to managing fire safety of building structures enables a range of benefits that can significantly and positively support the decision to utilize your material of choice."
						link="/services"
					/>
					<ServiceCard
						title="PERFORMANCE BASED DESIGN AND FIRE MODELLING"
						description="A fire protection engineer utilizes the tools of fire science to review and analyze building design material or system to determine if objectives of the Building Code are met."
						link="/services"
					/>
					<ServiceCard
						title="THIRD PARTY REVIEW"
						description="Local authorities are looking to private consultants to provide independent review and advise regarding increasingly complicated and complex projects."
						link="/services"
					/>
					<ServiceCard
						title="CONSTRUCTION FIRE SAFETY PLAN (CFSP) AND CONSTRUCTION SAFETY PLAN (CSP)"
						description="To help protect occupants, firefighters, and the general public, and reduce potential damage caused by fires, a fire safety plan and a pre-incident fire plan are required for most multi-family, commercial, and industrial buildings, including those under construction."
						link="/services"
					/>
					<ServiceCard
						title="FIRE CODE CONSULTING"
						description="Building Codes and Fire Codes both contain provisions that deal with the safety of persons in buildings in the event of a fire, and the protection of buildings from the effects of fire."
						link="/services"
					/>
					<ServiceCard
						title="CODE COMPLIANCE DRAWINGS"
						description="Noven Consulting is increasing requested to prepare Building Code compliance drawings in support of, and submitted with, building permit applications."
						link="/services"
					/>
					<ServiceCard
						title="ALTERNATIVE SOLUTIONS TO BUILDING CODE & BY-LAW"
						description="These codes permit the submission of an alternative solution that meets the life safety and fire protection objectives of the Building Code or Building By-Law."
						link="/services"
					/>
					<ServiceCard
						title="FIRE PROTECTION SYSTEM REVIEW"
						description="Design and installation of modern systems are continually changing as more life safety and fire protection experience is obtained and Codes and Standards are modified accordingly."
						link="/services"
					/>
					<ServiceCard
						title="OCCUPANT LOAD ANALYSIS"
						description="Noven Consulting has completed detailed occupancy analysis for a wide variety of assembly and licensed beverage establishments throughout the Lower Mainland."
						link="/services"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
