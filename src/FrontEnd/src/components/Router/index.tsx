import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationButtons from '../Navigation';
import Pages from '../Pages';

const Router = () => {
  return (
    <BrowserRouter>
      <NavigationButtons />
      <Routes>
        <Route path="/page1" element={<Pages.Page1 />} />
        <Route path="/page2" element={<Pages.Page2 />} />
        <Route path="/page3" element={<Pages.Page3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
