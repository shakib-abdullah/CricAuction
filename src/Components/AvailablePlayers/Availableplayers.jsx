import React from 'react';
import {use} from 'react';
import PlayerCard  from '../PlayerCard/PlayerCard';
 
const Availableplayers = ({fetchplayersPromise}) => {

    const Playersdata = use(fetchplayersPromise)
    console.log(Playersdata);

    return (


        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4  max-w-[1300px] mx-auto my-[20px] border- border-amber-400'>
            
            {
                Playersdata.map(player => <PlayerCard player={player}> </PlayerCard>)
            }

        </div>


        


    );
};

export default Availableplayers;