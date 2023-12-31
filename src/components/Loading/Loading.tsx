import { motion } from 'framer-motion';
import './loading.scss';

export const Loading = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: 0,
          y: -300,
          transition: { duration: 0.5, delay: 2.5 },
        }}
        className='loader-box'
      >
        <motion.h1
          className='fw-bold'
          style={{ fontSize: '12vw', color: 'var(--green)' }}
          variants={container}
          initial='hidden'
          whileInView='visible'
        >
          <motion.span variants={child}>f</motion.span>
          <motion.span variants={child}>u</motion.span>
          <motion.span variants={child}>r</motion.span>
          <motion.span variants={child}>n</motion.span>
          <motion.span variants={child}>i</motion.span>
          <motion.span variants={child}>t</motion.span>
          <motion.span variants={child}>u</motion.span>
          <motion.span variants={child}>r</motion.span>
          <motion.span variants={child}>e</motion.span>
        </motion.h1>
      </motion.div>
    </>
  );
};
