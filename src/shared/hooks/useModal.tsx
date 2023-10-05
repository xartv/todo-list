import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

export const useModal = ({ onClose, isOpen, animationDelay }: UseModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef() as React.MutableRefObject<ReturnType<typeof setTimeout>>;

  const close = useCallback(() => {
    if (!onClose) return;

    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, animationDelay);
  }, [onClose, animationDelay]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
      }
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      setIsMounted(false);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);

  return {
    isClosing,
    isMounted,
    close,
  };
};
