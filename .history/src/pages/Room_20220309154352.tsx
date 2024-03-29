import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

import '../styles/rooms.scss';


type Question = {
    id: string;
    author: {
      name: string;
      avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
  }

type RoomParams = {
    id: string;
}

export function Room(){
    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<Question[]>([])
    const [title, setTitle] = useState('');

    const roomId = params.id;

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();

        if(newQuestion.trim() == ''){
            return;
        }

        if(!user){
            throw new Error('Tou must be logged in')
        }

        const question = {
            content: newQuestion,
            author: {
              name: user.name,
              avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false
          };

        await database.ref(`rooms/${roomId}/questions`).push(question);

        setNewQuestion('');
        
    }

    return(
        <div id ="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={roomId} />
                </div> 
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala React</h1>
                    <span>4 perguntas</span>
                </div>
                

                <form onSubmit={handleSendQuestion}>
                    <textarea
                        placeholder="O que você quer perguntar?"
                        onChange={event => setNewQuestion(event.target.value)} 
                        value={newQuestion}
                    />
                    <div className="form-footer">
                        { user  }
                        <Button type="submit" disabled={!user}>Enviar pergunta</Button>
                    </div>
                </form>
            </main>
        </div>
    );
}