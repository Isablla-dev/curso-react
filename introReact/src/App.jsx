import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-row bg-orange-500  items-center rounded-2xl relative w-[25vw]">
        <div className="info flex flex-col justify-center items-start p-8 ">
          <p>Up to</p>
          <strong className='text-4xl font-extrabold'>25% OFF</strong>
          <p>Package descuent coupon</p>

          <div className="button cursor-pointer mt-3 flex flex-row justify-center items-center bg-white rounded-full p-2 text-orange-500 font-bold">
            <div className="icon mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
              </svg>
            </div>
            <p>ST-V2586</p>
          </div>

        </div>

        <img src="https://aquicreamos.com/classex1/fondo.svg" alt="" className='h-40 box-border absolute bottom-0 right-0' />

      </div>
    </>
  )
}

export default App
