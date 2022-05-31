import React, { useEffect, useState, SetStateAction } from 'react';
import Confetti from 'react-confetti';



interface CardProps {
    firstTitle: string,
    subtitle: string,
    text: string[];
}


interface MainProps {
    text: string[];
}


interface HeaderProps {
    firstTitle: string,
    subtitle: string,
}


function Main(props: MainProps) {
    let text = [];
    for (let paragraph of props.text) {
        text.push(<p>{paragraph}</p>);
    }
    return (
        <main>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati similique odio mollitia repudiandae repellendus? A recusandae ullam sint nam quos voluptas. Nobis cum dolorum animi earum modi impedit possimus repellendus.</p>
            {text}
        </main>
    )
}


function Header(props: HeaderProps) {
    return (
        <header>
            <h1 className="main-title">{props.firstTitle}</h1>
            <h3>{props.subtitle}</h3>
        </header>
    )
}


function Footer() {
    return (
        <footer>
            <p>&lt;3</p>
        </footer>
    )
}


function Card(props: CardProps) {
    return (
        <div className="body">
            <Confetti recycle={false} />
            <Header firstTitle={props.firstTitle} subtitle={props.subtitle}/>
            <Main text={props.text}/>
            <Footer />
        </div>
    )
}

export default Card;