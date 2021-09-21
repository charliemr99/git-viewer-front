import React from "react";
import Content from "../../components/Content/content.component";
import Footer from "../../components/footer.component";
import Header from "../../components/Header/header.component";

import "../../App.css";

const GitViewer: React.FC = (): JSX.Element => {
  return (
    <div className={"app-cointainer"}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default GitViewer;
