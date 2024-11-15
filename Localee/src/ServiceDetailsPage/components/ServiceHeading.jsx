import React from 'react';

const ServiceHeading = ({ title, reviews }) => {
  return (
    <div className="border-b border-gray-300 pb-4">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <p className="text-sm text-gray-600 mt-1">{reviews}</p>
    </div>
  );
};

export default ServiceHeading;
