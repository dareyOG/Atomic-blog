import { useEffect, useState } from 'react';

function useTheme(class_name) {
  const [isFakeDark, setIsFakeDark] = useState(false);
  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle(class_name);
    },
    [isFakeDark]
  );
  return [isFakeDark, setIsFakeDark];
}

export default useTheme;
