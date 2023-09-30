import React, { Component } from 'react';
import css from './LoaderModal.module.css';
import { BallTriangle } from 'react-loader-spinner';

class LoaderModal extends Component {
  render() {
    return (
      <div className={css.overlay} id="overlay">
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#E3FFA8"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </div>
    );
  }
}

export default LoaderModal;
