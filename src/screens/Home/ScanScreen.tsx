import React, { useRef, useState, useEffect } from "react";

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import Navbar from "@components/Shared/Navbar/Navbar";
import { Button } from "@material-ui/core";

const ScanScreen = () => {
  const webcamRef = useRef<Webcam>(null);
  //const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [model, setModel] = useState<any>(null);
  const [disableBtn, setDisableBtn] = useState<any>(true);

  const videoConstraints = {
    height: 400,
    width: 414,
    maxWidth: "50vh",
    facingMode: "environment",
  };

  const loadModel = React.useCallback(async () => {
    try {
      const model = await cocoSsd.load();
      setModel(model);
      setDisableBtn(false);
    } catch (err) {
      console.log(err);
      console.log("failed load model");
    }
  }, []);

  useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    });
  }, [loadModel]);

  const capture = React.useCallback(async () => {
    if (webcamRef.current) {
      const predictions = await model.detect(document.getElementById("img"));
      //let imgSrc: string = (document.getElementById("img") as HTMLInputElement).value;
      //const imgSrc = webcamRef.current.getScreenshot();
      //console.log(imgSrc);
      //console.log(model);
      //const predictions = await model.detect(imgSrc);
      console.log(predictions);
    }
  }, [webcamRef, model]);

  return (
    <div>
      <Navbar />
      <div className="center">
        <Webcam
          audio={false}
          id="img"
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          height={400}
          width={340}
          screenshotQuality={1}
          videoConstraints={videoConstraints}
        />
      </div>
      <div className="center">
        <br />
        <Button variant={"contained"} onClick={capture} disabled={disableBtn}>
          Detectar un objeto
        </Button>
      </div>
    </div>
  );
};

export default ScanScreen;
