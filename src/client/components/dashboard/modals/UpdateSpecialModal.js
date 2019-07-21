import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

Modal.setAppElement("#root");

// New style definitions required for reaat modal
Modal.defaultStyles = {
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

const UpdateSpecialModal = props => {
  const priceRef = React.createRef();
  const startDateRef = React.createRef();
  const endDateRef = React.createRef();

  const updateSpecial = e => {
    // Stop the form from refreshing page
    e.preventDefault();

    // Get the special in its current state
    const prevSpecial = props.item;

    const special = {
      productId: prevSpecial.productId,
      price: priceRef.current.value || prevSpecial.salePrice,
      startDate: startDateRef.current.value || prevSpecial.startDate,
      endDate: endDateRef.current.value || prevSpecial.endDate
    };

    props.updateSpecial(props.item, special);
    props.closeModal();
  };

  return (
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
    >
      <div className="edit-special-modal modal">
        <h4>{props.item.name}</h4>
        <form className="special-edit form" onSubmit={updateSpecial}>
          <input
            name="price"
            ref={priceRef}
            type="text"
            placeholder="Sale price"
          />
          <input name="start-date" ref={startDateRef} type="date" />
          <input name="end-date" ref={endDateRef} type="date" />
          <button type="submit">Update special</button>
        </form>

        <button onClick={props.closeModal}>Close {props.item.name}</button>
      </div>

      {/* <div className="new-item-modal">
        <div className="new-item-title">
          <h4>Update special</h4>
          <p onClick={props.closeModal}>X</p>
        </div>
        <form onSubmit={updateSpecial}>
          <ul className="new-item-form">
            <li>
              <label htmlFor="">Price</label>
              <select name="price" required ref={priceRef}>
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
      </div> */}
    </Modal>
  );
};

UpdateSpecialModal.propTypes = {
  item: PropTypes.object.isRequired,
  updateSpecial: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default UpdateSpecialModal;
