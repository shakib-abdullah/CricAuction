// import { useState } from 'react'


import { Suspense } from 'react'
import './App.css'
import Availableplayers from './Components/AvailablePlayers/Availableplayers'
import Navbar from './Components/Navbar/Navbar'
import SelectedPlayers from './Components/SelectedPlayers/SelectedPlayers'


const fetchplayers = async() =>{
    const res = await fetch("/players.json")
    return res.json();
}


function App() {
  // const [count, setCount] = useState(0
  const fetchplayersPromise = fetchplayers();

  return (
    <>

        <Navbar></Navbar>

        <div className='flex justify-center items-center'>
            <Suspense  fallback = {<span className="  loading loading-spinner loading-lg  "></span>}>
              <Availableplayers fetchplayersPromise={fetchplayersPromise} ></Availableplayers>
            </Suspense>
        </div>
 
        <SelectedPlayers></SelectedPlayers>











    </>
  )
}

export default App
