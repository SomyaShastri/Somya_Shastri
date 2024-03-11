import React from 'react'
import { motion } from 'framer-motion'
import Col from 'react-bootstrap/Col';
function intro() {

  return (
    <Col sm={6} className='d-flex flex-column justify-content-start align-items-start'>
      <motion.span className="fs-1 ml-25"
      whileHover={{ scale: 1.2, textDecoration: "underline", color: "AliceBlue" }}
      transition={{ duration: 0.3 }}>
        Hey,
      </motion.span>
      <motion.span className="fs-1 ml-25"
        whileHover={{ scale: 1.2, color: "AliceBlue", textDecoration: "underline" }}
        transition={{ duration: 0.3 }}>
          I'm Somya
      </motion.span>
      </Col>

  )
}

export default intro