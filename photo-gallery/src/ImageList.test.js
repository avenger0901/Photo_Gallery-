import React from "react";
import renderer from "react-test-renderer";
import ImageList from "./ImageList.js";

test('renders ImageList.js correctly', () => {
  const tree = renderer
    .create(<ImageList />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});