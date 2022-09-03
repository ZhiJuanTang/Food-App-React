import classes from "./Modal.module.css";
import React from "react";
import ReactDom from "react-dom";

//PORTAL example

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
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
      {ReactDom.createPortal(
        <Backdrop onClose={props.onCloseCart} />,
        portalElement
      )}
      {/* <Backdrop> is children to <Modal> , so here onClose is passed from here <Modal> to <Backdrop> as a prop to 'onClick' . The Children parent relationship is more clear when <Backdrop> is written in a seperate componant */}
      {ReactDom.createPortal(
        <ModelOverlay>{props.children} </ModelOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
