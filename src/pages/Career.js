// src/pages/Career.js
import HeroSection from '../components/HeroSection';
import Accordion from '../components/Accordion';

const Career = () => {
	return (
		<div className="career-page">
			<HeroSection
				backgroundImage="/images/career/building-occupant-load-permit.b7cb7e0f.jpg"
				title="CAREER OPPORTUNITIES"
				subtitle="realize your potential at Noven"
			/>

			<div className="py-24 bg-slate-100 px-3">
				<div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-14 mb-12">
					<div className="flex-1 flex flex-col gap-5 justify-center">
						<h4 className="text-blue-900 text-xl font-bold">FIND YOUR FUTURE HERE </h4>
						<p className="text-blue-900">
							We are a group of engineers, designers, technologists, and city-building
							experts. We deliver uncompromising performance through a comprehensive
							range of services for the built environment. Our culture and commitment
							enable us to achieve progressive solutions to the most complex
							challenges. We are purpose-led and passion-fueled. We are different. Are
							you?
						</p>
						<p>
							We're always looking to expand our team by adding skilled Intermediate
							or Senior Building Code Consultants who can review, develop, and
							document approaches to building code compliance related to Fire
							Protection and Life Safety Building Code requirements. This role will be
							primarily in support of our work with architectural, developer, and
							institutional clients.
						</p>
						<h2 className="font-semibold italic text-blue-900 text-xl">
							Why you'll love working with us
						</h2>
						<p>
							<strong>ACCELERATED GROWTH:</strong> While siloed, compartmentalized
							firms limit your development, our collaborative work style GUARANTEES
							you access and exposure to a wide variety of projects. As our new
							consultant, we will quickly get you up to speed, invest in your training
							and participation in seminars, conferences and technical associations
							and continuously support you in realizing your full potential. As we
							promote from within, you won't have any career limits. The type of
							professional growth and development we offer simply doesn't happen in
							larger firms.
						</p>
						<p>
							<strong>DIVERSITY OF INTERESTING PROJECTS:</strong> Commercial and
							residential. Transportation and government. Healthcare and academic.
							Sports, cultural, heritage and AHJ projects. We do it all, and you will
							too.
						</p>
						<p>
							<strong>EXCELLENT ATMOSPHERE:</strong> Our company culture is positive,
							smart and highly collaborative. We are a tight-knit, likeminded team
							that encourages open communication, collaboration and idea sharing. As
							an employee-owned firm, we're insulated from traditional external
							interests and pressures. It just adds up to a more inspired and
							rewarding environment than you'll find anywhere else.
						</p>
						<p>
							<strong>HEALTH &amp; WELLNESS: </strong>Extended health benefits.
							Wellness programs. Team events, holiday parties and Whistler retreats.
							At Noven, we proudly take care of our own.
						</p>
					</div>
				</div>
			</div>

			<div className="py-24 px-3">
				<div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-14">
					<Accordion title="Intermediate Building Code Consultant – Vancouver ">
						<h4 className="text-lg font-bold mb-2">About the job</h4>
						<p>
							We are looking to expand our Vancouver team by adding a skilled
							Intermediate Consultant who can review, develop and document approaches
							to building code compliance in Fire Protection and Life Safety Building
							Code reports.
						</p>
						<p>
							As an Intermediate Fire Protection and Life Safety Building Code
							Consultant, you will review drawings, reports and conduct other research
							to identify building code issues and develop approaches to demonstrate
							compliance - including performance-based approaches - and then document
							them in Fire Protection and Life Safety Building Code reports and code
							compliance drawings. You will also attend project meetings, conduct site
							visits and field reviews, and assist on Certified Professional and other
							projects.
						</p>
						<p>Job Types: Full-time, Permanent</p>
						<p>Benefits: Extended health care</p>
						<p>Schedule: Monday to Friday</p>
						<h4 className="text-lg font-bold mb-2">Company Profile</h4>
						<p>
							Noven Consulting is a well-established engineering firm specializing in
							fire protection and life safety building code consulting services for
							the built environment. Our solid reputation is founded on decades of
							satisfied clients, participation on Code and Standards committees, and
							work with enforcement authorities. Our office in Vancouver serve an
							ever-growing portfolio of clients including leading architects,
							engineers, building owners, developers, contractors, government
							agencies, insurers, and lawyers.
						</p>
						<p>
							We offer competitive compensation, achievable bonuses, benefits (dental,
							vision, paramedical, disability and life insurance), and encourage
							ongoing professional development and growth. As an employee-owned firm,
							we're insulated from traditional external interests and pressures. At
							Noven, we proudly take care of our own.
						</p>
						<h4 className="text-lg font-bold mb-2">Requirements</h4>
						<p>
							Bachelor's degree in Architecture, Engineering, or equivalent experience
							in related field (Environmental Design, Architectural Technology, etc.)
						</p>
						<p>3+ years of experience in Building Code Consulting Role</p>
						<p>Current knowledge of Building Code</p>
						<p>Proficiency with CAD</p>
						<p>
							Experience in engaging with AEC project team and leading design,
							specification, approvals, and construction administration
						</p>
						<p>
							Experience in developing and enhancing working relationships with
							clients and industry professionals in both public and private sectors
						</p>
						<p>Excellent oral and written communication skills</p>
						<p>Exceptional time management and organizational skills</p>
						<p>Good interpersonal, client-relations skills.</p>
						<p>
							Ability to work independently and as a team player, driven by a desire
							to make better buildings
						</p>
						<p>Ability to maintain confidentiality and work with integrity</p>
						<p>Ability to travel; must possess valid driver's license</p>
						<p>
							If this sounds like you, don't be left wondering about what could have
							been. Apply now and explore this great career opportunity.
						</p>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default Career;
