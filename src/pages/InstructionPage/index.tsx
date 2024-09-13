import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const InstructionListPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAddInsVideoClick = () => {
    navigate("/introductionPage/addInstructionVideoPage")
  }

  function addddd(): undefined {
    return undefined
  }

  return <>
    <Button type='primary' onClick={handleAddInsVideoClick}>Add New Video</Button>
  </>
}

export default InstructionListPage