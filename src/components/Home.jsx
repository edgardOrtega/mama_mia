import Header from "./Header"
import Cards from "./CardPizza";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CardPizza from "./CardPizza";

const Home =() =>{
    return(
        <>
        <Header titulo="Pizzería Mamma Mia!" descripcion="Tenemos las mejores pizzas que podrás encontrar"/>
        <Container >
            <Row className="mt-4">
                <Col>
                    <CardPizza name="Napolitana"  price="5950" ingredients='mozzarella , tomates, jamón, orégano' img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"/>
                </Col>
                <Col>
                    <CardPizza name="Española"  price="6950" ingredients='mozzarella, gorgonzola, parmesano, provolone' img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"/>
                </Col>
                <Col>
                    <CardPizza name="Pepperoni" price="6950" ingredients='mozzarella,pepperoni,orégano' img="https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg"/>
                </Col>
            </Row>
        </Container>

        </>
    )
}

export default Home;