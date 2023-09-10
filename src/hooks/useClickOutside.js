import { useEffect, useRef } from "react"

// takes in a callback function handleClick and returns a ref
// the calls the callback on clicks that are outside the element assigned to ref
export function useClickOutside(handleClick) {
  const ref = useRef()
  useEffect(() => {
    // create wrapper to click callback, such that
    function callback(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick()
      }
    }
    document.addEventListener("click", callback, true)
    return () => {
      document.addEventListener("click", callback, true)
    }
  }, [ref])
  return ref
}
