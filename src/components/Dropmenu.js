import React, {useState, useEffect} from 'react';


function Dropdown({selected, setSelected, setActiveCategory}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Family Deal', 'Kabob On The Run', 'Shawarma', 'Paghman Pizza', 'Wings', 'Single Skewers', 'Dessert', 'Side Orders' ];
    const optionsMobile = ['Egg Plate Options', 'Sweets', 'Drinks', 'Hot drinks','Sides'];
  
    

  return (
    <div>
        <div className="dropdown hidden ">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
            </div>
            
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div 
                            
                            onClick={(e) => {
                                setSelected(option);
                                setIsActive(false);
                                setActiveCategory(option);
                                
                            }}
                            className='dropdown-item'
                        >
                            {option}
                        </div>
                    ))}
                    
                </div>
            )}
        </div>

        {/* mobile menue */}
                    <div className="dropdown md:hidden">
                        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                            {selected}
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                        </div>
                        
                        {isActive && (
                            <div className="dropdown-content">
                                {optionsMobile.map((option) => (
                                    <div 
                                        
                                        onClick={(e) => {
                                            setSelected(option);
                                            setIsActive(false);
                                            setActiveCategory(option);
                                            
                                        }}
                                        className='dropdown-item'
                                    >
                                        {option}
                                    </div>
                                ))}
                                
                            </div>
                        )}
                    </div>
    </div>
  )
}

export default Dropdown