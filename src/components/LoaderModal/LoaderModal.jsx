import React, { Component } from 'react';
import css from './LoaderModal.module.css';
import { BallTriangle } from 'react-loader-spinner';

class LoaderModal extends Component {
  componentDidMount() {
    // When the modal is shown, we want a fixed body
    // document.body.style.position = 'fixed';
    // document.body.style.top = `-${window.scrollY}px`;
    // const el = document.querySelector('.ImageGallery');
    // const marginLeft = window
    //   .getComputedStyle(document.body, null)
    //   .getPropertyValue('margin-left');
    // document.body.style.overflow = 'hidden';
    // document.body.style.position = 'fixed';
    // document.body.style.marginLeft = marginLeft;
    // When the modal is hidden, we want to remain at the top of the scroll position
    // document.body.style.position = '';
    // document.body.style.top = '';
  }

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
