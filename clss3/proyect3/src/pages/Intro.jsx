import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'


function Intro() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1 class="text-3xl font-bold underline">
                Intro
            </h1>

            <div className="flex">
                <div className='flex-1 bg-blue-300 m-2 border-1 border-black text-blue-900 font-bold font-mono'>1</div>
                <div className='flex-2 bg-blue-300 m-2 border-1 border-black text-blue-900 font-bold font-mono'>2</div>
                <div className='flex-3 bg-blue-300 m-2 border-1 border-black text-blue-900 font-bold font-mono'>3</div>
            </div>

            <div className="flex flex-wrap mt-6 gap-3">
                <div className='card grow shrink-0'>1</div>
                <div className='card grow-2 shrink-0'>2</div>
                <div className='card grow-3 shrink-0'>3</div>
                <div className='card grow-4 shrink-0'>4</div>
                <div className='card grow-5 shrink-0'>5</div>
                <div className='card grow-6 shrink-0'>6</div>
            </div> 


        </>
    )
}

export default Intro