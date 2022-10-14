import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css';
import styled from 'styled-components'

import Header from './Header';
import MapWithDataLoader from './MapWithDataLoader';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <MapWithDataLoader />,
  },
]);

class App extends React.Component<{}, {}> {

  render() {
    return (
      <AppContainer className="travel-app">
        <Header />
        <RouterProvider router={router} />
      </AppContainer>
    );
  }
}

export default App;
