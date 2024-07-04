import { Accordion, Table, Badge, Row, Col } from "react-bootstrap";

export default function Score({res}) {
    const variant = [];
    let score = 0;
    res?.forEach(ele => {
        variant.push(ele==0?"secondary": ele==1?"danger":"success");
        score += ele==2?1:0;
    });
    return (
        <>
        <Row>
            <Col><h1>{score} / 10</h1></Col>
        </Row>
        <Row style={{ margin: 'auto', marginBottom: '30px'}}>
            
            {
                variant.map((ele, index)=>(<Col><Badge bg={ele}>{index+1}</Badge></Col>))
            }
            
        </Row>
        </>
    )
};
