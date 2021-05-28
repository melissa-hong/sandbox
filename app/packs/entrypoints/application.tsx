/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/packs and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)

import * as React from "react";
import * as ReactDOM from "react-dom";

import "core-js/stable";
import "regenerator-runtime/runtime";
import { gql } from "@apollo/client/core";
import { ApolloProvider, useQuery } from "@apollo/client";

import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

const QUERY = gql`
  {
    time
  }
`;

const App: React.FC = () => {
  const { data } = useQuery(QUERY);

  return <div>Hello World {data?.time}</div>;
};

const AppWithConfig: React.FC = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

window.addEventListener("DOMContentLoaded", (event) => {
  ReactDOM.render(<AppWithConfig />, document.getElementById("app"));
});
