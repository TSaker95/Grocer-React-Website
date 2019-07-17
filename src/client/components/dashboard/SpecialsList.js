import React, { useState } from "react";
import SpecialsItem from "./SpecialsItem";
import NewSpecialModal from "./modals/NewSpecialModal";

export default function SpecialsList(props) {
  const [isNewspecialModalOpen, setIsNewspecialModalOpen] = useState(false);
  const handleOpenNewSpecialModal = () => {
    setIsNewspecialModalOpen(true);
  };

  const handleCloseNewspecialModal = () => {
    setIsNewspecialModalOpen(false);
  };

  return (
    <div className="specials-container">
      <div className="section-header specials-header">
        <h3>Specials ({props.specials.length})</h3>
        <button
          className="add-special-button section-add-button"
          onClick={handleOpenNewSpecialModal}
        >
          Add special +
        </button>
      </div>
      <div className="specials-list items-list">
        <div className="headings specials-headings">
          <h5>Name</h5>
          <h5>Normal price</h5>
          <h5>Sale price</h5>
          <h5>Start date</h5>
          <h5>End date</h5>
          <h5>Actions</h5>
        </div>
        <div className="list-content specials-list-content">
          {props.specials.length ? (
            props.specials.map(special => (
              <SpecialsItem
                item={special}
                product={props.products.find(product => {
                  return product._id === special.productId;
                })}
                key={special._id}
              />
            ))
          ) : (
            <p>nothing</p>
          )}
        </div>
      </div>

      <NewSpecialModal
        isOpen={isNewspecialModalOpen}
        closeModal={handleCloseNewspecialModal}
        addSpecial={props.addSpecial}
        products={props.products}
      />
    </div>
  );
}
