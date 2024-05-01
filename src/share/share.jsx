import React from 'react';
import './share.css';
import perfil from './perfil.png';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';

function Share() {
  return (
    <div>
      <form className="create-post">
        <div className="profile-pic">
          <img src={perfil} alt="Profile" className="per" />
        </div>
        <input type="text" className='in' placeholder='what do you think?'/>
        <div className="ba-container">
  <input type="file" accept="image/*" className="input-image" />
  <AddPhotoAlternateRoundedIcon
    className='ba'
    sx={{ 
      color: "#fff",
      backgroundColor: "tansparete",
      cursor: "pointer",
      margin: "10px"
    }}
  />
</div>

      <button className='bo'>Post</button>
      </form>
    </div>
  );
}

export default Share;
