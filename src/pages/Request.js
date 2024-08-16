import React from 'react';
import HeroSection from '../components/HeroSection';
import RequestForm from '../components/RequestForm';

const Request = () => {
	return (
		<div className="career-page">
			<HeroSection
				backgroundImage="/images/request/construction-fire-safety-plan-vancouver-bc.d30975fc.jpg"
				title="REQUEST A PROPOSAL"
				subtitle=""
			/>

			<div className="py-24 bg-slate-100 px-3">
				<div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-14">
					<div className="flex-1 flex flex-col gap-5 justify-center">
						<h4 className="text-blue-900 text-xl font-bold">SUBMIT YOUR REQUEST</h4>
						<p className="text-blue-900">
							Please complete the following form and submit.
						</p>
					</div>
				</div>
			</div>
			<div className="py-24 px-3">
				<div className="max-w-screen-xl mx-auto">
					<RequestForm />
				</div>
			</div>
		</div>
	);
};

export default Request;
