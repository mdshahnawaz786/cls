import React from 'react'
import { useSelector } from 'react-redux'

const Text = () => {
    const data = useSelector((state)=>{
        return state.reducer
    })
    console.log(data);
  return (
    <>
    <div>{data}</div>
    </>
  )
}

export default Text