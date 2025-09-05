import { useState, useEffect } from 'react';

export const useModal = ref => {
  const [isModalOpen, setIsModalOpen] = useState({
    selectFilter: false,
    langMenu: false,
    askModal: false,
    mobileNav: false
  });

  useEffect(() => {
    const values = Object.values(isModalOpen);
    const isOpen = values.some(val => val === true);
    if (isOpen === true) {
      document.body.style.overflow = 'hidden';
    }
    if (isOpen === false) {
      document.body.style.overflow = 'visible';
    }
  }, [isModalOpen, ref]);

  const openModal = id => {
    setIsModalOpen({ ...isModalOpen, [id]: true });
  };
  const closeModal = id => {
    setIsModalOpen({ ...isModalOpen, [id]: false });
  };
  const toggleModal = id => {
    setIsModalOpen({ ...isModalOpen, [id]: !isModalOpen[id] });
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal
  };
};
