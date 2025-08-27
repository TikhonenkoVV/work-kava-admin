import { useEffect } from 'react';

export const useClickOutsideModal = (ref, callback) => {
  const count = ref.length;

  const handleClick = e => {
    if (count === 1)
      if (ref[0].current && !ref[0].current.contains(e.target)) {
        callback();
      }
    if (count === 2)
      if (
        ref[0].current &&
        !ref[0].current.contains(e.target) &&
        !ref[1].current.contains(e.target)
      ) {
        callback();
      }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  });
};
