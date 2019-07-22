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
    height: "400px",
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
      style={styles}
    >
      <div className="new-item-modal">
        <div className="new-item-title">
          <h4>Update special</h4>
          <p onClick={props.closeModal}>X</p>
        </div>
        <form onSubmit={updateSpecial}>
          <ul className="new-item-form">
            <li>
              <label htmlFor="price">Sale price</label>
              <input
                name="price"
                ref={priceRef}
                type="number"
                step="0.01"
                placeholder="Sale price"
              />
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
                Update special
              </button>
            </li>
          </ul>
        </form>
      </div>
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
