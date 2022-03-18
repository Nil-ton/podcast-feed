import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAsideHooks = () => {
  const [btnHome, setBtnHome] = useState(true);
  const [btnAbout, setBtnAbout] = useState(false);
  const navigate = useNavigate();
  
  const handleBtnHome = () => {
    setBtnHome(true);
    setBtnAbout(false);
    navigate('/home');
  };
  const handleBtnAbout = () => {
    setBtnHome(false);
    setBtnAbout(true);
    navigate('/about');
  };
  return {btnHome, btnAbout, handleBtnHome, handleBtnAbout, navigate};
};