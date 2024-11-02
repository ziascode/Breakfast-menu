import './App.css';
import React, {useState, useEffect} from "react";
import Item from './components/Item';
import { library } from './components/library';
import Tabs from './components/Tabs';
import { Image } from '@material-tailwind/react';

function App() {
  const [fullMenu, setFullMenu] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    setFullMenu(library);
    setFiltered(library);
  }, []);
 console.log(activeCategory)

  return (
    <div className="App bg-[#0e111bfa]  min-h-[100vh]">
      <div className="pt-20 img flex-col flex items-center  justify-center gap-5">
      <Image className="hidden md:flex w-30 h-20" src="https://paghmankabob.com/wp-content/uploads/2024/11/logo-done.png"/>
      <Image className="md:hidden flex w-30 h-22 px-10" src="https://paghmankabob.com/wp-content/uploads/2024/11/logo-m-1.png"/>
        <Image className="hidden md:flex w-35 h-10 md:w-30 h-20" src="https://paghmankabob.com/wp-content/uploads/2024/11/HEADER.png"/>
      </div>
      {/* tabs component */}
      <Tabs 
        fullMenu = {fullMenu}
        setFiltered = {setFiltered}
        activeCategory = {activeCategory}
        setActiveCategory = {setActiveCategory}
      />

      {/* food item component */}
      <div className='max-w-6xl mx-auto px-10 flex'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 '>
            {filtered.map((item) => (
            <Item 
            image = {item.image}
            title = {item.title}
            desc = {item.desc}
            price = {item.price}
            category = {item.category}
            />
            ))}
        </div>
          
      </div>
      
      

    </div>
  );
}

export default App;

// create object with all food items. Each items will incude 1) pic 2)name 3)desc 4) price 5)category
// map --> component --> create all food items
// tabs: click tabs to display only selected category


// create a new state that only contins the filtered items based on what you clicked on: min 21
// create a sate for active category 