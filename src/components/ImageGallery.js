import { useEffect, useState } from "react";
import Masonry from "react-masonry-component";
import { getImages, getSearchImages } from "../api/api";
import Image from "./Image";
import Modal from "react-modal";

const modalStyle = {
  content: {
    border: "none",
    paddong: "none",
    overflow: "none",
    background: "none",
  },
  overlay: { background: "rgb(31 29 29 / 75%)" },
};
function ImageGallery({ query }) {
  const [photo, setPhoto] = useState([]);
  const [currentImage, setcurrentImage] = useState(null);
  useEffect(() => {
    getImages().then((data) => {
      setPhoto(data);
    });
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }
    getSearchImages(query).then((data) => {
      setPhoto(data);
    });
  }, [query]);

  Modal.setAppElement("#root");
  if (!photo) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      {photo.length === 0 ? <p>No Images Found</p> : null}
      <Masonry className="mx-auto" options={{ isFitWidth: true }}>
        {photo.map((img) => {
          return (
            <li key={img.id} className="p-2">
              <Image
                urls={img.urls}
                alt={img.alt_description}
                onClick={() => {
                  console.log("dscxz");
                }}
                handleClick={setcurrentImage}
                im
              />
            </li>
          );
        })}
      </Masonry>
      <Modal
        style={modalStyle}
        isOpen={!!currentImage}
        onRequestClose={() => setcurrentImage(null)}
      >
        <img
          src={currentImage}
          alt="Preview"
          className="w-100 h-100 image_preview"
        />
      </Modal>
    </div>
  );
}

export default ImageGallery;
