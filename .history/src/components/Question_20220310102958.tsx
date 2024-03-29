type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }

}



export function Question({
    content,
    author,
} : QuestionProps) {
    return(
        <div className="question">
            <p>
                (props.content) 
            </p>
        </div>
    );
}