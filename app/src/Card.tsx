import { useEffect } from 'react';
import Confetti from 'react-confetti';



interface CardProps {
    firstTitle: string,
    subtitle: string,
    text: string[];
    width: number,
    height: number,
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
            <div className="footer__wrapper">
                <p>&lt;3</p>
                <a href="https://github.com/furrygem/puppy-card" className="footer__link">GitHub</a>
                <a href="/letter.txt" className="footer__link">letter.txt</a>
            </div>
        </footer>
    )
}


function Card(props: CardProps) {
    return (
        <div className="body">
            <Confetti recycle={false} width={props.width} height={props.height}/>
            <Header firstTitle={props.firstTitle} subtitle={props.subtitle}/>
            <Main text={props.text}/>
            <Footer />
        </div>
    )
}

export default Card;