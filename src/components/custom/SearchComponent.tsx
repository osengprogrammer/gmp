"use client"

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ChevronsDown, Menu, Search } from 'lucide-react';

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('divisi'); // Default category
  const [showSelect, setShowSelect] = useState<boolean>(false);

  const handleSearchTermChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handleMenuClick = () => {
    // Handle menu icon click (e.g., show/hide menu, navigate to menu screen, etc.)
    console.log('Menu clicked');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform search or filtering based on searchTerm and selectedCategory
    console.log('Search Term:', searchTerm);
    console.log('Selected Category:', selectedCategory);
    // You can implement your search/filtering logic here
  };

  return (
    <div className="rounded-lg ">
      <form onSubmit={handleSubmit} className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="flex py-2 px-2  lg:mb-0  border border-green-500 rounded-md focus:outline-none focus:border-green-700"
        />
        <Search className="w-4 h-4 cursor-pointer ml-1" />
        <div className='flex items-center justify-center'>
        <div className="relative lg:mb-0  ">
          
              
              <ChevronsDown className="w-4 h-4 " onClick={handleMenuClick}/>

              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full py-2 px-2 border border-green-500 rounded-md focus:outline-none focus:border-green-700 bg-white"
              >
                <option value="divisi">Divisi</option>
                <option value="kecamatan">Kecamatan</option>
                <option value="tps">TPS</option>
              </select>
            
        </div>
       
        </div>
       
      </form>
    </div>
  );
};

export default SearchComponent;
