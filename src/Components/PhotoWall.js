import React from 'react' //
import Photo from './Photo' //
import PropTypes from 'prop-types' //I love Heather

function PhotoWall(props){ //
  return <div>
          <a className = "addIcon"
          onClick={props.onNavigate}
          href='#AddPhoto'>Click Me</a>
          {/* <button onClick={props.onNavigate} className="addIcon"> + </button>   */}
          <div className="photoGrid"> 
            {props.posts.map((post, index) => <Photo key={index} post={post}
            onRemovePhoto = {props.onRemovePhoto}
            />)}
          </div>
        </div>
}

PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

export default PhotoWall