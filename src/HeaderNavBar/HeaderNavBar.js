import React, {Component} from 'react';
import './HeaderNavBar.scss';

class HeaderNavBar extends Component {
  openSearchBar = () => {
    let displayState = document.getElementById('searchbar').style.display;

    if (displayState === 'none' || displayState === '') {
      // display search bar and hide navbar 
      document.getElementById('searchbar').style.display = 'block';
      document.getElementById('navbar').style.display = 'none';

      //get input to be focused
      document.getElementById('inputbar').focus();
      document.getElementById('inputbar').select();
    } else {
      document.getElementById('searchbar').style.display = 'none';
      document.getElementById('navbar').style.display = 'block';
    }
  }
  render() {
    return(
      <div className='nav-container'>
        <div id='navbar' className='navitem-container'> 
          <ul>
            <div>
              <a href="/">
                <img src='https://image.flaticon.com/icons/svg/2425/2425995.svg' alt='electronics' />
              </a>
            </div>
            <li><a href="/desktop-page">Desktops</a></li>
            <li><a href='/phone-page'>Phones</a></li>
            <li>Laptops</li>
            <li>Printers</li>
            <li>Cameras</li>
            <li>Monitors</li>
            <div onClick={this.openSearchBar}>
              <img src='https://image.flaticon.com/icons/svg/527/527484.svg' alt='search' />
            </div>
          </ul>
          
        </div>
        <div id='searchbar' className='search-container'>
          <div>
            <div>
              <img src='https://image.flaticon.com/icons/svg/527/527484.svg' alt='search' />
            </div> 
              <input id='inputbar' type="text" placeholder='Search Infinite Electronics' autofocus />
            <div>
              <span onClick={this.openSearchBar}>&times;</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderNavBar;