import React, {Component} from 'react';

function Photo(props){
  const post = props.post
    return (
    <figure className="figure">
              <img className="photo" 
              src={post.imageLink} 
              alt={post.description} 
              />
              <figcaption> 
                <p>{post.description}</p> 
              </figcaption>
              <div>
              <button className="remove-button"> Remove </button>
              </div>
    </figure>
    )
}

export default Photo