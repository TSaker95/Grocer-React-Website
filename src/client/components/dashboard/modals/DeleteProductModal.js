import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

Modal.setAppElement("#root");

// New style definitions required for react-modal
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

const DeleteProductModal = props => {
  return (
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      style={styles}
    >
      <div className="delete-modal modal">
        <div className="modal-content">
          <div className="modal-title">
            <h4>Delete product </h4>
            <p onClick={props.closeModal}>X</p>
          </div>
          <p>
            Are you sure you want to delete {props.item.name} from the product
            list? This can not be reversed.
          </p>
        </div>
        <div className="modal-footer">
          <p onClick={props.closeModal} className="cancel-modal-action">
            Cancel delete
          </p>
          <button
            className="delete-product btn btn-danger"
            onClick={() => props.deleteProduct(props.item._id)}
          >
            Delete product
          </button>
        </div>
      </div>
    </Modal>
  );
};

DeleteProductModal.propTypes = {
  item: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default DeleteProductModal;
