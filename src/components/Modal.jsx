import React from 'react'
import Youtube from './Youtube'

function Modal({autoSeleccionado, cerrarModal}) {
  return (
    <div className='w-[55%] mx-auto fixed top-20 left-24 right-0 bottom-0  z-10 opacity-87 bg-gray-100 overflow-scroll rounded-lg h-3/4 shadow-lg '>
        <div className='p-5 md:p-10 md:flex  flex-col justify-center items-center'>
            <img src={autoSeleccionado.imagen}/>
            <div className='flex flex-col '>
                <h3 className='text-stone-700 mt-5 md:mt-3 uppercase text-xl md:text-3xl font-bold text-center'>{autoSeleccionado.modelo}</h3>
                <p className='mt-1 text-stone-400 text-center md:p-5'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, quas! Ipsum praesentium, magnam perspiciatis blanditiis cupiditate dolor consequatur ducimus commodi.</p>
            </div>
        
        </div>

        <svg
            onClick={cerrarModal}
        xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-x-square-fill cursor-pointer absolute right-2 top-2 w-25 h-25 " viewBox="0 0 16 16">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
        </svg>
         <Youtube 
            autoSeleccionado={autoSeleccionado}/> 
      
    </div>
  )
}

export default Modal
