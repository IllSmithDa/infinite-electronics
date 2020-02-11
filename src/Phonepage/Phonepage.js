import React, {Component} from 'react';
import HeaderNavBar from '../HeaderNavBar/HeaderNavBar';
import './Phonepage.scss';
class Phonepage extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 1,
    }
  }
  componentDidMount() {
    const {currentIndex} = this.state;
    this.showSlides(currentIndex);
  }
  prevImage = () => {
    const {currentIndex} = this.state;
    let newIndex = currentIndex - 1;
    this.showSlides(newIndex);
  }
  nextImage = () => {
    const {currentIndex} = this.state;
    let newIndex = currentIndex + 1;
    this.showSlides(newIndex);
    
  }

  showSlides = (index) => {
    let slides = document.getElementsByClassName("product-images");
    console.log('slide length: ' + slides.length);
    console.log('current index: '  + index);
    /* If image index goes past the last image, set index back to the first image */
    if (index > slides.length) {
      index = 1
      console.log('asdf')
    }
    /* if image index goes below first image index, set index to the last image */
    if (index < 1) {
      index = slides.length;
      console.log('asdf')
    }

    /* clean the slate for all images */
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      console.log('hello')
    }
    let imageIndex = index - 1;
    slides[imageIndex].style.display = "block";
    this.setState({currentIndex: index});
  }
  render() {
    return(
      <div className="phonepage-container">
        <HeaderNavBar />
        <span onClick={this.prevImage} className='left-arrow'>&#60;</span>
        <span onClick={this.nextImage} className='right-arrow'>&#62;</span>
        <div className='second-container'>
          <div className='product-images'>
            <img src='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260' alt='background1' />
          </div>
          <div className='product-images'>
            <img src='https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260' alt='background1' />
          </div>
          <div className='product-images'>
            <img src='https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260' alt='background1' />
          </div>
          <div className='product-images'>
            <img src='https://images.pexels.com/photos/48605/pexels-photo-48605.jpeg?auto=compress&amp;lcs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260' alt='background1' />
          </div>
        </div>
       
      </div>
    );
  }
}

export default Phonepage;