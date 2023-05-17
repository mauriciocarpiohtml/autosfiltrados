import React from 'react'
import { autos } from '../utils'


function Autos({autosFiltrados, infoModal}) {

  return (
    // w-[80%] px-10 mt-12 flex flex-wrap gap-10
    <div className='w-[80%] px-10 mt-12 flex flex-wrap gap-10 '>
      {autosFiltrados.map(auto =>(
        <div
        onClick={()=> infoModal(auto)}
        key={auto.modelo}
        // w-[300px] h-[280px] border-t-2 
        className=' w-[300px] h-[280] border-t-2  border-[#df621c] p-3 flex flex-col  transform transition duration-500 ease-in-out hover:scale-110 cursor-pointer'>
            <img
            className='object-cover'
            src={auto.imagen}/>
            <div className='mt-1'>
                <h4 className='font-bold text-md text-[#301505]'>{auto.modelo}</h4>
                <h3 className=' font-bold text-xl text-[#e79022]'>{auto.precio}$ USD</h3>
            </div>
            
            <a href={`https://wa.me/1127888971?text=Hola,%20quiero%20info%20acerca%20del%20modelo%20${auto.modelo}`} target="_blank">
            {/*  */}
              <button className='bg-[#301505] text-white w-full font-bold text-center mt-3 px-3 py-2 rounded-lg'>
                 Contactar
              </button>
            </a>
            
        </div>
      ))}
    </div>
  )
}

export default Autos
