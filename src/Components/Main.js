import React, {Component} from 'react'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, Link} from 'react-router-dom'
import Single from './Single'

class Main extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        console.log('do NOT TELL MEEEEE')
        fetch("http://localhost:4000/posts")
        .then(res => res.json())
        .then(
            (posts => this.props.updatePosts(posts)),
            (error) => console.log('Shit, something went wrong!!!', error)
        )
    }

    render() {
        return ( 
        
        <div>
            <h1> 
                <Link to="/"> Avy Savvy </Link>    
             </h1>
            <Route exact path = "/" render={() => (
                 <div>
                      <PhotoWall {...this.props} />   
                 </div>

            )}/> 

            <Route path= "/AddPhoto" render = {({history}) => (
                <AddPhoto {...this.props} onHistory={history}/>
            )}/>

            <Route path="/single/:id" render = {(params) => (
                <Single  {...this.props} {...params}/> 
            )}/>
         </div>
        )
    }

}

export default Main