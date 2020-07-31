import Main from './Main'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from '../redux/actions'
import {withRouter} from 'react-router'

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)

}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))


// state = {
//     todos/posts: [],
//     user: {},
//     alerts: []

// }
// signUp = (user) => {
//     fetch("http://localhost:3000/users", {
//             method: "POST",
//             headers: {
//                 "Content-Type:" "application/json"
//             },
//             body: JSON.stringify({user})
//             }) 
        // .then(response => response.json())
        // .then(response => {
        //     if(response.errors){
        //        this.setState({alerts: response.errors })
        //     }
        //     else {
        //         this.setState({
        //             user: response.user,
        //             alerts: ["User succesfully created!"]
        //         })
        //     }
        // })
// }


export default App