import React from 'react'

export const Alert = (props) => {
    return (
       <div className="h-7">
         {props.alert && <div className="px-10 py-2 mb-4 text-lg bg-green-50 dark:bg-green-100 dark:text-green-700" role="alert">
            <span className="font-semibold flex items-center gap-3">{props.alert.type}:<p className='text-sm'>{props.alert.msg}</p></span>
            
        </div>}
       </div>
    )
}
