import React, { useEffect, useState } from 'react'


function Image() {

  function ImgFunc({title, desc, image}){
    return (
      <article className="image">
        <div className="image__header">
          <figure className="image__figure">
            <img src={image} alt={title} />
          </figure>
        </div>
        <div className="image__body">
          <h3 className="image__title">{title}</h3>
          <p className="image__desc">{desc}</p>
          <a href="/" className="image__btn">자세히 보기</a>
        </div>
      </article>
    )
  }

  const [images, setImages] = useState([]);

  useEffect(() => {
    const requestOption = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch(
      'https://dam1007.github.io/data/react111.json',
      requestOption
    )
    .then((response) => response.json())
    .then((result) => {setImages(result.imgInfo);
      console.log(result.imgInfo);
    })
    .then((error) => console.log('error', error));
  }, []);

  // console.log(images);

  return (
    <section id="imageType" className="section">
      <h2>포트폴리오가 실력이다.</h2>
      <p>이미지 유형입니다. 마우스 오버시 자세한 정보가 나와는 구조입니다.</p>
      <div className="image__inner container section nexon">
        {images.map((txt) => (
          <ImgFunc title={txt.title} desc={txt.desc} image={txt.image} key={txt.title}/>
        ))}
      </div>
    </section>
  );
}

export default Image