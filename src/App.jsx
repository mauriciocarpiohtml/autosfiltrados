import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Autos from './components/Autos'
import Modal from './components/Modal'
import { autos } from './utils'

function App() {

  const [abrirModal, setAbrilModal] = useState(false)
  const [autoSeleccionado, setAutoSeleccionado] = useState('')

  function infoModal(auto){
    setAbrilModal(true)
    setAutoSeleccionado(auto)
  }
  
  function cerrarModal(){
    setAbrilModal(false)
  }
  // Estados para filtrar 

  const [filtrarAutos, setFiltrarAutos] = useState({color:'', marca: '', precio:''})

  function handleColorClick(color){
    setFiltrarAutos({...filtrarAutos, color})
  }

  function handleMarca(marca){
    setFiltrarAutos({...filtrarAutos, marca})
  }

  function handlePrecio(precio){
    setFiltrarAutos({...filtrarAutos, precio})
  }

  // Filtrar autos segun el input 

  // Las condiciones de filtro se establecen mediante las variables color, marca y precioMaximo,
  //  que se obtienen del objeto filtrarAutos. Si alguna de estas variables es una cadena vacía (''), 
  // se considera que no se está aplicando una condición de filtro para esa variable en particular

    const autosFiltrados = autos.filter((auto) => {
      const { color, marca, precio } = filtrarAutos
      const cumpleColor = color === "" || auto.color === color
      const cumpleMarca = marca === "" || auto.marca === marca
      const cumplePrecio = precio === "" || auto.precio <= precio
      return cumpleColor && cumpleMarca && cumplePrecio
    })

  return (
    <>
    <div className='flex w-full'>
      <Sidebar 
        handleColorClick={handleColorClick}
        handleMarca={handleMarca}
        handlePrecio={handlePrecio}/>
      <Autos 
      autosFiltrados={autosFiltrados}
      infoModal={infoModal}
      cerrarModal={cerrarModal}/>
    </div>
    {abrirModal && <Modal
                    autoSeleccionado={autoSeleccionado}
                    cerrarModal={cerrarModal}/>}
    </>
  )
}

export default App
