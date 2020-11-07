// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import BadgesNew from './pages/BadgeNew';
import Badges from './pages/Badges';
import App from './components/App';

// const jsx = <h1>Hello,Platzi Badges! </h1>;
// const element = React.createElement('a', { href: 'https://platzi.com' }, 'Ir a platzi.');
// const name = 'Mateo';
// const element = React.createElement('h1', {}, `Hola, soy ${name}`);
// const jsx = <h1> Hola, soy {__expresiones__} </h1>  

// const jsx = (
// <div>
//     <h1>Hola soy Mateo</h1>
//     <p>Soy ingeniero frontend.</p>
// </div>
// )

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{},'Hola, soy Mateo'),
//     React.createElement('p',{},'Soy ingeniero de la web')
// )
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render( < Badge 
//     firstName = "Mateo" 
//     lastName = "Loaiza Rios"
//     avatarUrl = "https://s.gravatar.com/avatar/33aa77d8ef78047ab18bdfc9f131d373?s=80" 
//     jobTitle = "Backend Enginner"
//     twitter = "loaizamateo" /> , container);

ReactDOM.render( < App /> , container);