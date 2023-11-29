import React from 'react'
import Home from '../Pages/Home'
import Done from '../Pages/Done'
import { Routes, Route as R } from 'react-router-dom'
import Error from '../Errors/Error'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<Home/>}></R>
            <R path='/done' element={<Done/>}></R>
            <R path='/*' element={<Error/>}></R>
        </Routes>

    </>
  )
}

export default Route