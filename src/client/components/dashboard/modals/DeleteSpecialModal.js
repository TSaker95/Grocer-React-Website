import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    border: "1px solid #ccc",
    borderTop: "6px solid #40A4F4",
    width: "500px",
    height: "200px",
    margin: "auto",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "0"
  }
};

export default function EditSpecialModal(props) {
  return (
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      style={styles}
    >
      <div className="delete-special-modal modal">
        <div className="modal-content">
          <div className="modal-title">
            <h4>Delete special </h4>
            <p onClick={props.closeModal}>X</p>
          </div>
          <p>
            Are you sure you want to delete {props.item.name} from the special
            list? This can not be reversed.
          </p>
        </div>
        <div className="modal-footer">
          <p onClick={props.closeModal} className="cancel-modal-action">
            Cancel delete
          </p>
          <button
            className="delete-special btn btn-danger"
            onClick={() => {
              setTimeout(() => {
                props.closeModal;
                props.deleteSpecial(props.item._id);
              }, 1000);
            }}
          >
            Delete special
          </button>
        </div>
      </div>
    </Modal>
  );
}
