import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center  bg-cyan-900'>
        <div className='h-[80vh] w-[30%] bg-white rounded-lg shadow-lg hover:shadow-none shadow-gray-400 cursor-pointer flex flex-col justify-between items-center ml-20'>
          <img className='w-full h-[70%] rounded-lg' src="./Isa.png" alt="" />
          <p className='font-extrabold text-4xl font-mono mb-20'>Hola soy Isa</p>
        </div>

        <div className=' h-auto w-auto flex flex-col items-center justify-center relative m-20'>
          <span className='text-cyan-200 text-4xl  font-mono '>Isabella Gonzalez Vasquez</span>
          <p className='text-xl text-cyan-200 max-w-150 mt-20 '>Soy estudiante de ADSO en el SENA y estoy en el curso de React, quiero mejorar mis habilidades de Front-end, aunque me inclino más a la linea de Back-end </p>
        </div>
        <div className='h-[90%] w-[30%] flex flex-col justify-center'>
            <h1 className='text-cyan-500 text-3xl font-extrabold font-mono' >Cosas que me gustan</h1>
            <Card img={'./Shaggy.jpg'} parr='Mi perro' />
            <Card img={'./arbol.jpg'} parr='Arboles' />
            <Card img={'./leer.jpg'} parr='Leer' />
        </div>
      </div>



    </>
  )
}

export default App
