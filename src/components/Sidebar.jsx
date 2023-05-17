import React from 'react'
import { autos } from '../utils'

function Sidebar({handleColorClick, handleMarca, handlePrecio}) {

  return (
    <div className='w-[20%] bg-[#301505] h-[100vh]  flex flex-col p-5 '>
        <div className='mb-3'>
            <label
                className='text-[#e79022] font-bold text-sm' 
                htmlFor="color">
                Selecciona una marca
            </label>

            <select
            onChange={(e)=> handleMarca(e.target.value)}
            className='w-full h-[42px] rounded-lg bg-[#ffe9cdee] cursor-pointer shadow-md border-1 border-[#e79022] mt-2'>
            <option disabled> Selecciona una marca</option>
            {autos.map(auto =>
                        <option 
                        key={auto.id}>{auto.marca}</option>)}
            </select>
        </div>

        <div className='flex flex-col mt-3'>
            <label
            className='text-[#e79022] font-bold mb-3 text-sm' 
            htmlFor="color">
                Selecciona un color
            </label>
            <div className='flex flex-wrap gap-5'>
              <button
                className='rounded-full bg-black border-solid px-4 py-4 transform transition duration-600 ease-in hover:scale-110'
                onClick={() => handleColorClick('negro')}
              ></button>
                <button
                className='rounded-full bg-white border-solid px-4 py-4 transform transition duration-600 ease-in hover:scale-110'
                onClick={() => handleColorClick('blanco')}
                ></button>
                <button
                className='rounded-full bg-blue-800 border-solid px-4 py-4 transform transition duration-600 ease-in hover:scale-110'
                onClick={() => handleColorClick('azul')}
                ></button>
                <button
                className='rounded-full bg-red-800 border-solid px-4 py-4 transform transition duration-600 ease-in hover:scale-110'
                onClick={() => handleColorClick('rojo')}
                ></button>
            </div>
           
        </div>
        
        <div className='mt-3 flex flex-col'>
            <label
                className='text-[#e79022] font-bold mb-3 text-sm' 
                htmlFor="color">
                Precio Máximo
            </label>
            <select
            onChange={(e) => handlePrecio(e.target.value)} 
            className='w-full h-[42px] rounded-lg bg-[#ffe9cdee] cursor-pointer shadow-md border-1 border-[#e79022]'>
                <option disabled> Selecciona un precio</option>
                <option>7000</option>
                <option>5000</option>
                <option>3000</option>
                <option>1000</option>
            </select>
        </div>
    </div>
  )
}

export default Sidebar
