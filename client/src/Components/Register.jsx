import React, { useState } from 'react';
import axios from 'axios';
import '../css/Home.css'

const Register = () => {
  const [formValues, setFormValues] = useState({
    companyName: '',
    companyEmail: '',
    country: '',
    businessType: '',
    product: '',
    companyRegistrationNum: '',
    licenseNumber: '',
    establishYear: '',
    address: '',
    contact: '',
    companyWebsite: ''
  });

  const [files, setFiles] = useState({
    companyRegistrationDoc: null,
    customRegistrationDoc: null,
    tradeAssociationMembership: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    const file = e.target.files[0];
    setFiles({
      ...files,
      [name]: file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }

    for (const key in files) {
      if (files[key]) {
        formData.append(key, files[key]);
      }
    }

    try {
      const response = await axios.post('https://globalbridge-server.onrender.com/api/registerCompany', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Success:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='bgColor1 py-6'>
    <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg max-w-md mx-auto my-6 bg-blue-300">
      <h1 className="text-2xl font-bold mb-6 text-center">Register Company</h1>

      {/* Company Name */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">Company Name *</label>
        <input
          type="text"
          name="companyName"
          value={formValues.companyName}
          onChange={handleInputChange}
          placeholder="Company Name"
          className="border rounded-lg py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Company Email */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyEmail">Company Email *</label>
        <input
          type="email"
          name="companyEmail"
          value={formValues.companyEmail}
          onChange={handleInputChange}
          placeholder="Company Email"
          className="border rounded-lg py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Country */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="country">Country *</label>
        <input
          type="text"
          name="country"
          value={formValues.country}
          onChange={handleInputChange}
          placeholder="Country"
          className="border rounded-lg py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Business Type */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="businessType">Business Type *</label>
        <input
          type="text"
          name="businessType"
          value={formValues.businessType}
          onChange={handleInputChange}
          placeholder="Business Type (e.g., Importer, Exporter)"
          className="border rounded-lg py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Product */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="product">Product *</label>
        <input
          type="text"
          name="product"
          value={formValues.product}
          onChange={handleInputChange}
          placeholder="Main Product"
          className="border rounded-lg py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Company Registration Number */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyRegistrationNum">Company Registration Number *</label>
        <input
          type="text"
          name="companyRegistrationNum"
          value={formValues.companyRegistrationNum}
          onChange={handleInputChange}
          placeholder="Company Registration Number"
          className="border rounded-lg py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* License Number */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="licenseNumber">Import/Export License Number *</label>
        <input
          type="text"
          name="licenseNumber"
          value={formValues.licenseNumber}
          onChange={handleInputChange}
          placeholder="License Number"
          className="border rounded-lg py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Established Year */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="establishYear">Established Year *</label>
        <input
          type="text"
          name="establishYear"
          value={formValues.establishYear}
          onChange={handleInputChange}
          placeholder="Year of Establishment"
          className="border rounded-lg py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Address */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">Address *</label>
        <input
          type="text"
          name="address"
          value={formValues.address}
          onChange={handleInputChange}
          placeholder="Full Address"
          className="border rounded-lg py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Contact */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">Contact *</label>
        <input
          type="text"
          name="contact"
          value={formValues.contact}
          onChange={handleInputChange}
          placeholder="Contact Number"
          className="border rounded-lg py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Company Website */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyWebsite">Company Website</label>
        <input
          type="text"
          name="companyWebsite"
          value={formValues.companyWebsite}
          onChange={handleInputChange}
          placeholder="Company Website (Optional)"
          className="border rounded-lg py-2 px-3 w-full text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      {/* Company Registration Document */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyRegistrationDoc">Company Registration Document *</label>
        <input
          type="file"
          name="companyRegistrationDoc"
          onChange={handleFileChange}
          className="w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      {/* Custom Registration Document */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="customRegistrationDoc">Custom Registration Document *</label>
        <input
          type="file"
          name="customRegistrationDoc"
          onChange={handleFileChange}
          className="w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600" 
          required /> 
      </div>
        {/* Trade Association Membership */}
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tradeAssociationMembership">Trade Association Membership Document *</label>
    <input
      type="file"
      name="tradeAssociationMembership"
      onChange={handleFileChange}
      className="w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      required
    />
  </div>

  {/* Submit Button */}
  <div className="flex items-center justify-center">
    <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
      Register
    </button>
  </div>
</form>
</div>
  )
}

export default Register
