import React, { Fragment } from 'react';


const Header = (props) => {
  return (
    <header classname="top">
      <h1>
        Catch
        <span className="ofThe"> 
        <span className="of">Of</span>
        <span className="the">The</span>
        </span>
        Day
        </h1>
      <h3 classname="tagline">
        <span>{props.tagline}</span>
      </h3>
    </header>
  )
}

export default Header;