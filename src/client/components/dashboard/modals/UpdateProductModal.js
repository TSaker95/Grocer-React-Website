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
    width: "350px",
    height: "430px",
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
    padding: "20px"
  }
};

const UpdateProductModal = props => {
  const nameRef = React.createRef();
  const priceRef = React.createRef();
  const descRef = React.createRef();

  const updateProduct = e => {
    // Stop the form from refreshing page
    e.preventDefault();

    // Get the product in its current state
    const prevProduct = props.item;

    const product = {
      name: nameRef.current.value || prevProduct.name,
      price: parseFloat(priceRef.current.value) || prevProduct.price,
      description: descRef.current.value || prevProduct.description
    };

    props.updateProduct(props.item, product);
    props.closeModal();
  };

  return (
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
      style={styles}
    >
      <div className="new-item-modal">
        <div className="new-item-title add-item-title">
          <h4>Update {props.item.name}</h4>
          <p onClick={props.closeModal}>X</p>
        </div>
        <form onSubmit={updateProduct}>
          <ul className="new-item-form">
            <li>
              <label htmlFor="name">Product name</label>
              <input
                name="name"
                ref={nameRef}
                type="text"
                placeholder={props.item.name}
              />
            </li>
            <li>
              <label htmlFor="price">Price</label>
              <input
                name="price"
                ref={priceRef}
                type="text"
                placeholder="Price"
              />
            </li>
            <li>
              <label htmlFor="desc">Description</label>
              <textarea
                name="desc"
                ref={descRef}
                type="text"
                placeholder={props.item.description}
              />
            </li>
            <li>
              <p onClick={props.closeModal} className="cancel-modal-action">
                Cancel
              </p>
              <button className="btn btn-primary" type="submit">
                Update product
              </button>
            </li>
          </ul>
        </form>
      </div>
    </Modal>
  );
};

UpdateProductModal.propTypes = {
  item: PropTypes.object.isRequired,
  updateProduct: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default UpdateProductModal;
