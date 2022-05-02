import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, Button } from 'react-bootstrap';

const ImageCard = ({ image, deleteImage }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img 
      variant="top" 
      src={image.urls.small}
      />
      <Card.Body>
        <Card.Title>{image.title.toUpperCase()}</Card.Title>
        <Card.Text>
          {image.description || image.alt_description}
        </Card.Text>
        <Button variant="primary" onClick={() => deleteImage(image.id)}>Delete</Button>
      </Card.Body>
    </Card>
  );
};

ImageCard.propTypes = {
  image: PropTypes.object,
  deleteImage: PropTypes.func
}

export default ImageCard;
