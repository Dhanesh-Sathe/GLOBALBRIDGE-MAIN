import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/Home.css';

const Find = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('https://globalbridge-server.onrender.com/api/find');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className='bgColor1'>
      <div className='flex flex-row justify-around pt-10 mx-[250px]'>
        <input type="text" placeholder='🔍 Search...' className='w-[500px] h-[40px] px-5 py-5 rounded-3xl text-xl bg-blue-500 text-white placeholder:text-white placeholder:font-semibold placeholder:text-xl text-bold'/>
        <button className='bg-blue-500 px-5 rounded-3xl text-white font-bold hover:bg-blue-700 '>FIND IMPORTER</button>
        <button className='bg-blue-500 px-5 rounded-3xl text-white font-bold hover:bg-blue-700 '>FIND EXPORTER</button>
      </div>
    <div className='container mx-auto pb-12 pt-6'>
      <h1 className='text-4xl font-bold text-center mb-8'>Companies</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 '>
        {companies.map((company) => (
          <div className='flex flex-row bg-blue-500 shadow-md rounded-lg p-6 justify-evenly'>
            <div key={company._id} className='text-white'>
              <h2 className='text-3xl font-bold mb-4'>{company.companyName}</h2>
              <p className='mb-2'><span className='font-bold'>Country:</span> {company.country}</p>
              <p className='mb-2'><span className='font-bold'>Business Type:</span> {company.businessType}</p>
              <p><span className='font-bold'>Product:</span> {company.product}</p>
            </div>
            <div className='flex flex-row justify-evenly'>
              <button className='bg-blue-400 px-3 h-[40px] my-auto text-white font-semibold rounded hover:bg-blue-700 mx-2'>View Profile</button>
              <img src="./images/verified1.jpg" alt="Verified" className='h-[150px] w-[150px] mx-auto rounded-full mx-2'/>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Find;
