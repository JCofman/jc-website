import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Logo from "./logo";
import Navi from "./navi";
import "./header.scss";
import "./index.scss";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Raleway"]
  }
});
const Header = () => (
  <div
    style={{
      marginBottom: "1.45rem"
    }}
  >
    <div className="header">
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
      <Navi />
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div className="bg">
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "0px 1.0875rem 1.45rem",
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
