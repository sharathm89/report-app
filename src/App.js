import React, { useState, useEffect } from "react";
import {
  PageContent,
  PageFooter,
  PageHeader,
  pageSize,
  ReportRoot,
  ReportView,
  Section,
  PageBreak,
} from "@jikji/react";

import Header from "./views/header";
import Footer from "./views/footer";
import Cover from "./views/cover";
import GraphView from "./views/graph-view";
import TableView from './views/table-view';

import './App.css';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const params = {
      clientName: "Industry Solutions",
    };

    setData(params);
  }, []);

  return (
    <ReportView>
      <ReportRoot>

        <Section dimension={pageSize.A4}>
          <PageContent>
            <Cover title={data.clientName || ''} />
          </PageContent>
        </Section>

        <Section dimension={pageSize.A4}>
          <PageHeader>
            <Header title={data.clientName || ''} />
          </PageHeader>

          <PageContent>
            {/* <GraphView />
            <PageBreak /> */}
            <TableView  />
          </PageContent>

          <PageFooter>
            <Footer />
          </PageFooter>
        </Section>

      </ReportRoot>
    </ReportView>
  );
}


export default App;
