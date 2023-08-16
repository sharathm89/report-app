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

import Cover from "./views/cover";
import Header from "./views/header";
import Footer from "./views/footer";
import TableView from "./views/table";

import "./App.css";

const App = () => (
  <ReportView>
    <ReportRoot>
      <Section dimension={pageSize.A4}>
        <PageContent>
          <Cover />
        </PageContent>
      </Section>

      <Section dimension={pageSize.A4}>
        <PageHeader>
          <Header />
        </PageHeader>

        <PageContent>
          <TableView />
        </PageContent>

        <PageFooter>
          <Footer />
        </PageFooter>
      </Section>
    </ReportRoot>
  </ReportView>
);

export default App;
