import React from 'react';
import HeroSection from '../components/HeroSection';
import LibraryItem from '../components/LibraryItems';

const Library = () => {
	const libraries = [
		{
			libraryName: 'BC Ministry of Transportation and Infrastructure (MOTI)',
			image: '/images/library/MOTI.png',
			links: [
				{ url: 'https://www.th.gov.bc.ca/trafficdata/', label: 'Traffic Data' },
				{
					url: 'https://www2.gov.bc.ca/gov/content/transportation/transportation-infrastructure/engineering-standards-guidelines/traffic-engineering-safety/traffic-signs-markings',
					label: 'Traffic Signs and Pavement Marking',
				},
				{
					url: 'https://www2.gov.bc.ca/gov/content/transportation/transportation-infrastructure/engineering-standards-guidelines/electrical-engineering/electrical-traffic-engineering-manual',
					label: 'Electrical & Traffic Engineering Manual',
				},
				{
					url: 'https://www2.gov.bc.ca/assets/gov/driving-and-transportation/funding-engagement-permits/subdividing-land/planning_designing_access_developments_manual.pdf',
					label: 'Planning and Designing Access to Developments',
				},
			],
		},
		{
			libraryName: 'TransLink',
			image: '/images/library/translink_logo.svg',
			links: [
				{
					url: 'https://www.translink.ca/-/media/translink/documents/rider-guide/travelsmart/compass-for-development/tdm_guidelines_for_development.pdf',
					label: 'TDM Guidelines for Development in Metro Vancouver',
				},
			],
		},
		{
			libraryName: 'City of Vancouver',
			image: '/images/library/city-of-vancouver-building-permit.png',
			links: [
				{
					url: 'https://vancouver.ca/streets-transportation/traffic-count-data.aspx',
					label: 'Transportation Data Collection Program',
				},
				{
					url: 'https://vancouver.ca/your-government/parking-bylaw.aspx',
					label: 'Parking Bylaw',
				},
				{
					url: 'https://guidelines.vancouver.ca/guidelines-transportation-assessment-management-study-tams.pdf',
					label: 'Transportation Assessment and Management Study (TAMS) Guidelines',
				},
				{
					url: 'https://guidelines.vancouver.ca/bulletins/bulletin-transportation-demand-management-for-developments.pd',
					label: 'Transportation Demand Management (TDM) for Developments ',
				},
				{
					url: 'https://vancouver.ca/files/cov/engineering-design-manual.PDF',
					label: 'Engineering Design Manual',
				},
			],
		},
		{
			libraryName: 'City of Coquitlam',
			image: '/images/library/City of Coquitlam.png',
			links: [
				{
					url: 'https://www.coquitlam.ca/DocumentCenter/View/5281/Transportation-Demand-Management-Guidelines-for-New-Development-PDF',
					label: 'Transportation Demand Management Guideline (TDM)',
				},
				{
					url: 'https://coquitlam.ca/DocumentCenter/View/1172/Part-7-Off-Street-Parking-and-Loading-PDF',
					label: 'Parking',
				},
				{ url: 'https://www.coquitlam.ca/193/Traffic-Data', label: 'Traffic Data' },
			],
		},
		{
			libraryName: 'City of North Vancouver',
			image: '/images/library/City of North Vancouver.png',
			links: [
				{
					url: 'https://www.cnv.org/-/media/city-of-north-vancouver/documents/development-applications/guidelines-for-the-submission-of-transportation-studies.PDF',
					label: 'Transportation Studies Guideline',
				},
			],
		},
		{
			libraryName: 'City of Surrey',
			image: '/images/library/city-of-surrey-building-permit.png',
			links: [
				{
					url: 'https://www.surrey.ca/sites/default/files/media/documents/TrafficManagementPlanRequirements.pdf',
					label: 'Traffic Management Plan (TCP) Requirement',
				},
				{
					url: 'https://www.surrey.ca/sites/default/files/bylaws/BYL_Zoning_12000.pdf',
					label: 'Parking Bylaw',
				},
			],
		},
		{
			libraryName: 'City of Burnaby',
			image: '/images/library/City of North Burnaby.jpg',
			links: [
				{
					url: 'https://www.burnaby.ca/our-city/bylaws/zoning-bylaw',
					label: 'Parking Bylaw',
				},
				{
					url: 'https://pub-burnaby.escribemeetings.com/filestream.ashx?DocumentId=70436',
					label: 'Transportation Demand Management',
				},
			],
		},
		{
			libraryName: 'City of Kelowna',
			image: '/images/library/City of Kelowna.png',
			links: [
				{
					url: 'https://www.kelowna.ca/homes-building/zoning-land-use/zoning-bylaw/section-8-parking-loading',
					label: 'Parking and Loading',
				},
				{ url: '', label: '' },
			],
		},
		{
			libraryName: 'City of Kamloops',
			image: '/images/library/City of Kamloops.jpg',
			links: [
				{
					url: 'https://www.kamloops.ca/business-development/application-forms-and-guides/transportation-impact-assessment-guidelines',
					label: 'Transportation Impact Assessment Guidelines',
				},
				{
					url: 'https://kamloops.civicweb.net/filepro/documents/138848/',
					label: 'Parking Bylaw',
				},
			],
		},
	];

	return (
		<div className="library-page">
			<HeroSection
				backgroundImage="/images/library/building-code-bcbc-vbbl.445b1be5.jpg"
				title="LIBRARY"
				subtitle="latest research and points of view"
			/>

			<div className="py-24 px-3 max-w-screen-xl mx-auto">
				{libraries.map((library, index) => (
					<LibraryItem
						key={index}
						libraryName={library.libraryName}
						image={library.image}
						links={library.links}
					/>
				))}
			</div>
		</div>
	);
};

export default Library;
