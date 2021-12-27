
import React from 'react'
import { connect } from 'react-redux'
import {getValue , dataFromApi } from '../redux/actions'




class Search extends React.Component {

// componentDidMount(){
//     fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
//     .then(res =>res.json())
//     .then(data => console.log(data))
// }


// getValue = (e)=>{
//   e.preventDefault()
//   console.log(e.target.bookInfo.value); 
// }


    render() {
        return (
            <div className="BGsearch">
                <div >
                    <div className="input-group mb-3  ">
                        <div >
                        <input type="text" onChange={this.props.get} placeholder="Recipient's username"  />
                        <button type="submit" onClick={()=>this.props.dataFromApi(this.props.search)}   className="btn btn-outline-success">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        search : state.search
    }
}


const mapDispatchToProps = (dispatch)=>{

    return{
        dataFromApi : (value)=> dispatch(dataFromApi(value)),
        get : (e)=>   dispatch(getValue(e.target.value))
    }
}



export default connect(mapStateToProps , mapDispatchToProps)(Search)