import { array } from "prop-types";
import { PageBreak } from "@jikji/react";

import { Container, Box, Stack } from "../components/atoms";
import ItemView from "./item";

const EmployeesView = ({ list }) => (
  <Box>
    {list.map((item, index) => (
      <Container key={index}>
        <Stack style={{ rowGap: "16px" }}>
          <ItemView key={index} num={index + 1} item={item} />
          <PageBreak />
        </Stack>
      </Container>
    ))}
  </Box>
);

EmployeesView.propTypes = {
  list: array,
};

export default EmployeesView;
