import { Image, usePageInfo } from "@jikji/react";

function Cover({ title }) {
  const { pageDimension } = usePageInfo();

  return (
    <div style={{ height: pageDimension.height, width: pageDimension.width,  position: "relative" }}>
      <Image
        height={"1120.5px"}
        width={"793.7px"}
        src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba'
      />

      <div style={{ position: "absolute", backgroundColor: "#161662", width: "40%", bottom: "10%" }}>
        <div style={{ display: "flex", flexDirection: "column", padding: "20px" }}>
          <div style={{ fontSize: "35px", fontWeight: 600, color: "white" }}>
            Industry <br />Weekly Report
          </div>

          <div style={{ fontSize: "44px", fontWeight: 600, color: "red", margin: "50px 0 15px 0" }}>
            {title}
          </div>

          <div style={{ fontSize: "14px", fontWeight: 500, color: "grey", marginBottom: "160px" }}>
            Generated on June 20th, 2023
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cover;
