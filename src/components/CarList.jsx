// src/components/CarList.jsx
import React, { useState, useEffect } from 'react';
import { FaSearch, FaCar, FaTachometerAlt, FaDollarSign } from 'react-icons/fa'; // Correct imports

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    // Simulated car data
    const carData = [
      {
        id: 1,
        name: 'Tesla Model S',
        make: 'Tesla',
        model: 'Model S',
        year: 2022,
        price: '$85,000',
        mileage: '12,000 miles',
        engine: 'Electric',
        image: 'https://example.com/tesla.jpg',
      },
      {
        id: 2,
        name: 'BMW 3 Series',
        make: 'BMW',
        model: '3 Series',
        year: 2021,
        price: '$40,000',
        mileage: '18,500 miles',
        engine: 'Gasoline',
        image: 'https://example.com/bmw.jpg',
      },
      {
        id: 3,
        name: 'Ford Mustang',
        make: 'Ford',
        model: 'Mustang',
        year: 2020,
        price: '$30,000',
        mileage: '25,000 miles',
        engine: 'Gasoline',
        image: 'https://example.com/mustang.jpg',
      },
    ];
    
    setCars(carData);
    setFilteredCars(carData);
  }, []);

  useEffect(() => {
    if (searchQuery === '') {
      setFilteredCars(cars);
    } else {
      const results = cars.filter(car =>
        car.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCars(results);
    }
  }, [searchQuery, cars]);

  return (
    <div className="p-6 space-y-6">
      {/* Search Bar */}
      <div className="flex justify-center items-center space-x-2 mb-6">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search cars..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map((car) => (
          <div key={car.id} className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out">
            {/* Card Image */}
            <div className="relative w-full h-64">
              <img
                src={car.image}
                alt={car.name}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            </div>

            {/* Card Details */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-semibold">{car.name}</h3>
              <p className="text-white text-sm">{car.year} | {car.make} {car.model}</p>
              <p className="text-white text-lg font-bold mt-2">{car.price}</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">
                View Details
              </button>
            </div>

            {/* Card Flip Content (Back) */}
            <div className="absolute inset-0 bg-white text-center p-6 opacity-0 group-hover:opacity-100 transform group-hover:rotate-y-180 transition-all duration-500">
              <p className="text-gray-600"><FaTachometerAlt className="inline mr-2" /> {car.mileage}</p>
              <p className="text-gray-600 mt-2"><FaCar className="inline mr-2" /> {car.engine}</p>
              <p className="text-gray-600 mt-4"><FaDollarSign className="inline mr-2" /> {car.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
