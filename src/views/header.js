const Header = ({ title }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "30px 0" }}>
      <div style={{
          fontWeight: 600,
          fontSize: '17px',
          color: 'red',
          textTransform: "uppercase",
          textAlign: "center"
        }}>
        {title}
      </div>
    </div>
  );
}

export default Header;
