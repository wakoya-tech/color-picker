import React, { useState } from 'react'

function ColorPicker() {
  const [color,setColor]=useState("#ffffff");

  return (
    <div className='color-picker-container'>
<h1>Color Picker</h1>
    </div>
  )
}

export default ColorPicker