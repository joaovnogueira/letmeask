type QuestionProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }

}



export function Question({

} : ) {
    return(
        <div className="question">
            <p>
                (props.content) 
            </p>
        </div>
    );
}