import React from "react";
import Content from "../../components/Content/content.component";
import Footer from "../../components/footer.component";
import Header from "../../components/Header/header.component";

const GitViewer: React.FC = (): JSX.Element => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default GitViewer;
