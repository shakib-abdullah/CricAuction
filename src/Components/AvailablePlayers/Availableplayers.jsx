import React from 'react';
import {use} from 'react';
import user from '../../assets/Group.png';
import flag from '../../assets/flag.png';
 
const Availableplayers = ({fetchplayersPromise}) => {

    const Playersdata = use(fetchplayersPromise)
    console.log(Playersdata);

    return (


        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4  max-w-[1300px] mx-auto border-2 border-amber-400'>
            
            {
                Playersdata.map(player =>            
                    <div class="$$card bg-base-100   shadow-sm p-[20px] border-2 border-gray-300 rounded-[10px]">
                        <figure>
                            <img className= ' w-[376px] h-[240px] object-cover rounded-[10px] mb-[20px]'
                            src={player.image}
                            alt="Shoes" />
                        </figure>
                        <div class="$$card-body">
                            <div className=' flex gap-3 mb-[15px]'>
                                <img src={user} alt="" />
                                <h2 class="$$card-title">{player.name}</h2>
                            </div>
                            <div className='flex justify-between mb-[20px]'>
                                <div className='flex gap-3'>
                                    <img className='text-gray-400' src={flag} alt="" />
                                    <p className='text-gray-500'>{player.country}</p>
                                </div>
                                <div className='bg-gray-300 flex justify-center w-[100px] rounded-[5px]'>
                                    <p>All-Rounder</p>
                                </div>
                            </div>
                            <hr className='mb-[10px]' />
                            <div className='flex justify-between'>
                                <h3 className='font-bold  mb-[10px]'>Rating</h3>
                                <h3 className='font-bold'>{player.rating}</h3>
                            </div>
                            <h2 className='mb-[10px]'>{player.batting_style}</h2>
                            <div className='flex justify-between '>
                                <h2 className='font-bold'>Price:$ <span>{player.price}</span></h2>
                                <button className='border-1 border-gray-300 w-[130px] h-[30px] text-center rounded-[10px]'>Choose Player</button>
                            </div>
                            
                        </div>
                    </div>
                )
            }

        </div>


        


    );
};

export default Availableplayers;