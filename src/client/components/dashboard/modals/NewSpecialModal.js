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

export default function NewspecialModal(props) {
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
      {/* <div className="new-special-modal modal">
        <form className="new-special-form" onSubmit={addSpecial}>
          <div className="modal-content">
            <div className="modal-title">
              <h4>Add special</h4>
              <p onClick={props.closeModal}>X</p>
            </div>

            <label>
              Product
              <select name="product" required ref={productRef}>
                {props.products.map(product => (
                  <option value={product._id} key={product._id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="start-date">
              Start date
              <input name="start-date" ref={startDateRef} type="date" />
            </label>
            <label htmlFor="end-date">
              End date
              <input name="end-date" ref={endDateRef} type="date" />
            </label>
          </div>
          <div className="modal-footer">
            <p onClick={props.closeModal} className="cancel-modal-action">
              Cancel
            </p>
            <button className="btn btn-primary" type="submit">
              Add special
            </button>
          </div>
        </form>
      </div> */}

      {/* <div className="new-special-modal">
        <form className="new-special-form" onSubmit={addSpecial}>
          <div className="new-special-content">
            <div className="new-special-title">
              <h4>Add special</h4>
              <p onClick={props.closeModal}>X</p>
            </div>

            <label>Product</label>
            <select name="product" required ref={productRef}>
              {props.products.map(product => (
                <option value={product._id} key={product._id}>
                  {product.name}
                </option>
              ))}
            </select>

            <label htmlFor="start-date">Start date</label>
            <input name="start-date" ref={startDateRef} type="date" />

            <label htmlFor="end-date">End date</label>
            <input name="end-date" ref={endDateRef} type="date" />
          </div>
          <div className="new-special-footer">
            <p onClick={props.closeModal} className="cancel-modal-action">
              Cancel
            </p>
            <button className="btn btn-primary" type="submit">
              Add special
            </button>
          </div>
        </form>
      </div> */}

      <div className="new-special-modal">
        <div className="new-special-title">
          <h4>Add special</h4>
          <p onClick={props.closeModal}>X</p>
        </div>
        <form onSubmit={addSpecial}>
          <ul className="new-special-form">
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
}

{
  /* <form>
<ul class="form-style-1">
    <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
    <li>
        <label>Email <span class="required">*</span></label>
        <input type="email" name="field3" class="field-long" />
    </li>
    <li>
        <label>Subject</label>
        <select name="field4" class="field-select">
        <option value="Advertise">Advertise</option>
        <option value="Partnership">Partnership</option>
        <option value="General Question">General</option>
        </select>
    </li>
    <li>
        <label>Your Message <span class="required">*</span></label>
        <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
    </li>
    <li>
        <input type="submit" value="Submit" />
    </li>
</ul>
</form> */
}
