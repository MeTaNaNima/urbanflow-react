// src/pages/Home.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
	useEffect(() => {
		document.title = 'Home | Urban Flow';
	}, []);

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
						A creative professional approach to your traffic engineering, 1
					</h2>
					{/* <h1 className="text-5xl font-medium text-center">
						parking and safety concerns Traffic Engineering
						<br /> & <br />
						Fire Protection Engineering
					</h1> */}
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
						<h4 className="text-blue-900 text-xl font-bold capitalize">
							Parking and safety concerns Traffic Engineering & Transportation
							Planning
						</h4>
						<p className="text-blue-900">
							Specialized Traffic Engineering & Transportation Planning in BC
							Recognizing that no company can be an expert at everything, our firm is
							built around our greatest passion, expertise, and experience: traffic in
							British Columbia, Canada. Our team blends technical expertise with
							strong project management and leadership skills. Led by registered
							professional engineers (P.Eng.) with specialized Professional Traffic
							Operations Engineer (PTOE) certifications, our 2 specialized traffic and
							transportation engineering firm offers an exceptional level of traffic
							expertise to clients. Our flexible team has extensive experience working
							with the Ministry of Transportation and Infrastructure (MoTI) and
							various municipalities in BC, ensuring dedicated service for all your
							traffic needs.
						</p>
					</div>
					<div className="flex-1 flex  items-center justify-center">
						<img className="h-[200px]" src="/images/UrbanFlowLogo.png" alt="" />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row-reverse max-w-screen-xl mx-auto gap-14 mt-3">
					<div className="flex-1 flex flex-col gap-5">
						<h4 className="text-blue-900 text-xl font-bold">
							12 Years of Excellence in Traffic and Transportation Consulting Since
							2012, we have been providing top-notch sustainable and functional
							traffic, safety, and parking consulting services to a diverse range of
							public
						</h4>
						<p className="text-blue-900">
							and private sector clients across BC. Our experienced, dynamic, and
							energetic traffic engineering firm has conducted traffic and
							transportation studies for various developments, from residential
							properties to major retail, community centers, industrial, and
							commercial projects. We have assisted numerous clients to obtain
							development approvals for new and redevelopment projects.
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
							Reliable Traffic Engineering Project Delivery On-Time and Within Budget
							Our team of highly trained and qualified traffic engineering
							professionals is dedicated to understanding and achieving our clients'
							needs and goals with utmost efficiency. We pride ourselves on our
							steadfast reputation for delivering projects on time and within budget,
							every single time.
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
							Fostering Long-Term Relationships with Clients and Partners We believe
							in building strong relationships with our clients and strategic partners
							from the beginning of the project, to ensure long-term success. This is
							achieved through open communication, building trust, mutual respect, and
							embracing diversity.
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
					<ServiceCard />
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
