import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import placeholder from "../../public/images/placeholder.png";
import editIcon from "../../public/images/edit.svg";
import deleteIcon from "../../public/images/delete.svg";
import DeleteProductModal from "./modals/DeleteProductModal";
import UpdateProductModal from "./modals/UpdateProductModal";

const ProductItem = props => {
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

  const { name, description, price } = props.item;

  return (
    <div className="products-item list-row">
      <p>{name}</p>
      <p>{description.substring(0, 30)}</p>
      <p>${price}</p>
      <p>{props.onSale ? "Yes" : "No"}</p>
      <div className="icons">
        <img src={editIcon} onClick={handleOpenEditModal} />
        <img src={deleteIcon} onClick={handleOpenDeleteModal} />
      </div>
      <UpdateProductModal
        isOpen={isEditModalOpen}
        closeModal={handleCloseEditModal}
        item={props.item}
        updateProduct={props.updateProduct}
      />

      <DeleteProductModal
        isOpen={isDeleteModalOpen}
        closeModal={handleCloseDeleteModal}
        item={props.item}
        deleteProduct={props.deleteProduct}
      />
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  updateProduct: PropTypes.func.isRequired
};

export default ProductItem;
