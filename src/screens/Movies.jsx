import React from "react";
import Layout from "../layout/Layout";
import Filters from "../componnents/Filters";

function Movies(props) {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Filters></Filters>

      </div>
    </Layout>
  );
}

export default Movies;
