import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearch = () => {
    setIsSearchOpen(prev => !prev);
    };

  return (
    <div>
        <input
            type="text"
            placeholder="Tell us what you want to watch today"
            className={` bg-gray-800 text-white rounded-full px-4 py-2 pt-2 transition-all duration-500 ease-in-out
            ${isSearchOpen ? 'w-80 opacity-100' : 'w-0 opacity-0'}
            `}
            style={{ overflow: 'hidden' }}
        />
        <FontAwesomeIcon icon={isSearchOpen ? "xmark" : "magnifying-glass"} className="pr-5 pl-5 mt-2" style={{ color: 'white'}} size="2x" onClick={toggleSearch}  />
    </div>
  )
}

export default Search