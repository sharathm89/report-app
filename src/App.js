import React from "react";
import {
  PageContent,
  pageSize,
  ReportRoot,
  ReportView,
  Section,
  PageHeader,
  PageFooter,
} from "@jikji/react";

import TableView from "./views/table";

import "./App.css";

const App = () => (
  <ReportView>
    <ReportRoot>
      <Section dimension={pageSize.A4}>
        <PageHeader>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "30px 0",
            }}
          >
            <div
              style={{
                fontWeight: 600,
                fontSize: "17px",
                color: "red",
                textTransform: "uppercase",
                textAlign: "center",
              }}
            >
              Test Solutiosn Ltd
            </div>
          </div>
        </PageHeader>

        <PageContent>
          <TableView />
        </PageContent>

        <PageFooter>
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
                01
              </div>
            </div>
          </div>
        </PageFooter>
      </Section>
    </ReportRoot>
  </ReportView>
);

export default App;
