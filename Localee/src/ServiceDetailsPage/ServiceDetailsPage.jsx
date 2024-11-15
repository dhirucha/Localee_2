import React from 'react';
import ServiceHeading from './components/ServiceHeading';
import Filters from './components/Filters';
import ServiceCard from './components/ServiceCard';


const ServiceDetailsPage = () => {
  const serviceProviders = [
    {
      id: 1,
      name: 'ABC Electricians',
      location: 'Mumbai, India',
      rating: 4.5,
      imageUrl: '../assets/Electrician-at-work-e1643101212741.jpg',
    },
    {
      id: 2,
      name: 'QuickFix Repairs',
      location: 'Delhi, India',
      rating: 4.7,
      imageUrl: '/images/provider2.jpg',
    },
    {
      id: 3,
      name: 'HomeSafe Services',
      location: 'Bangalore, India',
      rating: 4.3,
      imageUrl: '/images/provider3.jpg',
    },
    {
      id: 4,
      name: 'BrightFix Solutions',
      location: 'Chennai, India',
      rating: 4.6,
      imageUrl: '/images/provider4.jpg',
    },
    {
      id: 5,
      name: 'Elite Electricals',
      location: 'Pune, India',
      rating: 4.8,
      imageUrl: '/images/provider5.jpg',
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
      {/* Left Section - Filters */}
      <div className="w-full md:w-1/3 p-4 bg-white shadow-lg">
         {/* Service Heading */}
         <ServiceHeading
          title="Electrician Services"
          reviews="(200+ reviews)"
        />
        <Filters />
      </div>

      {/* Right Section - Service Cards */}
      <div className="w-full md:w-1/1 p-4">
       

        {/* Service Cards - Scrollable */}
        <div className="mt-4 h-[calc(100vh-50px)] overflow-y-scroll bg-white rounded-lg shadow p-4 space-y-4">
          {serviceProviders.map((provider) => (
            <ServiceCard key={provider.id} provider={provider} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
