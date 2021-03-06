import React, { Fragment } from 'react';
import { render } from 'react-dom';

class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
        <p>Fish!!</p>
        <form className='store-selector'>
          <h2>Please enter a store</h2>
          <input type='text' required placeholder='Store Name' />
          <button type='submit'>Visit store -></button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;