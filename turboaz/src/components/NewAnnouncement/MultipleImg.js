import React, { useState } from "react";
import FrontCar from "../../assets/img/newannouncement/uploadimg/frontofcar.png";
import BackCar from "../../assets/img/newannouncement/uploadimg/backofcar.png";
import CloseIcon from "../../assets/img/newannouncement/uploadimg/CloseIcon.svg";
import styled from 'styled-components';
import '../../assets/css/newannouncement/multipleimg.scss'





export const ImagePreview = styled.div`
    position: relative;
    /* cursor: pointer; */

    #uploaded-image{
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 20px;
    }

    .close-icon{
        background: #000;
        border-radius: 5px;
        opacity: .8;

        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;

        :hover {
            opacity: 1;
        }   
    }
`


function App() {

  const [image, setImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [typeFile, setTypeFile] = useState("");


  function handleImageChange(e) {
   
    if (e.target.files && e.target.files[0]) {
      setTypeFile(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setImage(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  return (

    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-12">

        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 box-upload">
          <div className="image-upload">
            {!isUploaded ? (
              <>
                <label htmlFor="upload-input">
                  <img
                    src={FrontCar}
                    draggable={"false"}
                    alt="placeholder"
                    style={{ width: '100%'}}
                  />
                  <p style={{ color: "#444" }} className="m-0">Click to upload image</p>
                </label>

                <input
                  id="upload-input"
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleImageChange}
                />
              </>
            ) : (
              <ImagePreview>
                <img
                  className="close-icon"
                  src={CloseIcon}
                  alt="CloseIcon"
                  onClick={() => {
                    setIsUploaded(false);
                    setImage(null);
                  }}
                />
                {typeFile.includes("video") ? (
                  <video
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    controls
                    autoPlay
                    alt="uploaded-img"
                  />
                ) : (
                  <img
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    alt="uploaded-img"
                  />
                )}
              </ImagePreview>
            )}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 box-upload">
        <div className="image-upload">
            {!isUploaded ? (
              <>
                <label htmlFor="upload-input">
                  <img
                    src={BackCar}
                    draggable={"false"}
                    alt="placeholder"
                    style={{ width: '100%'}}
                  />
                  <p style={{ color: "#444" }} className="m-0">Click to upload image</p>
                </label>

                <input
                  id="upload-input"
                  type="file"
                  accept=".jpg,.jpeg,.gif,.png,.mov,.mp4"
                  onChange={handleImageChange}
                />
              </>
            ) : (
              <ImagePreview>
                <img
                  className="close-icon"
                  src={CloseIcon}
                  alt="CloseIcon"
                  onClick={() => {
                    setIsUploaded(false);
                    setImage(null);
                  }}
                />
                {typeFile.includes("video") ? (
                  <video
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    controls
                    autoPlay
                    alt="uploaded-img"
                  />
                ) : (
                  <img
                    id="uploaded-image"
                    src={image}
                    draggable={false}
                    alt="uploaded-img"
                  />
                )}
              </ImagePreview>
            )}
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12 box-upload">
        </div>
      </div>
    </div>



  );
}

export default App;