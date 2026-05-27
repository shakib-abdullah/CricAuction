// import { useState } from 'react'


import { Suspense, useState } from 'react'
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
  const [toggle , setToggle] = useState(true);
  let player = 'Available Players';
  if(toggle){
    player = 'Available Players'
  }
  else{
    player = 'Selected players';
  }

  return (
    <>

        <Navbar></Navbar>

        <div className='flex justify-between max-w-[1300px] mx-auto my-2 items-center'>
            <div>
                <h3 className='font-bold text-2xl'> {player} </h3>
            </div>
            <div className='   '>
                <button onClick={() => setToggle(true)} className={`border-1 border-r-0 rounded-l-[20px] py-2 px-4 ${toggle ? "bg-amber-300" :"" }`} >Available</button>
                <button onClick={() => setToggle(false)} className={` border-1 border-l-0  rounded-r-[20px] py-2 px-4  ${toggle === false ? "bg-amber-300" : " " } `} >Selected <span>(0)</span></button>
            </div>
        </div>

        {
          toggle ? <div className='flex justify-center items-center'>
                      <Suspense  fallback = {<span className="  loading loading-spinner loading-lg  "></span>}>
                        <Availableplayers fetchplayersPromise={fetchplayersPromise} ></Availableplayers>
                      </Suspense>
                    </div>
                    :
                    <SelectedPlayers></SelectedPlayers>
        }


 
    

    </>
  )
}

export default App
