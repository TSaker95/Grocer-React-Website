import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import editIcon from "../../public/images/edit.svg";
import deleteIcon from "../../public/images/delete.svg";
import DeleteSpecialModal from "./modals/DeleteSpecialModal";
import UpdateSpecialModal from "./modals/UpdateSpecialModal";

const SpecialsItem = props => {
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

  const parseDate = date => date.split("T")[0];

  return (
    <div className="specials-item list-row">
      <p>{props.product.name}</p>
      <p>${props.product.price}</p>
      <p>Sale price</p>
      <p>{parseDate(props.item.startDate)}</p>
      <p>{parseDate(props.item.endDate)}</p>
      <div className="icons">
        <img src={editIcon} onClick={handleOpenEditModal} />
        <img src={deleteIcon} onClick={handleOpenDeleteModal} />
      </div>

      <UpdateSpecialModal
        isOpen={isEditModalOpen}
        closeModal={handleCloseEditModal}
        item={props.item}
        updateSpecial={props.updateSpecial}
      />

      <DeleteSpecialModal
        isOpen={isDeleteModalOpen}
        closeModal={handleCloseDeleteModal}
        item={props.item}
        deleteSpecial={props.deleteSpecial}
      />
    </div>
  );
};

SpecialsItem.propTypes = {
  item: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  updateSpecial: PropTypes.func.isRequired,
  deleteSpecial: PropTypes.func.isRequired
};

export default SpecialsItem;
