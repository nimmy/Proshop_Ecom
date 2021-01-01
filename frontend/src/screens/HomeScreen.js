import React, {useState, useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
//import Products from './../products';
import Product from './../components/Product';
import axios from 'axios';

const HomeScreen = () => {

    const [Products, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products');
            setProduct(data);
        }
        fetchProducts();
    }, [])

    return (
        <div>
            <h4 className="pt-3">Latest Products</h4>
            <Row>
                {Products.map((product) => {
                    return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                })}
            </Row>
        </div>
    )
}

export default HomeScreen;

