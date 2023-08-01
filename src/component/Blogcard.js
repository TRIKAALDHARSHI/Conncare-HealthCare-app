import React from 'react'

function Blogcard(props) {
  return (
    <>
      <div class="card" style={{ width: "24rem" }}>
        <img src={props.image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"><b>{props.card_head}</b></h5>
          <p class="card-text">{props.card_para}</p>
        </div>
      </div>
    </>
  )
}

export default Blogcard