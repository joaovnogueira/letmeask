

import { useState } from "react";

export function useRoom(){
    const [questions, setQuestions] = useState<QuestionType[]>([])
    const [title, setTitle] = useState('');
}