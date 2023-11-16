// src/components/ProductGrid.js

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Products = ({ products, selectedCat, addFav }) => {
  const productsList = !selectedCat
    ? products
    : products.filter((i) => i.kategori_id === selectedCat);

  return (
    <Container className="mt-4">
      <Row>
        {productsList.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <CardImg top width="100%" src={product.resim} alt={product.ad} />
              <CardBody>
                <CardTitle>{product.ad}</CardTitle>
                <CardSubtitle>Fiyat: ${product.fiyat}</CardSubtitle>
              </CardBody>
              <Button
                style={{
                  backgroundColor: product.favorited && "red",
                }}
                onClick={() => addFav(product)}
              >
                {product.favorited ? "Favorilerden Çıkar" : "Favorilere Ekle"}
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
