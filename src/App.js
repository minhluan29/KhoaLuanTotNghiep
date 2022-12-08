import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./admin/layout/DefaultLayout/DefaultLayout";
import Dashboard from "./dashboard";
import Main from "./main";
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
  Items,
} from "./dashboard/pages";
import Product from "./main/pages/Product";
import Brand from "./main/pages/Brand";
import SignIn from "./dashboard/pages/SignIn";
import SignInUser from "./main/pages/SignInUser";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signInUser" element={<SignInUser />} />
          <Route path="/product" element={<Product />} />
          <Route path="/brand" element={<Brand />} />

          <Route path="/dashboard">
            <Route
              index
              element={
                <DefaultLayout>
                  <Dashboard />
                </DefaultLayout>
              }
            />
            {/* dashboard  */}
            {/* <Route path="" element={<Ecommerce />} /> */}
            <Route
              path="/dashboard/ecommerce"
              element={
                <DefaultLayout>
                  <Ecommerce />
                </DefaultLayout>
              }
            />

            {/* pages  */}
            <Route
              path="/dashboard/items"
              element={
                <DefaultLayout>
                  <Items />
                </DefaultLayout>
              }
            />
            <Route
              path="/dashboard/orders"
              element={
                <DefaultLayout>
                  <Orders />
                </DefaultLayout>
              }
            />
            <Route
              path="employees"
              element={
                <DefaultLayout>
                  <Employees />
                </DefaultLayout>
              }
            />
            <Route
              path="customers"
              element={
                <DefaultLayout>
                  <Customers />
                </DefaultLayout>
              }
            />

            {/* apps  */}
            <Route
              path="kanban"
              element={
                <DefaultLayout>
                  <Kanban />
                </DefaultLayout>
              }
            />
            <Route
              path="editor"
              element={
                <DefaultLayout>
                  <Editor />
                </DefaultLayout>
              }
            />
            <Route
              path="calendar"
              element={
                <DefaultLayout>
                  <Calendar />
                </DefaultLayout>
              }
            />
            <Route
              path="color-picker"
              element={
                <DefaultLayout>
                  <ColorPicker />
                </DefaultLayout>
              }
            />

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

          <Route path="/signIn" element={<SignIn />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
};

export default App;
