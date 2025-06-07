import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center  bg-cyan-900'>
        <div className='h-[80vh] w-[30%] bg-white rounded-lg shadow-xl hover:shadow-none sh shadow-gray-400 cursor-pointer flex flex-col justify-center items-center ml-20'>
          <img className='w-[60%] h-[50%]' src="https://i.pinimg.com/736x/18/0d/ca/180dca444d9d0794d84b513641a77801.jpg" alt="" />
          <p className='font-extrabold text-4xl font-mono '>Hola soy Isa</p>
        </div>

        <div className=' h-auto w-auto flex flex-col items-center justify-center relative m-20'>
          <span className='text-cyan-200 text-4xl  font-mono '>Isabella Gonzalez Vasquez</span>
          <p className='text-xl text-cyan-200 max-w-150 mt-20 '>Soy estudiante de ADSO en el SENA y estoy en el curso de React, quiero mejorar mis habilidades de Front-end, aunque me inclino más a la linea de Back-end </p>
        </div>
        <div className='h-[90%] w-[30%] flex flex-col items-center justify-center relative m-20'>
            <h1>Cosas que me gustan</h1>
            <div className='h-[25vh] w-full bg-white rounded-lg shadow-xl hover:shadow-none sh shadow-gray-400 cursor-pointer flex flex-col justify-center items-center'>
              <img className='w-[60%] h-[50%]' src="https://i.pinimg.com/736x/18/0d/ca/180dca444d9d0794d84b513641a77801.jpg" alt="" />
              <p className='font-extrabold text-4xl font-mono '>Hola soy Isa</p>
            </div>
            <div className='h-[25vh] w-full bg-white rounded-lg shadow-xl hover:shadow-none sh shadow-gray-400 cursor-pointer flex flex-col justify-center items-center mt-10'>
              <img className='w-[60%] h-[50%]' src="https://i.pinimg.com/736x/18/0d/ca/180dca444d9d0794d84b513641a77801.jpg" alt="" />
              <p className='font-extrabold text-4xl font-mono '>Hola soy Isa</p>
            </div>
            <div className='h-[25vh] w-full bg-white rounded-lg shadow-xl hover:shadow-none sh shadow-gray-400 cursor-pointer flex flex-col justify-center items-center mt-10'>
              <img className='w-[60%] h-[50%]' src="https://i.pinimg.com/736x/18/0d/ca/180dca444d9d0794d84b513641a77801.jpg" alt="" />
              <p className='font-extrabold text-4xl font-mono '>Hola soy Isa</p>
            </div>
          
        </div>

      </div>



    </>
  )
}

export default App
