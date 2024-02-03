import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Ratings from "./Ratings";
import products from "./products";

import React from 'react';

function ProductScreen() {
    const { id } = useParams();
    const product = products.find((p) => p._id === id);

    return (
        <div>
            <Link to="/" className="btn btn-light my-3">
                Go Back
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>{product.description}</ListGroup.Item>
                        <ListGroup.Item>
                            <Ratings
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                                color={"#f8e825"}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Availability</Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In stock" : "Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Button className="btn-block" disabled={product.countInStock === 0} type="button">
                                        <FaShoppingCart className="mr-2" /> Add to Cart
                                    </Button>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ProductScreen;
