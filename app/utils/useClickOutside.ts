import { useRef, useEffect } from 'react';

function UseClickOutside(_cb: Function, ...truthyChecks: Boolean[]) {
  const domRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!truthyChecks.every((check) => check === true)) {
      return;
    }

    function outsideClickHandler(event: MouseEvent) {
      const target = event.target as HTMLElement;

      if (!domRef.current?.contains(target)) {
        _cb();
        return;
      }
    }

    document.addEventListener('mousedown', outsideClickHandler, true);

    return () => {
      document.removeEventListener('mousedown', outsideClickHandler, true);
    };
  }, [_cb, truthyChecks]);

  return domRef;
}

export default UseClickOutside;
