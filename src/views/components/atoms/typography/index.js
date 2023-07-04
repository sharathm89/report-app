import { string, node, object, number } from "prop-types";

const Typography = ({ fontSize, fontWeight, color, style, children }) => {
  return <h1 style={{ fontSize, fontWeight, color, ...style }}>{children}</h1>;
};

Typography.defaultProps = {
  style: {},
  fontSize: "12px",
  fontWeight: 400,
  color: "#262626",
};

Typography.propTypes = {
  fontSize: string,
  fontWeight: number,
  color: string,
  style: object,
  children: node,
};

export default Typography;
