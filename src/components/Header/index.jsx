import React from 'react';
import styles from "./header.module.css"

export default function Header() {
    const scrollSuave = (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId)

        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    }

    return (
        <div className={styles.headerContainer} id='header'>
            <img src="https://static.thenounproject.com/png/778835-200.png" alt="Logo" className={styles.headerImg} />
            <nav className={styles.headerNav}>
                <ul>
                    <li><a href="#home" onClick={scrollSuave}>Home</a></li>
                    <li><a href="#about" onClick={scrollSuave}>Quem somos</a></li>
                    <li><a href="#products" onClick={scrollSuave}>Produtos</a></li>
                    <li><a href="#contact" onClick={scrollSuave}>Contato</a></li>
                </ul>
            </nav>
        </div>
    );
}
