import React from 'react'
const Avatar = ({user}) => {
    const {name, imageUrl, imgSize} = user

  return (
   <div>
    <h1>{name}</h1>
    <img src={imageUrl} width={imgSize}/>
   </div>
  )
}

export default Avatar
