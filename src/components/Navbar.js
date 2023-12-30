import React from 'react'
//impt
import PropTypes from 'prop-types'

export const Navbar = (props) => {
  return (
    <div className={`flex justify-between bg-${props.mode==="black"?"black":"gray-200"} px-10 items-center`}>
      <div className="flex gap-5 items-center py-2">
        <h1 className={`text-2xl pr-3 font-semibold  text-${props.mode==="white"?"black":"white"}`}>{props.title}</h1>
        <a className={`text-sm text-${props.mode==="white"?"black":"white"}`} href="#">Home</a>
        <a className={`text-sm text-${props.mode==="white"?"black":"white"}`} href="#">About</a>
      </div>
      <div className="flex gap-3">
        {/* <div className="flex">
          <input className='rounded-l-md px-2 py-0.5 outline-none border-none shadow-md' placeholder='Search' type="text" />
          <button className='rounded-r-md px-1.5 text-red-500 hover:text-red-600 duration-200 border-red-400 shadow-md border bg-rose-200 hover:bg-rose-300 text-sm'>Search</button>
        </div> */}
        <div className="felx">
          <button onClick={props.toggelMode} className={`bg-${props.mode==="black"?"white":"black"} px-2 rounded-lg py-0.5 text-${props.mode==="black"?"black":"white"}`}>{props.btnText}</button>
        </div>
      </div>
    </div>
  )
}
Navbar.prototype = { title: PropTypes.string }
Navbar.defaultProps = {
  title: 'Srt Title Here'
}
// PropTypes.string   ->      pts
