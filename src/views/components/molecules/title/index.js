import { string } from "prop-types";

const Title = ({ name }) => {
  return (
    <h1
      style={{
        fontWeight: 600,
        fontSize: "23px",
        color: "#262626",
        textTransform: "uppercase",
        textAlign: "center",
        borderBottom: "1px solid #E1E1E1",
        paddingBottom: "16px",
      }}
    >
      {name}
    </h1>
  );
};

Title.propTypes = {
  name: string,
};

export default Title;
