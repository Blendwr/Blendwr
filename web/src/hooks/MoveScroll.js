const useMoveScroll = () => {
  /**
   * TODO: const [scrolling, setScrolling] = useState(false)
   */

  const moveTo = (ref) => {
    ref.current.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    })
  }

  return { moveTo }
}

export default useMoveScroll
