import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ provider }) => {
  return (
    <div
      className="flex flex-col sm:flex-row bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer max-w-md mx-auto"
      onClick={() => alert(`You clicked on ${provider.name}`)}
    >
      {/* Image Section */}
      <div className="w-full sm:w-1/3">
        <img
          src={provider.imageUrl}
          alt={provider.name}
          className="h-40 sm:h-full w-full object-cover"
        />
      </div>

      {/* Details Section */}
      <div className="w-full sm:w-2/3 p-4">
        <h3 className="text-lg font-semibold text-gray-800">{provider.name}</h3>
        <p className="text-sm text-gray-600">{provider.location}</p>
        <p className="mt-2 text-yellow-500 font-medium">
          ⭐ {provider.rating} / 5
        </p>
      </div>
    </div>
  );
};

// Define PropTypes
ServiceCard.propTypes = {
  provider: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServiceCard;
