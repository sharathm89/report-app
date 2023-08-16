import { usePageInfo } from "@jikji/react";

function Footer() {
  const { pageNumber } = usePageInfo();

  return (
    <div style={{ padding: "10px" }}>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontWeight: 600, fontSize: "15px", color: "grey" }}>
          2023 All Rights Reserved
        </div>

        <div style={{ fontWeight: 600, fontSize: "15px", color: "red" }}>
          {pageNumber}
        </div>
      </div>
    </div>
  );
}

export default Footer;
