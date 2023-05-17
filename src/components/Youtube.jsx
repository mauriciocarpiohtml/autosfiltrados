import React from 'react'
import YoutubeCard from './YoutubeCard'
import { useState, useEffect } from 'react'

function Youtube({autoSeleccionado}) {
    const[videos, setVideos] = useState([])

    const opcionesYoutube = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_API_KEY,
            'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
        }
    }

    useEffect(()=>{
        async function consultarVideos(){
            const url = `https://youtube-search-results.p.rapidapi.com/youtube-search/?q=${autoSeleccionado.modelo}`
            const respuesta = await fetch(url, opcionesYoutube)
            const resultado = await respuesta.json()
            const topVideos = await resultado.items.slice(0,3)
            setVideos(topVideos)
           
        }

          consultarVideos() 
    },[])

  return (
    <>
      <h2 className='text-center text-xl font-semibold text-stone-600  mb-5 uppercase'>Quieres conocer mas acerca de este auto?</h2>
      <div className='mt-3 mb-10 border-t-2 border-[#301505]  p-5 flex flex-wrap gap-3 w-full mx-auto '>
        
        {videos?.map((video=>
              <YoutubeCard 
                video={video}
                key={video.id}/>
          ))}
      </div>
    </>

  )
}

export default Youtube
