import { Badge } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

function EndScreen({questions}) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Question</th>
          <th>Correct Answer</th>
          
        </tr>
      </thead>
      <tbody>
        {
            questions.map((ele, index)=> (
            <tr>
                <td>{index}</td>
                <td>{ele.question.text}</td>
                <td>{ele.correctAnswer}</td>
                
            </tr>))
        }
      </tbody>
    </Table>
  );
}

export default EndScreen;