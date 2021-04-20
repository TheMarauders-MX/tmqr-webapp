import React, { useEffect, useRef } from 'react';
import { createWidget } from "@typeform/embed";
import "@typeform/embed/build/css/widget.css";
import './styles.scss';

const CardTypeForm = () => {

  const container = useRef();

  useEffect(() => {
    createWidget("sXJyOMWH", {
      // @ts-ignore
      container: container.current,
    });
  }, []);

  return (
    <div
      className="container"
      // @ts-ignore
      ref={container}
    />
  );
};

export default CardTypeForm;
