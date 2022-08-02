import React, {useEffect, useState} from 'react'

function Banner() {

  const [banners, setBanners] = useState([]);

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
    .then((result) => setBanners(result.banner))
    .then((error) => console.log('error', error));
  }, []);  

  return (
    <section id="bannerType" className="banner__wrap section gmarket">
      <h2 className="ir_so">배너 영역</h2>
      <div className="banner__inner">
        <h3 className="banner__title">{banners.title}</h3>
        <p className="banner__desc">
          {banners.desc}
          <a href="/">{banners.href}</a>
        </p>
        <span className="banner__sub">{banners.small}</span>
      </div>
    </section>
  )
}

export default Banner