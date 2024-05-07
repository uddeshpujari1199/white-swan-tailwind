import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Opacity } from '@mui/icons-material';

function Card(props) {
  return (
    <div className=' card p-2' style={{
        backgroundColor:props.color,
        color:props.textColor,
        borderRadius:props.boarderRadius,
        
    }}>
        <div>
        <p className='text-start txt1-main'>{props.text1}</p>
        <h3 className='text-start tet2-main'>{props.text2}</h3>
        </div>
        <div className='flex justify-between mt-5'>
            <p className='subtext-main'>{props.subtext}</p>
            <div>{props.icon}
            </div>
            </div>
    </div>
  )
}

export default Card