import React from 'react'

function Cards(props) {
  return (
    <div>

<img src={props.image} style={{width:'300px',height:'300px'}}/>

<div style={{fontSize:'30px', marginLeft:'80px'}}>{props.title}

</div>


<div>
{props.desc}
</div>

    </div>

    
  )
}

export default Cards
