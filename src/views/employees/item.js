import { object, number } from "prop-types";
import { Table } from "@jikji/react";

import { Box, Stack, Typography } from "../components/atoms";
import { TypeView } from "../components/molecules";

const ItemView = ({ num, item }) => (
  <Stack style={{ rowGap: "20px" }}>
    <Typography color="#3595FB" fontWeight={600} fontSize="18px">
      Employee {num} - {item.name}
    </Typography>

    <Stack direction="row" columnGap="12px" style={{ alignItems: "center", width: "fit-content" }}>
      <Typography color="#3595FB" fontWeight={500} fontSize="16px">
        Keywords
      </Typography>

      <TypeView value={item.riskRatings} />
    </Stack>

    <Stack direction="row" columnGap="6px">
      <Typography fontSize="14px">Total </Typography>
      <Typography fontSize="14px">:</Typography>
      <Typography fontSize="16px" fontWeight={600}>
        {item.count}
      </Typography>
    </Stack>

    {item.exposed ? (
      <Stack direction="row">
        <Typography fontSize="14px" style={{ textWrap: "nowrap" }}>
          Keywords&nbsp;&nbsp;:&nbsp;&nbsp;
        </Typography>
        <Stack direction="row" columnGap="12px" rowGap="10px" style={{ flexWrap: "wrap" }}>
          {item.exposed.map((element, index) => (
            <Box key={index} style={{ borderRadius: "20px", border: "0.5px solid #595959", padding: "4px 12px" }}>
              <Typography fontSize="14px">{element}</Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    ) : null}

    {item.list1 ? (
      <Table className="table" style={{ marginTop: "10px" }}>
        <thead>
          <tr className="table-head">
            <th>
              <Typography fontSize="14px" fontWeight={700}>
                Source
              </Typography>
            </th>
            <th className="text-center">
              <Typography fontSize="14px" fontWeight={700}>
                Added Date
              </Typography>
            </th>
            <th className="text-center">
              <Typography fontSize="14px" fontWeight={700}>
              Updated Date
              </Typography>
            </th>
            <th className="text-center">
              <Typography fontSize="14px" fontWeight={700}>
                Type
              </Typography>
            </th>
          </tr>
        </thead>

        <tbody>
          {item.list1.map((element, index) => (
            <tr key={index} className="table-body">
              <td width="30%">
                <Typography>{element.source}</Typography>
              </td>
              <td width="25%" className="text-center">
                <Typography>{element.addedDate || "-"}</Typography>
              </td>
              <td width="25%" className="text-center">
                <Typography>{element.breachDate || "-"}</Typography>
              </td>
              <td width="20%" className="text-center">
                <TypeView value={element.riskRatings} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    ) : null}

    {item.list2 ? (
      <Stack rowGap="10px" style={{ marginTop: "20px" }}>
        <Typography color="#3595FB" fontWeight={500} fontSize="16px">
          Credentials
        </Typography>

        <Table className="table" style={{ marginTop: "10px" }}>
          <thead>
            <tr className="table-head">
              <th>
                <Typography fontSize="14px" fontWeight={700}>
                  Source
                </Typography>
              </th>
              <th className="text-center">
                <Typography fontSize="14px" fontWeight={700}>
                  Added Date
                </Typography>
              </th>
              <th className="text-center">
                <Typography fontSize="14px" fontWeight={700}>
                  Updated Date
                </Typography>
              </th>
            </tr>
          </thead>

          <tbody>
            {item.list2.map((element, index) => (
              <tr key={index} className="table-body">
                <td>
                  <Typography>{element.source}</Typography>
                </td>
                <td className="text-center">
                  <Typography>{element.addedDate || "-"}</Typography>
                </td>
                <td className="text-center">
                  <Typography>{element.breachDate || "-"}</Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Stack>
    ) : null}
  </Stack>
);

ItemView.propTypes = {
  item: object,
  num: number,
};

export default ItemView;
