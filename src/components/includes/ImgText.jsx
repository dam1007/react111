import React, {useEffect, useState} from 'react'

function ImgText() {
  const [imgtexts, setimgText] = useState([]);
  
  useEffect(() => {
    const requestOption = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch('https://dam1007.github.io/data/react111.json',
    requestOption
    )
    .then((response) => response.json())
    .then((result) => setimgText(result.ImgText))
    .then((error) => console.log('error', error));
  }, []);

  return (
    <section id="imgTextType" className='section nexon gray'>
      <h2 className="ir_so">이미지 텍스트 영역</h2>
      <div className="imgText__inner container">
        <div className="txt">
          <span className="small">{imgtexts.small}</span>
          <h3 className="title">{imgtexts.title}</h3>
          <p className="desc">
          {imgtexts.desc}
          </p>
          <a href="/" className="btn">{imgtexts.button}</a>
        </div>
        <div className="img bg1"></div>
        <div className="img bg2"></div>
      </div>
    </section>
  )
}

export default ImgText