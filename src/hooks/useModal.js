import { useState, useEffect } from 'react';

// export const useModal = (initialState = false) => {
//   const [isModalOpen, setIsModalOpen] = useState(initialState);
//   useEffect(() => {
//     if (isModalOpen) {
//       document.body.style.overflow = 'hidden';
//     }
//   }, [isModalOpen]);
//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => setIsModalOpen(false);
//   return { isModalOpen, openModal, closeModal };
// };

// export const useAskDeleteModal = (initialState = false) => {
//   const [isAskDeleteModalOpen, setIsModalOpen] = useState(initialState);
//   useEffect(() => {
//     if (isAskDeleteModalOpen) {
//       document.body.style.overflow = 'hidden';
//     }
//   }, [isAskDeleteModalOpen]);
//   const openAskDeleteModal = () => setIsModalOpen(true);
//   const closeAskDeleteModal = () => setIsModalOpen(false);
//   return { isAskDeleteModalOpen, openAskDeleteModal, closeAskDeleteModal };
// };

export const useModal = ref => {
  const [isModalOpen, setIsModalOpen] = useState({ [ref]: false });

  useEffect(() => {
    if (isModalOpen[ref]) {
      document.body.style.overflow = 'hidden';
    }
  }, [isModalOpen, ref]);
  const openModal = () => setIsModalOpen({ ...isModalOpen, [ref]: true });
  const closeModal = () => setIsModalOpen({ ...isModalOpen, [ref]: false });
  const toggleModal = () =>
    setIsModalOpen({ ...isModalOpen, [ref]: !isModalOpen[ref] });
  return {
    isModalOpen: isModalOpen[ref],
    openModal,
    closeModal,
    toggleModal
  };
};
