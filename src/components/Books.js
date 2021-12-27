import React from 'react'
import { connect } from 'react-redux'
import { dataFromApi } from '../redux/actions'
import BooksList from './BooksList'
import '../App.css';

class Books extends React.Component {

   // componentDidMount() {
   //    this.props.dataFromApi()
   // }

   render() {
      const { books } = this.props;
      return (
         <div className="card1" >
            <BooksList books={books} />
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      books: state.books
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      dataFromApi: () => dispatch(dataFromApi())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)
