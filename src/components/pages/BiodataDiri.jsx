import React from 'react'
import BiodataCSS from "../../styles/pages/BiodataDiri.module.css"
import { Button, Grid } from '@mui/material'

const BiodataDiri = () => {
  return (
    <div className={BiodataCSS.container}>
      <div className={BiodataCSS.HeaderProfile}>
        <h6>Biodata Diri</h6>
        <button type="button" className='btn'>Base class</button>
      </div>
    </div>
  )
}

export default BiodataDiri