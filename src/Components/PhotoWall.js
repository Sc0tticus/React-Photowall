import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
//anchor tag, href attribute
class PhotoWall extends React.Component {
    render() {
    return  <div>
             <Link className = "addIcon" to="/AddPhoto"> </Link>
             <div className="photoGrid" >
                  {this.props.posts
                    .sort(function(x,y) {
                        return  y.id - x.id
                    })
                    .map((post) => <Photo key={post.id} post={post} {...this.props} />)}
             </div>
        </div>
    }
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}


 export default PhotoWall
