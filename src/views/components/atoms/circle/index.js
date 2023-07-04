import { string, object } from "prop-types";

const Circle = ({ height, width, color, style }) => (
  <div style={{ height, width, backgroundColor: color, borderRadius: "50%", display: "inline-block", ...style }}></div>
);

Circle.defaultProps = {
  height: "6px",
  width: "6px",
};

Circle.propTypes = {
  height: string,
  color: string,
  width: string,
  style: object,
};

export default Circle;
