import React, {useEffect, useState} from 'react'


const bannerInfo = [
  {
    title: '유튜버 웹보이',
    desc: '더 다양한 강의는 유튜브를 통해 제공하고 있습니다.',
    href: 'youtube.com/c/Webstoryboy',
    small: '배너 영역01'
  }
]

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