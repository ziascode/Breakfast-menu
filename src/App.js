import './App.css';
import React, {useState, useEffect} from "react";
import Item from './components/Item';
import { library } from './components/library';
import Tabs from './components/Tabs';

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