import React, {useEffect, useState} from 'react'

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