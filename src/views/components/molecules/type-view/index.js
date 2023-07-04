import { string, bool } from "prop-types";

import { Box, Typography } from "../../atoms";

import { getColorCode, getFontColorCode } from "../../../../helpers";

const TypeView = ({ value }) => (
  <Box
    style={{
      backgroundColor: getColorCode(value),
      width: "100px",
      margin: "0 auto",
      padding: "6px 16px",
    }}
  >
    <Typography fontWeight={500} fontSize="14px" color={getFontColorCode(value)}>
      {value}
    </Typography>
  </Box>
);

TypeView.propTypes = {
  value: string,
  isRounded: bool,
};

export default TypeView;
