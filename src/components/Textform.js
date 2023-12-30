import React, { useState } from 'react'

export const Textform = (props) => {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("handleupclick is clicked...")
        let newTextup = text.toUpperCase()
        setText(newTextup)
        props.showAlert("Converted to UpperCase!", "Success")
    }
    const handleLowClick = () => {
        // console.log("handlelowclick is clicked...")
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!", "Success")
    }
    const handleDelClick = () => {
        // console.log("handleDelClick is clicked...")
        let del = ""
        setText(del)
        props.showAlert("Text Deleted!", "Success")
    }
    const handleOnChange = (event) => {
        // console.log("handleOnChange is clicked...")
        setText(event.target.value)
    }



    // //      Dark Mood


    // const [myStyle, setMyStyle] = useState({
    //     backgroundColor: 'black'
    // })

    // const [btnColor, setBtnColor] = useState("")

    // let textStyle={
    //     color: 'gray'
    // }

    // let pStyel={
    //     color: 'white'
    // }


    // const toggleStyle = ()=>{
    //     if(myStyle.backgroundColor === 'white'){
    //         setMyStyle({
    //             backgroundColor: 'black'
    //         })
    //         setBtnColor('Light Mood')
    //     }
    //     else{
    //         setMyStyle({
    //             backgroundColor: 'white'
    //         })
    //         setBtnColor('Dark Mood')
    //     }
    // }



    return (
        <div  className='w-screen h-screen px-32'>
            <h1  className={`py-5 text-3xl text-${props.mode==="white"?"black":"white"} font-semibold text-center`}>{props.heading}</h1>
            <div className="w-full ">
                <textarea onChange={handleOnChange} value={text} className={`shadow-xl bg-${props.mode=== "black"?"black":"white"} outline-none shadow-gray-500 text-${props.mode==="white"?"black":"white"} px-6 py-2 w-full text-xl`} rows="10"></textarea>
            </div>
            <div className="py-5 w-full flex justify-center gap-5">
                <button disabled={text.length===0} onClick={handleUpClick} className='bg-rose-500 hover:bg-rose-700 text-white px-3 py-1 rounded-md'>UpperCase</button>
                <button disabled={text.length===0} onClick={handleLowClick} className='bg-sky-500 hover:bg-sky-700 text-white px-3 py-1 rounded-md'>LowerCase</button>
                <button disabled={text.length===0} onClick={handleDelClick} className=' bg-orange-500 hover:bg-orange-700 text-white px-3 py-1 rounded-md'>Clear All</button>
            </div>
            <h1 className={`text-3xl text-${props.mode==="white"?"black":"white"} font-semibold py-3`}>your text summery</h1>
            <p className='text-gray-500'>{text.split(/\s+/).filter((e)=>{return e.length!== 0}).length} Words and {text.length} Character</p>
            <p className='text-gray-500'>{0.008 * text.split(" ").filter((e)=>{return e.length!== 0}).length} Time to read</p>

        <h2 className={`text-2xl text-${props.mode==="white"?"black":"white"} font-semibold py-2`}>Preview</h2>
            <p className='text-gray-500'>{text.length>0?text:"Enter Your Text In the Textarea..."}</p>
        </div>
    )
}
