
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        like: 0, 
        dislike: 0,
        totalRating: 0,
        handleLike: () => {
            this.setState((prevState) => ({
                like: prevState.like + 1,
                totalRating: prevState.totalRating + 1
            }));
        },
        handleDislike: () => {
            this.setState((prevState) => ({
                dislike: prevState.dislike + 1,
                totalRating: prevState.totalRating + 1
            }));
        }

    };
  }

  render() {
    return (
     <>
     <div className='content-rating'>
        <p>React es mejor que Angular</p>
        <div className="rating-buttons">
            <button onClick={this.state.handleLike} className='like-button'>
                Like ({this.state.like})
            </button>
            <button onClick={this.state.handleDislike} className='dislike-button'>
                Dislike ({this.state.dislike})
            </button>
        </div>
        <p>Total Ratings: {this.state.totalRating}</p>
     </div>
     </>
    );
  }
}

export default ContentRating;




