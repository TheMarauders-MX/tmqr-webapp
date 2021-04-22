import React, { useRef, useState, useEffect } from "react";

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import Navbar from "@components/Shared/Navbar/Navbar";
import { Button } from "@material-ui/core";

const ScanScreen = () => {
  const webcamRef = useRef<Webcam>(null);
  //const [imgSrc, setImgSrc] = useState<string | null>(null);

  const [videoWidth, setVideoWidth] = useState(960);
  const [videoHeight, setVideoHeight] = useState(640);
  const [model, setModel] = useState<any>(null);

  const videoConstraints = {
    height: 736,
    width: 414,
    maxWidth: "50vh",
    facingMode: "environment",
  };

  async function loadModel() {
    try {
      const model = await cocoSsd.load();
      //console.log(model);
      setModel(model);
      console.log("setloadedModel");
    } catch (err) {
      console.log(err);
      console.log("failed load model");
    }
  }

  useEffect(() => {
    tf.ready().then(() => {
      loadModel();
    });
  }, []);

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
  }, [webcamRef]);

  return (
    <div>
      <Navbar />

      {/* <div style={{ position: "absolute", top: "400px" }}>
        <canvas id="myCanvas" width={videoWidth} height={videoHeight} style={{ backgroundColor: "transparent" }} />
      </div> */}
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
        <Button variant={"contained"} onClick={capture}>
          Detectar un objeto
        </Button>
      </div>
    </div>
  );
};

export default ScanScreen;
