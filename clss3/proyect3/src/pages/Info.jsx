import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../App.css'
import Button from '../components/Button'

function Info() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Info
      </h1>

      <div className="p-6 space-x-4">
        <Button>Inactivo</Button>
        <Button isActive>Activo</Button>
      </div>

      <div className="grid grid-cols-2 gap-4 h-[100vh]">
        <header className='card col-span-2'>Header</header>
        <nav className='card col-span-2'>Nav</nav>
        <section className='card '>Section</section>
        <article className='card '>Article</article>
        <aside className='card row-[3/5] col-start-2'>Aside</aside>
        <footer className='card col-span-2'>Footer</footer>
      </div>


    </>
  )
}

export default Info