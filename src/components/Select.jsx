import React, { useState, useEffect } from 'react';
import clock from '../assets/clock.svg';  
import calendar from '../assets/calendar.svg';  

function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState(null); 

  const options = [
    {
      value: "send",
      label: (
        <div className="flex items-center">
          <img src={clock} alt="clock" className="w-5 h-5 mr-2" />
          Entrega ahora
        </div>
      ),
    },
    {
      value: "respond",
      label: (
        <div className="flex items-center">
          <img src={calendar} alt="calendar" className="w-5 h-5 mr-2" />
          Programar tarde
        </div>
      ),
    },
  ];

  useEffect(() => {
    setSelectedOption(options[0]); 
  }, []);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  const handleSelect = (option) => {
    setSelectedOption(option); 
    setIsOpen(false); 
  };

  return (
    <div className="relative w-60">
      <div
        className="p-4 bg-white cursor-pointer"
        onClick={toggleDropdown}
      >
        {selectedOption ? selectedOption.label : "Seleccione una opción"}
      </div>

      {isOpen && (
        <ul className="absolute left-0 -right-10 bg-white mt-2">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)} 
              className="p-4 hover:bg-gray-200 flex items-center"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;
