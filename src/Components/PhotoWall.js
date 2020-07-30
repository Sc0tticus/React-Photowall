import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
//anchor tag, href attribute
class PhotoWall extends React.Component {
    componentDidMount() {
        fetch("http://localhost:4000/posts")
        .then(res => res.json())
        .then(
            (posts => {
                console.log('SUCCESS!!! The result:', { posts })
                this.props.updatePosts(posts);
            }),
            (error) => { console.log('Shit, something went wrong!!!', error) }
        )
    }

    render() {
    return  <div>
             <Link className = "addIcon" to="/AddPhoto"> </Link>
             <div className="photoGrid" >
                  {this.props.posts
                    .sort(function(x,y) {
                        return  y.id - x.id
                    })
                    .map((post, index) => <Photo key={index} post={post} {...this.props} index={index}/>)}
             </div>
        </div>
    }
}

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}


 export default PhotoWall
