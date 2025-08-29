import { useState } from "react";
import { FaRegImage } from "react-icons/fa";
import camera from "../assets/image.png";
import { BiImageAdd } from "react-icons/bi";
import { FaXmark } from "react-icons/fa6";

function UploadPhotos({ handlePhoto }) {
  const [imageX, setImageX] = useState(Array(20).fill(null));
  const nextEmptyIndex = imageX.findIndex((img) => img === null);
  function handleImageChange(e, index) {
    const file = e.target.files[0]; // only one file
    if (!file) return;

    const newImage = {
      file,
      preview: URL.createObjectURL(file),
    };

    setImageX((prev) => {
      const updated = [...prev];
      if (nextEmptyIndex !== -1) {
        updated[nextEmptyIndex] = newImage;
      }
      handlePhoto(updated);
      return updated;
    });
  }

  // function delImg(e,index){
  //   const updated = imageX.filter((fruit, i) => i !== index);

  // }
  function delImg(e, index) {
    setImageX((prev) => {
      // remove the image at `index`
      const updated = prev.filter((_, i) => i !== index);

      // make sure array length is always 20
      while (updated.length < 20) {
        updated.push(null);
      }

      handlePhoto(updated);
      return updated;
    });
  }

  return (
    <div className="imageBox">
      <h3>Upload up to 20 photos</h3>
      <div className="imageBox-secondchild">
        {imageX.map((img, index) => (
          <div className="img-input">
            <label className="img-input2">
              {img ? (
                <>
                  <FaXmark
                    className="delete-img"
                    onClick={(e) => {
                      delImg(e, index);
                    }}
                  >
                    {" "}
                  </FaXmark>{" "}
                  <img
                    src={img.preview}
                    className="upload-imgY"
                    width="100px"
                    height="100px"
                    style={{ objectFit: "cover" }}
                    alt="preview"
                  />
                </>
              ) : (
                <>
                  <BiImageAdd
                    className="upl-img"
                    size={100}
                    color="gray"
                    style={{
                      cursor: "pointer",
                      color: index === nextEmptyIndex ? "blue" : "grey",
                    }}
                  />
                </>
              )}

              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => handleImageChange(e, index)} // pass index
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadPhotos;
