import React, { useEffect, useState } from 'react'

function Slider() {
  const [slides, setSlide] = useState([]);
  
  useEffect(() => {
    const requestOption = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch('https://dam1007.github.io/data/react111.json',
    requestOption
    )
    .then((response) => response.json())
    .then((result) => setSlide(result.slider))
    .then((error) => console.log('error', error));
  }, []);

  return (
    <section id="sliderType slider__wrap nexon">
      <h2 className="ir_so">슬라이드 영역</h2>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
            <div className="desc">
              <span>{slides.small}</span>
              <h3>{slides.title}</h3>
              <p>{slides.desc}</p>
              <div className="btn">
                <a href="/" className="white">자세히 보기</a>
                <a href="/" className="black">사이트 보기</a>
              </div>
            </div>
          </div>
          <div className="slider__arrow">
            <a href="/" className="left"><span className="ir_pm">이전이미지</span></a>
            <a href="/" className="right"><span className="ir_pm">다음이미지</span></a>
          </div>
          <div className="slider__dot">
            <a href="/" className="dot active"><span className="ir_pm">1</span></a>
            <a href="/" className="dot"><span className="ir_pm">2</span></a>
            <a href="/" className="dot"><span className="ir_pm">3</span></a>
            <a href="/" className="dot"><span className="ir_pm">4</span></a>
            <a href="/" className="play"><span className="ir_pm">자동플레이</span></a>
            <a href="/" className="stop"><span className="ir_pm">정지</span></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slider