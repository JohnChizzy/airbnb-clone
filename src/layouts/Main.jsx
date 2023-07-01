import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../components/Navigation';
import SideBar from '../pages/SideBar';
import Categories from '../components/Categories';

const Main = (props) => {
    return(
        <div id="wrapper">
            <Navigation />
            <Categories/>
            <div id="main">
            {props.children}
            </div>
            {/* {props.fullPage ? null : <SideBar />} */}
        </div>
  );

}

Main.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
  };
  Main.defaultProps = {
    children: null,
    fullPage: false,
  };


export default Main;