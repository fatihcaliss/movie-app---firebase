import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AppContext } from '../context/AppContext';
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    const { movies, showDetails } = useContext(AppContext);
    const IMG_API = "https://image.tmdb.org/t/p/w1280";
    return (
        <Row xs={1} md={2} xl={4} className="g-4 container m-auto">
            {movies.map((e, idx) => (
                <Col key={idx} className="d-flex justify-content-center">
                    <Card className='cardo' onClick={() => showDetails(e.id,e.title,navigate)}>
                        <Card.Img variant="top" src={IMG_API + e.poster_path}/>
                        <Card.Body >
                            <Card.Title>{e.original_title}</Card.Title>

                        </Card.Body>
                        <Card.Text className='hover-detail'>
                            <span className='overview'> Overview</span>
                            {e.overview}
                        </Card.Text>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

export default Home;