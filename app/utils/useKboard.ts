import { useEffect, useState } from 'react';
import useToggle from './useToggle';

type NodeOptionsType = {
  prev: number;
  current: number;
  next: number;
};

function UseKeyBoardNavigation(
  keyBoardActiveState: null | boolean = null,
  domRef: React.MutableRefObject<HTMLElement | null>,
  _cb?: Function,
) {
  // debugger;

  const { toggle: keyboardActive, setToggleStatus: setKeyboardActive } =
    useToggle(keyBoardActiveState ? keyBoardActiveState : false);

  const [nodeList, setNodeList] = useState<NodeListOf<Element> | null>(null);
  const [nodeSelector, setNodeSelector] = useState<NodeOptionsType | null>(
    null,
  );

  // sets the initial state
  useEffect(() => {
    console.log('setting the initial State');

    if (domRef.current) {
      console.log('HERE', domRef.current);

      if (nodeList === null) {
        setNodeList(domRef.current.querySelectorAll('a, button'));
      }

      if (nodeList === null || nodeList.length === 0) return;

      setNodeSelector({
        prev: nodeList.length - 1,
        current: 0,
        next: 1,
      });
    }
  }, [domRef, nodeList]);

  useEffect(() => {
    console.log('running handleKeyPress useEffect', { nodeSelector });

    function handleKeyPress(event: globalThis.KeyboardEvent) {
      if (keyboardActive) {
        if (nodeList === null || nodeList.length === 0) return;
        if (nodeSelector === null) return;
        const maxLength = nodeList.length - 1;
        const newPrevId =
          nodeSelector?.prev === 0 ? maxLength : nodeSelector?.prev - 1;
        const newNextId =
          nodeSelector?.next === maxLength ? 0 : nodeSelector?.next + 1;

        const { code } = event;

        switch (true) {
          case code === 'Enter': {
            console.log('ENTER PRESSED');
            setKeyboardActive(false);
            if (_cb) {
              _cb();
            }
            break;
          }
          case code === 'Escape': {
            console.log('Escape PRESSED');
            setKeyboardActive(false);
            if (_cb) {
              _cb();
            }
            break;
          }
          case code === 'Tab':
          case code === 'ArrowDown':
          case code === 'ArrowRight': {
            console.log('moving down', { code });

            setNodeSelector({
              prev: nodeSelector.current,
              current: nodeSelector.next,
              next: newNextId,
            });
            break;
          }

          case event.shiftKey && code === 'Tab':
          case code === 'ArrowUp':
          case code === 'ArrowLeft': {
            console.log('moving up', { code });

            setNodeSelector({
              prev: newPrevId,
              current: nodeSelector.prev,
              next: nodeSelector.current,
            });
            break;
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyPress, true);

    return () => {
      document.removeEventListener('keydown', handleKeyPress, true);
    };
  }, [keyboardActive, setKeyboardActive, nodeList, _cb, nodeSelector]);

  // Change focus when the list state changes
  useEffect(() => {
    console.log('inside the focus useState');

    if (nodeList !== null && nodeSelector !== null && keyboardActive) {
      (nodeList[nodeSelector.current] as HTMLElement).focus();
      console.log('inside the focus useState IF IF IF IF IF');
    }
  }, [nodeSelector, keyboardActive, nodeList]);

  return { keyboardActive, setKeyboardActive };
}

// export default UseKeyBoardNavigation;
export default UseKeyBoardNavigation;
