import React from 'react'

const Card = (props) => {
  const {email, id, name} = props;
  return (
  <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
   <img alt='photo' src={`https://robohash.org/c${id}?200x200`} />
     <div>
       <h2>{name}</h2>
       <p>{email}</p>
     </div>
  </div>



  )
}
 export default Card;
