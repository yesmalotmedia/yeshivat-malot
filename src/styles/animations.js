const animations = {
  fadeUp: {
    transform: `isVisible ? "translateY(0)" : "translateY(20px)"`,
    transition: `opacity 1.5s ease-out, transform 1.5s ease-out`,
  },
};
export default animations;
