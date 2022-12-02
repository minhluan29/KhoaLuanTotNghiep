import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard";
import { Pie, Stacked } from "./dashboard/components";
import {
  Area,
  Bar,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Ecommerce,
  Editor,
  Employees,
  Financial,
  Kanban,
  Line,
  Orders,
  Pyramid,
} from "./dashboard/pages";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Dashboard />} />
            {/* dashboard  */}
            <Route path="" element={<Ecommerce />} />
            <Route path="ecommerce" element={<Ecommerce />} />

            {/* pages  */}
            <Route path="orders" element={<Orders />} />
            <Route path="employees" element={<Employees />} />
            <Route path="customers" element={<Customers />} />

            {/* apps  */}
            <Route path="kanban" element={<Kanban />} />
            <Route path="editor" element={<Editor />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="color-picker" element={<ColorPicker />} />

            {/* charts  */}
            <Route path="line" element={<Line />} />
            <Route path="area" element={<Area />} />
            <Route path="bar" element={<Bar />} />
            <Route path="pie" element={<Pie />} />
            <Route path="financial" element={<Financial />} />
            <Route path="color-mapping" element={<ColorMapping />} />
            <Route path="pyramid" element={<Pyramid />} />
            <Route path="stacked" element={<Stacked />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
