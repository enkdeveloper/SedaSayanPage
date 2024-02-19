import React from 'react';
import './Bio.css';
import sedaSayanImage from '../images/seda-sayan.jpg';

function Bio() {
  return (
    <div className="bio">
      <div className="bio-info">
        <img src={sedaSayanImage} alt="Seda Sayan" className="bio-image" />
        <h1 className="bio-title">Seda Sayan</h1>
        <p className="bio-description">Seda Sayan is a renowned Turkish singer, actress, and television presenter. She has been a prominent figure in the Turkish entertainment industry for decades.</p>
      </div>
    </div>
  );
}

export default Bio;
