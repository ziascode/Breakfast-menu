import React from 'react';
import '../App.css';


function Item({image, title, desc, price, category}) {


  return (
    <div>
        <div className='mx-2 border-4 border-[#183447] rounded-md h-[32em] bg-[#091d2a] text-blue-50 my-4  hover:text-[#fda82f] transition transform delay-50 ease-out hover:shadow-lg hover:shadow-slate-500'>
            <div>
                <img className='border-2 border-transparent rounded-t-md h-30' src={image} alt="" />
            </div>
            <div className='flex flex-col text-left mx-2 space-y-7'>
                <h1 className='text-xl font-bold mt-4'>{title}</h1>
                <p>{desc}</p>
                <p >{price}</p>

            </div>
        </div>
        

        {/*  =================   */}

        

        {/*  =================   */}
        
    </div>
  )
}

export default Item