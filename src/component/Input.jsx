import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { action } from '../redux/action'


const Input = () => {
    const dispatch = useDispatch()
    const [first, setfirst] = useState("")

  return (
    <>
    <input type="text" onChange={((e)=>{
        setfirst(e.target.value)
    })} />
    <button onClick={(()=>{
        dispatch(action(first))
    })}>click me</button>
    </>
  )
}

export default Input