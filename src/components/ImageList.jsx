import "./ImageList.css";
import { ImageShow } from "./";

export const ImageList = ({ images }) => {
  const rederedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{rederedImages}</div>;
};
