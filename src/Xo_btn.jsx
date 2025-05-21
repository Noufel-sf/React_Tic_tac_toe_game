import React from 'react'

function Xo_btn({ xo ,handle_onclick ,isWining} ) {
  return (
        <button
          className={`p-12 cursor-pointer text-3xl font-bold rounded-lg text-red ${isWining ? 'bg-yellow-400' : 'bg-white'}  `}   // color the buttons of the winner with yellow
          onClick={handle_onclick}
        >
          {xo}
    </button>

  )
}

export default Xo_btn