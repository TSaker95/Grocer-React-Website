import React, { useState } from "react";
import Modal from "react-modal";

ReactModal.setAppElement("#root");

export default function EditProductModal(props) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <Modal
      isOpen={props.isOpen}
      shouldCloseOnEsc={true}
      shouldFocusAfterRender={true}
      shouldReturnFocusAfterClose={true}
    >
      <button onClick={props.closeModal}>Close {props.item.name}</button>
    </Modal>
  );
}
