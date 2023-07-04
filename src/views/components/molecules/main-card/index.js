import { string, node, object } from "prop-types";

const MainCard = ({ title, sx = {}, children }) => {
  return (
    <div style={{ backgroundColor: "#F6F6F6", ...sx }}>
      <div
        style={{
          color: "#262626",
          fontWeight: 600,
          fontSize: "14px",
          borderBottom: "1px solid #E1E1E1",
          padding: "16px 12px",
        }}
      >
        {title}
      </div>

      {children}
    </div>
  );
};

MainCard.propTypes = {
  title: string,
  sx: object,
  children: node,
};

export default MainCard;
