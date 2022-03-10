type QuestionsProps = {
    content: string;
    author: {
        name: string;
        avatar: string;
    }

}



export function Question(props: QuestionsProps) {
    return(
        <div className="question">
            <p>

            </p>
        </div>
    );
}