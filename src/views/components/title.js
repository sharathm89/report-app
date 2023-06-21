const Title = ({ name }) => {
  return (
    <div style={{
      fontWeight: 600,
      fontSize: '23px',
      color: '#262626',
      textTransform: "uppercase",
      textAlign: "center",
      borderBottom: "1px solid #E1E1E1",
      paddingBottom: "16px",
    }}>
      {name}
    </div>
  );
}

export default Title;
