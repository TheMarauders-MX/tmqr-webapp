import React, { useRef, useState, useEffect, useCallback } from "react";
import apiClient from "@services/apiClient";
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import Navbar from "@components/Shared/Navbar/Navbar";
import { Button } from "@material-ui/core";
import CustomModal from "@components/Shared/CustomModal/CustomModal";

const ScanScreen = () => {
  const webcamRef = useRef<Webcam>(null);
  //const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [model, setModel] = useState<any>(null);
  const [disableBtn, setDisableBtn] = useState<any>(true);
  const [predictionResult, setPredictionResult] = useState<any>(null);
  const [accuracyResult, setAccuracyResult] = useState<any>(null);

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
      if (predictions) {
        setPredictionResult(predictions[0].class);
        let resultAcc = predictions[0].score * 100;
        setAccuracyResult(resultAcc.toFixed(2));
        handleOpen();
      }
    }
  }, [webcamRef, model]);

  const viewProduct = () => {};

  const getAllProducts = useCallback(async () => {
    // Caso 1: Obtener todos los productos.
    // Recorrer este arreglo hasta encontrar uno que haga match con el nombre.
    // Mandar un redirect a la ruta de ese objeto
    // Caso 2: Llamar a un endpoint donde me de la info del producto que le pase.
    // apiClient
    //   .get("/api/product")
    //   .then((response) => {
    //     console.log(response.data);
    //     // setAreasResponse(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
      <CustomModal
        handleClose={handleClose}
        handleButton={viewProduct}
        open={open}
        header={"¡Éxito!"}
        buttonCopie={"Ver detalle del producto"}
        paragraph={predictionResult ? `Hemos reconocido un objeto: ${predictionResult}` : ""}
        paragraph2={accuracyResult ? `Precisión del resultado: ${accuracyResult}%` : ""}
      />
    </div>
  );
};

export default ScanScreen;
