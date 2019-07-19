import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

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

export default function UpdateSpecialtModal(props) {
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
    </Modal>
  );
}
