import React, { Component } from 'react'
import PropTypes from 'prop-types';

class ShowUp extends Component {
  render() {
    let availableImages;
    const { images } = this.props;
    if(images) {
      availableImages = (
        <div className='container'>
          <div className='grid'>
            {images.map(img => 
            (<img key={img.id}
              src={img.webformatURL}
              ></img>)
            )}
          </div>
        </div>
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
