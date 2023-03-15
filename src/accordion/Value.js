import React from 'react'

export default function Value({score,option,i,set}) {
  return (
    <div className="input">
      <label htmlFor={`opt${score}${i}`}>
      <input type="radio"  name={i} id={`opt${score}${i}`} value={option} onClick={(e)=>set(i,e.target.value)}  />{option}
      </label>                                           
    </div>  
  )
}
