import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

function Banner({ products }, ...props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const productList = products.slice(0, 4);
  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === productList.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? productList.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = productList.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.resim} alt={item.ad} />
        <CarouselCaption
          captionText={`${item.fiyat}$`}
          captionHeader={item.ad}
        />
      </CarouselItem>
    );
  });

  return (
    <Container style={{ display: "flex", marginTop: "2rem" }}>
      <Carousel
        style={{ width: "800px" }}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators
          style={{ color: "black" }}
          items={productList}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <Container>
        <Row className="align-content-center">
          {productList.map((i) => (
            <Col key={i.id} md={6} className="mb-4 mt-4">
              <Card>
                <CardImg top width="100%" src={i.resim} alt={i.ad} />
                <CardBody>
                  <CardTitle style={{ wordWrap: "break-word" }}>
                    {i.ad}
                  </CardTitle>
                  <CardSubtitle>Fiyat: ${i.fiyat}</CardSubtitle>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Banner;
