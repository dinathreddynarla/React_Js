import React ,{useState} from 'react'
import "../Styles/Toggle.css"

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleChange = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button onClick={handleChange} className={`toggle-button ${isToggled ? 'on' : 'off'}`}>
      {isToggled ? 'Good Boy' : 'Hello'}
    </button>
  );
}

export default Toggle

