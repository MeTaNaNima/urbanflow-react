import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const RequestForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		jobTitle: '',
		email: '',
		phone: '',
		country: null,
		state: null,
		city: null,
		companyName: '',
		industry: '',
		additionalInfo: '',
		files: [],
	});

	const [countries, setCountries] = useState([]);
	const [stateOptions, setStateOptions] = useState([]);
	const [cityOptions, setCityOptions] = useState([]);

	useEffect(() => {
		axios
			.get('https://restcountries.com/v3.1/all')
			.then((response) => {
				const countryOptions = response.data.map((country) => ({
					value: country.cca2,
					label: country.name.common,
				}));
				setCountries(countryOptions);
			})
			.catch((error) => {
				console.error('Error fetching countries:', error);
			});
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSelectChange = (selectedOption, { name }) => {
		setFormData({ ...formData, [name]: selectedOption });

		if (name === 'country') {
			const countryCode = selectedOption.value;
			axios
				.get(`http://localhost:8000/api/request/states/${countryCode}`)
				.then((response) => {
					setStateOptions(response.data);
					setCityOptions([]);
				})
				.catch((error) => {
					console.error('Error fetching states:', error);
				});
		} else if (name === 'state') {
			const stateCode = selectedOption.value;
			axios
				.get(`http://localhost:8000/api/request/cities/${stateCode}`)
				.then((response) => {
					setCityOptions(response.data);
				})
				.catch((error) => {
					console.error('Error fetching cities:', error);
				});
		}
	};

	const handleFileChange = (e) => {
		setFormData({ ...formData, files: e.target.files });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formDataToSend = new FormData();
		for (const key in formData) {
			if (key === 'files') {
				Array.from(formData.files).forEach((file) => {
					formDataToSend.append('files', file);
				});
			} else if (formData[key] && formData[key].value) {
				formDataToSend.append(key, formData[key].value);
			} else {
				formDataToSend.append(key, formData[key]);
			}
		}

		axios
			.post('http://localhost:8000/api/request', formDataToSend)
			.then((response) => {
				console.log('Form submitted successfully:', response.data);
			})
			.catch((error) => {
				console.error('There was an error submitting the form:', error);
			});
	};

	return (
		<div className="max-w-xl mx-auto p-8 bg-white shadow-md rounded">
			<h2 className="text-2xl font-bold mb-6">Request for Proposal</h2>
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="firstName">
						First Name*
					</label>
					<input
						type="text"
						id="firstName"
						name="firstName"
						value={formData.firstName}
						onChange={handleInputChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="lastName">
						Last Name*
					</label>
					<input
						type="text"
						id="lastName"
						name="lastName"
						value={formData.lastName}
						onChange={handleInputChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="jobTitle">
						Position/Job Title*
					</label>
					<input
						type="text"
						id="jobTitle"
						name="jobTitle"
						value={formData.jobTitle}
						onChange={handleInputChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
						Email*
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
						Phone*
					</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						value={formData.phone}
						onChange={handleInputChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
					<Select
						name="country"
						options={countries}
						onChange={handleSelectChange}
						className="mb-2"
					/>
				</div>
				{stateOptions.length > 0 && (
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">State</label>
						<Select
							name="state"
							options={stateOptions}
							onChange={handleSelectChange}
							className="mb-2"
						/>
					</div>
				)}
				{cityOptions.length > 0 && (
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">City</label>
						<Select
							name="city"
							options={cityOptions}
							onChange={(selectedOption) =>
								setFormData({ ...formData, city: selectedOption })
							}
							className="mb-2"
						/>
					</div>
				)}
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="companyName">
						Company Name*
					</label>
					<input
						type="text"
						id="companyName"
						name="companyName"
						value={formData.companyName}
						onChange={handleInputChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="industry">
						Industry
					</label>
					<input
						type="text"
						id="industry"
						name="industry"
						value={formData.industry}
						onChange={handleInputChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 text-sm font-bold mb-2"
						htmlFor="additionalInfo">
						Additional Information*
					</label>
					<textarea
						id="additionalInfo"
						name="additionalInfo"
						value={formData.additionalInfo}
						onChange={handleInputChange}
						rows="5"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						required></textarea>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						File Upload
					</label>
					<input
						type="file"
						multiple
						onChange={handleFileChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default RequestForm;
