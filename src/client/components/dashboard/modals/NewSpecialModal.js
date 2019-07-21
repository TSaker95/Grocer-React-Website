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
    height: "390px",
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

const NewSpecialModal = props => {
  const productRef = React.createRef();
  const startDateRef = React.createRef();
  const endDateRef = React.createRef();

  const addSpecial = e => {
    // Stop the form from submitting
    e.preventDefault();

    // Construct the special
    const special = {
      productId: productRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value
    };

    props.addSpecial(special);
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
        <div className="new-item-title">
          <h4>Add special</h4>
          <p onClick={props.closeModal}>X</p>
        </div>
        <form onSubmit={addSpecial}>
          <ul className="new-item-form">
            <li>
              <label htmlFor="">Product</label>{" "}
              <select name="product" required ref={productRef}>
                {props.products.map(product => (
                  <option value={product._id} key={product._id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </li>
            <li>
              <label htmlFor="start-date">Start date</label>
              <input name="start-date" ref={startDateRef} type="date" />
            </li>
            <li>
              <label htmlFor="end-date">End date</label>
              <input name="end-date" ref={endDateRef} type="date" />
            </li>
            <li>
              <p onClick={props.closeModal} className="cancel-modal-action">
                Cancel
              </p>
              <button className="btn btn-primary" type="submit">
                Add special
              </button>
            </li>
          </ul>
        </form>
      </div>
    </Modal>
  );
};

NewSpecialModal.propTypes = {
  products: PropTypes.array.isRequired,
  addSpecial: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default NewSpecialModal;
