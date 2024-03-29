import { Link } from "react-router-dom"

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';

import '../styles/auth.scss'

import { Button } from '../components/Button'

export function NewRoom() {

    return(
        <div id = 'page-auth'>
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real </p>
            </aside>
            <main>
                <h1>{value}</h1>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask Logo"/>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                           type="text" 
                           placeholder="Nome da sala"
                        />
                        <Button type="submit">
                            Criar na sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}