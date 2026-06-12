import React from 'react';

const SelectedPlayers = ({purchasePLayer , setPurchasePLayer}) => {
    console.log(purchasePLayer);


    const deletehandler = (sid) =>{
        const updatedPLayer = purchasePLayer.filter( p => p.id !== sid )

        setPurchasePLayer(updatedPLayer);
    }

    return (
        <div className='w-full  max-w-[1300px] mx-auto '>

            {
                purchasePLayer.map( selplayer => 
                    <div className='flex justify-between border-1 border-gray-400 rounded-2xl my-[10px] '>
                        <div className=' flex justify-between '>              
                            <div className='  '><  img className=' m-[10px] w-[100px] h-[100px] rounded-2xl  object-cover' src={selplayer.image} alt="" /></div>    
                            <div className=' my-[10px] mx-[20px] '>
                                <p className='  mb-[10px]'>{selplayer.name}</p>    
                                <p className='text-gray-400'>{selplayer.batting_style}</p>    
                            </div>    
                        </div>
                        <div className='  my-auto mx-[30px]'>
                            < button onClick={ () => deletehandler(selplayer.id) } className="btn btn-dash btn-error w-[100px] rounded-[19px] ">delete</button>
                        </div>
                    </div>

                 )
            }

        </div>
    );
};

export default SelectedPlayers;