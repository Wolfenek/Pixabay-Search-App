import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ShowUp extends Component {
  render() {
    let availableImages;
    const { images } = this.props;
    if(images) {
      availableImages = (
        <ul style={{listStyle: 'none', textAlign: 'center'}}>
          {images.map(img => (<li key={img.id}
            >
            <img
              src={img.webformatURL}
              style={{width: '50%', height: '50%'}}
            ></img>
            </li>
          ))}
        </ul>
      )
    } else {
      availableImages = null;
    }

    return (
      <div>
        {availableImages}
      </div>
    )
  }
}

ShowUp.propTypes = {
  images: PropTypes.array.isRequired
}

export default ShowUp;
