import {Container} from 'react-bootstrap';

export default function Question({question}) {
 return (
    <h2>{unescape(question)}</h2>
 )
   
};
