import React from 'react'
import { Modal } from '@mantine/core';
import PostSharedComponent from '../../components/PostSide/PostSharedComponent/PostSharedComponent';
const SareModal = ({modalOpen,setModalOpen}) => {
  return (
    
   
  


    
        <Modal size="lg"
        opened={modalOpen}
        onClose={() => { setModalOpen(false) }}
        >
          <PostSharedComponent/>
        </Modal>
     
    
   
 
  )
}

export default SareModal