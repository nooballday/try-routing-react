import React, { Component } from 'react';

class Products extends Component{
  render(){

    return(
      <div className="container-fluid">
        <button id="demo-menu-lower-left" className="mdl-button mdl-js-button mdl-button--icon">
          <i className="material-icons">more_vert</i>
        </button>

        <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" htmlFor="demo-menu-lower-left">
          <li className="mdl-menu__item">Some Action</li>
          <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">Another Action</li>
          <li disabled className="mdl-menu__item">Disabled Action</li>
          <li className="mdl-menu__item">Yet Another Action</li>
        </ul>
      </div>
    )
  }
}

export default Products;
