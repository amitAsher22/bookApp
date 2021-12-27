import React, { Component } from 'react'
import '../App.css'

class BooksList extends Component {

  render() {
    const { books } = this.props;

    return (
      books.map((item, index) => (
       
        <div key={index} className="card"  style={{ width: "12rem"}}>
          <img className="card-img-top" src={item.volumeInfo.imageLinks.thumbnail} alt="Card img book" />
          <div className="card-body">
            <p className="card-title">Authors : {item.volumeInfo.authors}</p>
            <p className="card-text">published : {item.volumeInfo.publishedDate}</p>
          </div>
        </div>
        
      
      ))
    )
  }
}

export default BooksList