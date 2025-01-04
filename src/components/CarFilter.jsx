import React, { useState } from 'react';

const carData = [
  {
    id: 1,
    brand: 'Toyota',
    model: 'Camry',
    fuel: 'Petrol',
    color: 'Red',
    year: 2020,
    transmission: 'Automatic',
    bodyType: 'Sedan',
    price: 20000,
  },
  {
    id: 2,
    brand: 'Honda',
    model: 'Civic',
    fuel: 'Diesel',
    color: 'Black',
    year: 2018,
    transmission: 'Manual',
    bodyType: 'Hatchback',
    price: 15000,
  },
  {
    id: 3,
    brand: 'Ford',
    model: 'Focus',
    fuel: 'Petrol',
    color: 'Blue',
    year: 2019,
    transmission: 'Automatic',
    bodyType: 'Sedan',
    price: 18000,
  },
  {
    id: 4,
    brand: 'BMW',
    model: '3 Series',
    fuel: 'Petrol',
    color: 'White',
    year: 2021,
    transmission: 'Automatic',
    bodyType: 'Coupe',
    price: 35000,
  },
];

const CarFilter = () => {
  const [filters, setFilters] = useState({
    brand: '',
    model: '',
    fuel: '',
    color: '',
    year: '',
    transmission: '',
    bodyType: '',
    priceRange: [0, 50000],
  });

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearchVisibility = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePriceChange = (e) => {
    const { value } = e.target;
    setFilters((prev) => ({
      ...prev,
      priceRange: value.split(',').map(Number),
    }));
  };

  const filteredCars = carData.filter((car) => {
    const { brand, model, fuel, color, year, transmission, bodyType, priceRange } = filters;

    return (
      (brand === '' || car.brand.toLowerCase().includes(brand.toLowerCase())) &&
      (model === '' || car.model.toLowerCase().includes(model.toLowerCase())) &&
      (fuel === '' || car.fuel.toLowerCase().includes(fuel.toLowerCase())) &&
      (color === '' || car.color.toLowerCase().includes(color.toLowerCase())) &&
      (year === '' || car.year === parseInt(year)) &&
      (transmission === '' || car.transmission.toLowerCase().includes(transmission.toLowerCase())) &&
      (bodyType === '' || car.bodyType.toLowerCase().includes(bodyType.toLowerCase())) &&
      car.price >= priceRange[0] &&
      car.price <= priceRange[1]
    );
  });

  return (
    <div className="mt-10 bg-gray-50 py-12 px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <button
          onClick={toggleSearchVisibility}
          className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search Cars
          <span className={`ml-2 transform transition-transform ${isSearchVisible ? 'rotate-180' : ''}`}>
            ▼
          </span>
        </button>

        {isSearchVisible && (
          <div className="mt-6">
            {/* Filters Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Brand</label>
                <select
                  name="brand"
                  value={filters.brand}
                  onChange={handleFilterChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Brand</option>
                  <option value="Toyota">Toyota</option>
                  <option value="Honda">Honda</option>
                  <option value="Ford">Ford</option>
                  <option value="BMW">BMW</option>
                </select>
              </div>
              {/* Add other filters here similarly */}
            </div>

            {/* Car Results Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCars.length === 0 ? (
                <div className="col-span-full text-center text-gray-500">No cars found</div>
              ) : (
                filteredCars.map((car) => (
                  <div key={car.id} className="bg-white p-4 border rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold">
                      {car.brand} {car.model}
                    </h3>
                    <p>Fuel: {car.fuel}</p>
                    <p>Color: {car.color}</p>
                    <p>Year: {car.year}</p>
                    <p>Transmission: {car.transmission}</p>
                    <p>Body Type: {car.bodyType}</p>
                    <p>Price: ${car.price}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarFilter;
