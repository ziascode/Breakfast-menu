import React, {useEffect} from 'react';
import { useState } from 'react';
import '../App.css'
import Dropdown from './Dropmenu';


function Tabs({fullMenu, setFiltered, activeCategory, setActiveCategory}) {

    useEffect(() => {
        const filtered = fullMenu.filter((food) => 
        food.category.includes(activeCategory)
        );
        
        setFiltered(filtered);
    }, [activeCategory]);

   
const [selected, setSelected] = useState('Select');

   

  return (
    <>
    <div className='bg-[#13161f] pt-14 pb-12 flex justify-center space-x-2'>
      
      
      <div className='hidden tabs md:flex justify-center space-x-2 text-white '>

        <button className={activeCategory === 'Egg Plate Options' ? 'text-black bg-slate-300 opacity-90 px-4 py-2 rounded-md' : 'px-4 py-2 border-[2px] rounded border-blue-300 border-opacity-20'} onClick={() => setActiveCategory('Egg Plate Options')}>Egg Plate Options</button> 
        <button className={activeCategory === 'Sweets' ? 'text-black bg-slate-300 px-4 py-2 rounded-md' : 'px-4 py-2 border-[2px] rounded border-blue-300 border-opacity-20'} onClick={() => setActiveCategory('Sweets')}>Sweets</button>
        <button className={activeCategory === 'Drinks' ? 'text-black bg-slate-300 px-4 py-2 rounded-md' : 'px-4 py-2 border-[2px] rounded border-blue-300 border-opacity-20'} onClick={() => setActiveCategory('Drinks')}>Drinks</button>
        <button className={activeCategory === 'Hot drinks' ? 'text-black bg-slate-300 px-4 py-2 rounded-md' : 'px-4 py-2 border-[2px] rounded border-blue-300 border-opacity-20'} onClick={() => setActiveCategory('Hot drinks')}>Hot drinks</button>
        <button className={activeCategory === 'Sides' ? 'text-black bg-slate-300 px-4 py-2 rounded-md mr-2' : 'px-4 py-2 border-[2px] rounded border-blue-300 border-opacity-20'} onClick={() => setActiveCategory('Sides')}>Sides</button>
          
      </div>
      <Dropdown selected={selected} setSelected={setSelected} setActiveCategory={setActiveCategory}/>
      
    </div>
    <hr className='mb-10'/>
    </>
  )
}

export default Tabs

// click on button --> fxn --> setActiveTab()