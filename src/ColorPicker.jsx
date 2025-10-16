import React, { useState } from 'react'

function ColorPicker() {
  const [color,setColor]=useState("#ffffff");
function handleColorChange(e)
{
  setColor(e.target.value);
  
}
  return (
    <div className='color-picker-container'>
<h1>Color Picker</h1>
<div className='color-display' style={{backgroundColor :color}}>
  <p>selected color {color}</p>
</div>
    <div className='yoom'>
      <label> Select a color</label><br />
      <input type="color" onChange={handleColorChange}/>
    </div>
    </div>
  )
}

export default ColorPicker
