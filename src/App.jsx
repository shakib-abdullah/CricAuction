// import { useState } from 'react'
import logonav from './assets/logo.png'
import coin from './assets/image.png'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <div className="navbar bg-base-100 shadow-sm m-[0px] md:m-[10px] border-2 border-amber-50">
              <div className="w-1/3  flex-1 border-1 border-green-500">
                <a className="btn btn-ghost text-xl">
                  <img src={logonav} alt="logo loading " />
                </a>
              </div>
              <div className=" flex justify-between w-2/3 border-1 border-red-500 items-center">
                <div className="hidden lg:flex gap-[40px] p-[10px]">
                  <p>Home</p>
                  <p>Fixture</p>
                  <p>Teams</p>
                  <p>Schedules</p>

                </div>
                <div className="flex gap-4 md:gap-8 border-2 border-yellow-500 rounded-2xl p-2 md:p-3 ml-10 md:mr-5 flex-wrap items-center min-w-0">
                  <span className="break-all min-w-0">60000000000</span>
                  <p className="whitespace-nowrap mr-1">Coin</p>
                  <img className="w-[30px] h-[30px] rounded-full object-contain flex-shrink-0" src={coin} alt="" />
                </div>
              </div>
            </div>
        </div>



    </>
  )
}

export default App
