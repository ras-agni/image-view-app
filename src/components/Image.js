import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Image({ urls, alt, handleClick }) {
  return (
    <LazyLoadImage
      effect="blur"
      src={urls.thumb}
      alt={alt}
      className="image_list"
      onClick={() => handleClick(urls.regular)}
    />
  );
}

export default Image;
