import React, { useState } from 'react';

function Input(props) {
    const [ value, setValue] =  useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13 /*13 is enterPress value*/){
            props.addList(value)
                setValue("")
        }
    }
  return (
    <div className='input-container'>
        <input 
            type='text' 
            className='input-box-todo' 
            placeholder='Enter todo'
            value={value}
            onChange={e=>{
                setValue(e.target.value)
            }}
            onKeyDown={handleEnterPress}
        />
        <button 
            className='add-btn' 
            onClick={()=> {
                props.addList(value)
                setValue("")
        }}>+</button>
    </div>
  )
}

export default Input