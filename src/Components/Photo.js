import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
function Photo(props) {
    const post = props.post
    console.log("This is where to grab the iframe link (or it should be)", props.post)
    return <figure className="figure"> 
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <Link to={`/single/${post.id}`}>
                            <img className= "photo" src={post.imageLink} alt={post.description}/>
                        </Link>
                    </div>
                    <div class="flip-card-back">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84245.84808265592!2d-105.63907343853853!3d40.24923939406916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87696329ae762967%3A0xa9769b05809a8028!2sLongs%20Peak!5e0!3m2!1sen!2sus!4v1596220080937!5m2!1sen!2sus" width="800" height="400"></iframe>
                    </div>
                </div>
            </div>
                
                
            <figcaption> <p> {post.description} </p> </figcaption>
            <div className = "button-container">
            <button onClick = {() => {
                props.removePost(post.id)
                props.history.push('/')
            }}> Remove </button>
            <Link className="button" to={`/single/${post.id}`}> 
                <div className="comment-count"> 
                    <div className="speech-bubble"> </div>
                    {props.comments[post.id] ? props.comments[post.id].length : 0 }
                </div>
            </Link>
            </div>
         </figure>
}


Photo.propTypes = {
    post: PropTypes.object.isRequired,
}


export default Photo