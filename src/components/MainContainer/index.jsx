import React from 'react';
import styles from "./mainContainer.module.css"

export default function MainContainer() {
  return (
    <div className={styles.MainContainer}>
      <img src="https://static.thenounproject.com/png/778835-200.png" alt="Home" className={styles.MainContainerImg}/>
      <div className={styles.MainContainerText}>
        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, nihil quibusdam. Corporis fuga accusamus ea, fugit temporibus doloremque atque maxime quibusdam ipsam. Beatae incidunt odit dicta, ipsa perspiciatis aperiam pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem consequuntur optio, accusantium itaque delectus expedita aperiam quo amet totam illo quae quam in et dolore magnam ipsam minima blanditiis dicta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores possimus incidunt, explicabo corporis aut iure natus dolore at esse assumenda id, aspernatur ipsa mollitia nulla minus non repudiandae adipisci! Quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quos ullam a voluptate laudantium, eos quibusdam mollitia, natus quia deleniti placeat similique rem! Ipsa ipsam blanditiis reprehenderit culpa consequuntur non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quisquam aliquid molestias aliquam debitis repellendus blanditiis maiores velit quam, beatae in dolorum quibusdam architecto dolorem eos facere delectus tenetur.</p>
      </div>
    </div>
  );
}