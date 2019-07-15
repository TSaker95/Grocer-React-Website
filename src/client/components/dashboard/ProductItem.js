import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import placeholder from "../../public/images/placeholder.png";
import editIcon from "../../public/images/edit.svg";
import deleteIcon from "../../public/images/delete.svg";
import DeleteProductModal from "./modals/DeleteProductModal";
import EditProductModal from "./modals/EditProductModal";

export default function ProductItem(props) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const handleOpenEditModal = () => {
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="products-item list-row">
      <div className="product-image">
        <img src={placeholder} alt="placeholder" />
      </div>
      <p>{props.item.name}</p>
      <p>${props.item.price}</p>
      <p>23/02/1903</p>
      <div className="icons">
        <img src={editIcon} onClick={handleOpenEditModal} />
        <img src={deleteIcon} onClick={handleOpenDeleteModal} />
      </div>

      <EditProductModal
        isOpen={isEditModalOpen}
        closeModal={handleCloseEditModal}
        item={props.item}
      />

      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        closeModal={handleCloseDeleteModal}
        item={props.item}
      />
    </div>
  );
}
