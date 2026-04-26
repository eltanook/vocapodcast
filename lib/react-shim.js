import * as React from 'react';

const useEffectEvent = React.useEffectEvent || ((fn) => {
  const ref = React.useRef(fn);
  React.useInsertionEffect(() => {
    ref.current = fn;
  });
  return React.useCallback((...args) => {
    const f = ref.current;
    return f(...args);
  }, []);
});

export * from 'react';
export { useEffectEvent };
export default React;
