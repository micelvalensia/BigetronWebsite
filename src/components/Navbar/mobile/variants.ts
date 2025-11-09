import { easeInOut, easeOut, easeIn, circInOut } from "framer-motion";

const backdropVariants = {
  hidden: { 
    opacity: 0,
    scale: 1.1
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeInOut
    }
  },
  exit: {
    opacity: 0,
    scale: 1.1,
    transition: {
      duration: 0.5,
      ease: easeInOut
    }
  }
};

const circleVariants = {
  hidden: { 
    scale: 0,
    opacity: 0
  },
  visible: { 
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easeOut
    }
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeIn
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      ease: easeOut
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: easeIn
    }
  }
};

const closeButtonVariants = {
  hidden: { 
    x: 80,
    opacity: 0
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.1,
      ease: easeOut
    }
  }
};

const navItemVariants = {
  hidden: { 
    y: 80,
    opacity: 0
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: easeOut
    }
  }
};

  const navContainerVariants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

const footerVariants = {
  hidden: { 
    y: 40,
    opacity: 0
  },
  visible: { 
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 0.5,
      ease: circInOut
    }
  }
};

export {
  backdropVariants,
  circleVariants,
  contentVariants,
  closeButtonVariants,
  navItemVariants,
  footerVariants,
  navContainerVariants
};
