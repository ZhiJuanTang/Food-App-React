import classes from "./Modal.module.css";
import React from "react";
import ReactDom from "react-dom";

//PORTAL example

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};
const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children} </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(<Backdrop />, portalElement)}
      {ReactDom.createPortal(
        <ModelOverlay>{props.children} </ModelOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
