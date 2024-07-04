import { Button, ButtonGroup } from "react-bootstrap";

export default function Choices({correctAnswer, incorrectAnswers, resHandler}) {
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    let choices = []
    choices.push({
        text: correctAnswer,
        isCorrect: true,
    });
    incorrectAnswers.forEach(element => {
        choices.push({
            text: element,
            isCorrect: false,
        });
    });
    function clickHandler(ele){
        // console.log(ele.isCorrect);
        resHandler(ele.isCorrect)
    }
    
    shuffleArray(choices);
    return <>
    <ButtonGroup vertical style={{width: '100%'}}>
        {
            choices.map(function(ele){
                return <Button onClick={()=>{clickHandler(ele)}} variant="secondary" style={{width: '100%',height: '50px', borderBottom: 'solid'}}>{ele.text}</Button>
            })
        }
    </ButtonGroup>
    </>
};
