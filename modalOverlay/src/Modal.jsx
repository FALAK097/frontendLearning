/* eslint-disable react/prop-types */
const Modal = ({ handleCloseModal, handleAcceptOffer }) => {
  const handleOutsideClick = (e) => {
    console.log(e.target.className);
    if (e.target.className === 'modal') {
      handleCloseModal();
    }
  };

  return (
    <div className="modal" onClick={handleOutsideClick}>
      <div className="modal-overlay">
        <button className="close-btn" onClick={handleCloseModal}>
          X
        </button>
        <div className="modal-content">
          Click the below button to accept the offer!!
        </div>
        <button className="accept-btn" onClick={handleAcceptOffer}>
          Accept Offer
        </button>
      </div>
    </div>
  );
};

export default Modal;
