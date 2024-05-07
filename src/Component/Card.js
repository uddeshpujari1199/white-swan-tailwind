import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Card(props) {
  return (
    <div className=' p-5' style={{
        backgroundColor:props.color,
        color:props.textColor,
        borderRadius:props.boarderRadius
    }}>
        <div>
        <p className='text-start'>{props.text1}</p>
        <h3 className='text-start'>{props.text2}</h3>
        </div>
        <div className='flex justify-end mt-5'><KeyboardArrowDownIcon/></div>
    </div>
  )
}

export default Card