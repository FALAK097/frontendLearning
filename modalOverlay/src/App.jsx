import { useState } from 'react';
import './App.css';
import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAcceptOffer = () => {
    setIsOfferAccepted(true);
    setShowModal(false);
  };

  return (
    <div>
      <h1>Modal Overlay</h1>
      <div className="show-offer">
        {!isOfferAccepted ? (
          <button className="offer-btn" onClick={handleOpenModal}>
            Show Offer
          </button>
        ) : (
          <p className="offer-accept">Offer Accepted!!</p>
        )}
      </div>

      {showModal && (
        <Modal
          handleCloseModal={handleCloseModal}
          handleAcceptOffer={handleAcceptOffer}
        />
      )}
    </div>
  );
};

export default App;
