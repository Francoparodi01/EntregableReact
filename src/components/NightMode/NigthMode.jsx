import React from 'react'

const NigthMode = ({handleColor}) => {
  return (
    <select name="navColor" id="navColor" onChange={handleColor}>
        <option value="#8b77fd">Purple</option>
        <option value="#fd77fd">Pink</option>
        <option value="black">Black</option>
    </select>
  )
}

export default NigthMode