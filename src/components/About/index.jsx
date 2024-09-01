import React from 'react';
import styles from './about.module.css';

function About() {
  return (
    <div className={styles.AboutContainer} id='about'>
      <h2>Quem somos</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati aliquid deserunt, facere asperiores praesentium vero quos alias at qui aperiam temporibus dolore eius, quam itaque eligendi, quasi culpa beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur alias consectetur omnis qui voluptatem facilis fugiat, corrupti iure! Quas corrupti deleniti aut, quis ipsa alias provident eveniet voluptates deserunt necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ratione itaque non architecto voluptatem nam ipsam dolorem reiciendis rerum facilis, quia repellendus fugit dignissimos quis reprehenderit ex, impedit nobis atque!</p>
      <div className={styles.AboutContainerImgs}>
        <img src="https://static.thenounproject.com/png/778835-200.png" alt="Quem Somos" className={styles.AboutImg}/>
        <img src="https://static.thenounproject.com/png/778835-200.png" alt="Quem Somos" className={styles.AboutImg}/>
        <img src="https://static.thenounproject.com/png/778835-200.png" alt="Quem Somos" className={styles.AboutImg}/>
      </div>
    </div>
  );
}

export default About;
