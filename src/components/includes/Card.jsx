import React, {useEffect, useState} from 'react'


/* const cardDesc = [
  {
    title: '웹스토리보이 강의',
    desc: '웹디자이너, 웹 퍼블리셔, 프론트앤드 개발자를 위한 강의 사이트입니다.<br/>Gmarket Sans Light 22px 150% /67778A'
  }
] */

/* const cardInfo = [
  {
    id: 1,
    image: {
      src: 'assets/img/card_bg01.jpg',
      alt: '이미지1',
    },
    title: '웹표준 사이트 만들기',
    desc: '사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.',
    button: '더 자세히 보기',
    svg: {
      width: '52',
      height: '8',
      viewBox: '0 0 52 8',
      fill1: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      path: 'M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z',
      fill2: '#5B5B5B'
    }
  },
  {
    id: 2,
    image: {
      src: 'assets/img/card_bg02.jpg',
      alt: '이미지2',
    },
    title: '웹표준 사이트 만들기',
    desc: '사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.',
    button: '더 자세히 보기',
    svg: {
      width: '52',
      height: '8',
      viewBox: '0 0 52 8',
      fill1: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      path: 'M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z',
      fill2: '#5B5B5B'
    }
  },
  {
    id: 3,
    image: {
      src: 'assets/img/card_bg03.jpg',
      alt: '이미지3',
    },
    title: '웹표준 사이트 만들기',
    desc: '사이트를 만들기 위한 기초 강의입니다. 기본 코딩에 대한 감각을 익히고, 웹 표준을 준수하면서 코딩하는 방법을 익힙니다. 다양한 예제를 통해 사이트를 만드는 기본 강의입니다.',
    button: '더 자세히 보기',
    svg: {
      width: '52',
      height: '8',
      viewBox: '0 0 52 8',
      fill1: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      path: 'M51.3536 4.35355C51.5488 4.15829 51.5488 3.84171 51.3536 3.64645L48.1716 0.464466C47.9763 0.269204 47.6597 0.269204 47.4645 0.464466C47.2692 0.659728 47.2692 0.976311 47.4645 1.17157L50.2929 4L47.4645 6.82843C47.2692 7.02369 47.2692 7.34027 47.4645 7.53553C47.6597 7.7308 47.9763 7.7308 48.1716 7.53553L51.3536 4.35355ZM0 4.5H51V3.5H0V4.5Z',
      fill2: '#5B5B5B'
    }
  }
  
] */


function Card() {

  function CardCont({id, image, title, desc, button, svg}) {
    return (
      <article className="card">
        <figure className="card__header">
          <img className="img" src={image.src} alt={image.alt}/>
        </figure>
        <div className="card__body">
          <h3 className="title">{title}</h3>
          <p className="desc">{desc}</p>
          <a className="btn" href="/">
              {button}
              <svg width={svg.width} height={svg.height} viewBox={svg.viewBox} fill={svg.fill1} xmlns={svg.xmlns}>
                  <path d={svg.path} fill={svg.fill2}/>
              </svg>
          </a>
        </div>
      </article>
    );
  }

  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    const requestOption = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(
      'https://dam1007.github.io/data/react111.json',
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setCards(result.cardDesc))
    .then((error) => console.log('error', error));
  }, []);  



  const [cardInfos, setCardInfos] = useState([]);
  
  useEffect(() => {
    const requestOption = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(
      'https://dam1007.github.io/data/react111.json',
      requestOption
    )
    .then((response) => response.json())
    .then((result) => setCardInfos(result.cardInfo))
    .then((error) => console.log('error', error));
  }, []);  

  return (
    <section id="cardType" className="card__wrap section nexon">
      <h2>{cards.title}</h2>
      <p>{cards.desc}</p>
      <div className="card__inner container">
        {cardInfos.map((txt) => (
          <CardCont image={txt.image} title={txt.title} desc={txt.desc} button={txt.button} svg={txt.svg} key={txt.id} />
        ))}
      </div>
    </section>
  )
}

export default Card