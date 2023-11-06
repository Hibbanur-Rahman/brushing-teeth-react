import React, { useState, useRef } from 'react';
import './style.css';
import option1 from './images/option1.png';
import option2 from './images/option2.png';
import option3 from './images/option3.png';
import option4 from './images/option4.png';
import option5 from './images/option5.png';
import option6 from './images/option6.png';

import pageImg1 from './images/pageImg-1.png';
import pageImg2 from './images/pageImg-2.png';
import pageImg3 from './images/pageImg-3.png';

import understand from './images/understand.png';

import rightArrow from './images/right arrow.png';


function App() {
  const FirstSlide = useRef(null);
  const SecondSlide = useRef(null);
  const ThirdSlide = useRef(null);


  const [activeSlide, setActiveSlide] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [clickCount, setClickCount] = useState(1);
  const [selectedItems, setSelectedItems] = useState([]);
  // const [feedback, setFeedback] = useState('');

  const images = [

    { src: option1 },
    { src: option2 },
    { src: option3 },
    { src: option4 },
    { src: option5 },
    { src: option6 }
  ];

  const handleImageClick = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleNext = () => {
    setActiveSlide((activeSlide + 1) % 3);
  };

  const handleBack = () => {
    setActiveSlide((activeSlide - 1 + 3) % 3);
  };

  // const handleSubmit = () => {
  //   if (selectedItems.length === images.length && selectedItems.every((item, index) => item === index + 1)) {
  //     setFeedback('You are a winner');
  //   } else {
  //     setFeedback('You lost');
  //   }
  // };



  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const HandleRemoveSidebar = () => {
    setIsSidebarOpen(false)
  }

  const handleSidebarPagingSelection = (data) => {
    console.log(data)
    setActiveSlide(data);
  }

  const handleNumberingClick = (e) => {
    console.log(e.currentTarget.childNodes[0].childNodes[0])
    if( e.currentTarget.childNodes[0].childNodes[0].innerHTML==''){
      setClickCount(clickCount + 1);
      e.currentTarget.childNodes[0].childNodes[0].innerHTML=clickCount;
    }

  }

  

  return (
    <div classname="App">
      <div className="nav-toggel" onClick={toggleSidebar}>
        <div />
        <div />
        <div />
      </div>
      <div className="next" onClick={handleNext}>
        <i className="fa fa-arrow-alt-circle-right" />
      </div>
      <div className="back" onClick={handleBack}>
        <i className="fa fa-arrow-alt-circle-left" />
      </div>
      <div className="container">
        <div className={`sidebar ${isSidebarOpen ? 'sidebarOpen' : 'sidebarClose'}`}>
          <div className="pageImg"  onClick={()=>handleSidebarPagingSelection(0)}>
            <img src={pageImg1} alt />
          </div>
          <div className="pageImg" onClick={()=>handleSidebarPagingSelection(1)}>
            <img src={pageImg2} alt />
          </div>
          <div className="pageImg" onClick={()=>handleSidebarPagingSelection(2)}>
            <img src={pageImg3} alt />
          </div>
        </div>
        <div className="main">
          <div className={`first another ${activeSlide === 0 ? '' : 'hide'}`} onClick={HandleRemoveSidebar} ref={FirstSlide}>
            <img src={pageImg1} alt />
          </div>
          <div className={`second another ${activeSlide === 1 ? '' : 'hide'}`} onClick={HandleRemoveSidebar} ref={SecondSlide}>
            <p>Tap the windows by order. At the end of the task,tap the little window below for a positive feedback
            </p>
            <h1>I Brush my teeth</h1>
            <div className="listing">
              <div className="item-2">
                <div className="image">
                  <img src={option1} alt={1} />
                </div>
                <p>1</p>
                <p>I wet the brush with water</p>
              </div>
              <div className="item-2" >
                <div className="image">
                  <img src={option2} alt={2} />
                </div>
                <p>2</p>
                <p>I put some toothpaste on the brush</p>
              </div>
              <div className="item-2" >
                <div className="image">
                  <img src={option3} alt={3} />
                </div>
                <p>3</p>
                <p>I brush my teeth well: up and down and also back to front</p>
              </div>
              <div className="item-2">
                <div className="image">
                  <img src={option4} alt={4} />
                </div>
                <p>4</p>
                <p>I rinse my mouth with water</p>
              </div>
              <div className="item-2">
                <div className="image">
                  <img src={option5} alt={5} />
                </div>
                <p>5</p>
                <p>I spit the water out into sink</p>
              </div>
              <div className="item-2">
                <div className="image">
                  <img src={option6} alt={6} />
                </div>
                <p>6</p>
                <p>Now my teeth are clean</p>
              </div>
            </div>
            <div className="understand item-2 image">
              <img src={understand} alt="understand" />
            </div>
          </div>
          <div className={`third another ${activeSlide === 2 ? '' : 'hide'}`} onClick={HandleRemoveSidebar} ref={ThirdSlide}>
            <h1>choose the correct Sequence</h1>
            <audio id="awesomeSound">
              <source src="awesome.mp3" type="audio/mpeg" />
            </audio>
            <audio id="yuckySound">
              <source src="yucky.mp3" type="audio/mpeg" />
            </audio>
            <img id="gif" src="./win.gif " alt="WS2k " className="hide" />
            <img id="lose" src="./emoji-yuck.gif " alt="lose" className="lose hide" />
            <img id="win" src="./WS2k.gif" alt="win" className="win hide" />
            <div className="options" >
              {images.map((name, index) => (
                <div className="item" key={index} value={index} onClick={handleNumberingClick}>
                  <div className="num">
                    <h1></h1>
                  </div>
                  <img src={name.src} alt={`option${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="show-selections" />
            <button className="submit">submit</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
