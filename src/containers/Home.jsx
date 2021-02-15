import React, { useState } from 'react'
import '../css/Home.css'
import Todos from '../components/Home/Todos'
import Footer from '../components/Home/Footer'
import Animales from '../components/Home/Animales'
import Eventos from '../components/Home/Eventos'

const Home = () => {
    let [view, setView] = useState('todos')

    let todosON = () => <li className="is-active">TODOS</li>
    let todosOFF = () => <li onClick={() => setView(view = 'todos')}>TODOS</li>

    let animalesON = () => <li className="is-active">ANIMALES</li>
    let animalesOFF = () => <li onClick={() => setView(view = 'animales')}>ANIMALES</li>

    let eventosON = () => <li className="is-active">EVENTOS</li>
    let eventosOFF = () => <li onClick={() => setView(view = 'eventos')}>EVENTOS</li>

    return (
        <div className="Home">
            <div className="HomeHead" id="homeBox">
                <h1>Contenido</h1>
                <ul className="HomeHead__Switch">
                    { view === 'todos' ?  todosON() :  todosOFF() }
                    { view === 'animales' ? animalesON() : animalesOFF() }
                    { view === 'eventos' ? eventosON() : eventosOFF() }
                </ul>
            </div>
            <div>
                { view === 'todos'
                    ? <Todos></Todos>
                    : view === 'animales'
                        ? <Animales></Animales>
                        : <Eventos></Eventos> }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home
