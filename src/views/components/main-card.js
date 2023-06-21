import React from 'react';

function MainCard({ title, sx = {}, children }) {
  return (
    <div style={{ backgroundColor: "#F6F6F6", ...sx }}>
      <div style={{ color: "#262626", fontWeight: 600, fontSize: "14px", borderBottom: '1px solid #E1E1E1', padding: '16px 12px' }}>{title}</div>

      {children}
    </div>
  );
}

export default MainCard;
