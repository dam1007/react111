import React, { useEffect, useState } from 'react'

function Text() {

  function TextFunc({title, desc, id}) {
    return (
      <div className="text">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    )
  }

  const [titles, setTitles] = useState([]);
  
  useEffect(() => {
    const requestOption = {
      method: 'GET',
      redirect: 'follow',
    };
    fetch('https://dam1007.github.io/data/react111.json',
    requestOption
    )
    .then((response) => response.json())
    .then((result) => setTitles(result.text.titleInfo))
    .then((error) => console.log('error', error));
  }, []);

  // console.log(titles);

  const [texts, setTexts] = useState([]);

  useEffect(() => { 
    const requestOption = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch('https://dam1007.github.io/data/react111.json',
    requestOption)
    .then((response) => response.json())
    .then((result) =>  setTexts(result.text.textInfo))
    .then((error) => console.log('error', error))
  }, []);

  
  return (
    <section id="textType" className="text__wrap section nexon">
      <h2>{titles.title}</h2>
      <p>{titles.desc}</p>
      <div className="text__inner container">
        {texts.map((txt)=>(
          <TextFunc title={txt.title} desc={txt.desc} key={txt.id} />
        ))}
      </div>
    </section>
  )
}

export default Text