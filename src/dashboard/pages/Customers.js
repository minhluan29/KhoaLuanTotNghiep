import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";

import { contextMenuItems, customersData, customersGrid } from "../data/dummy";
import { Header } from "../components";
import axios from "axios";
import moment from "moment";

const Customers = () => {
  const [state, setstate] = useState([]);
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/getAllUser`)
      .then((res) => {
        if (res.data.data && res.data.data.length > 0) {
          let arr = [];
          res.data.data.forEach((item) => {
            arr.push({
              email: item.email,
              fullName: item.fullName,
              location: item.address,
              phoneNumber: item.phoneNumber,
              roleId: item.role_id,
              created: moment(item.createdAt).format("DD/MM/YYYY"),
              userId: item.id,
            });

            return arr;
          });
          console.log("res la gi ", arr);
          setstate(arr);
        }
      });
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        id="gridcomp"
        dataSource={state}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {/* { type: "checkbox", width: "50" }, */}

          <ColumnDirective
            field="userId"
            headerText="Customer ID"
            width="80"
            textAlign="center"
          />
          <ColumnDirective
            field="email"
            headerText="Email"
            width="100"
            textAlign="center"
          />
          <ColumnDirective
            field="fullName"
            headerText="Full Name"
            width="100"
            textAlign="center"
          />
          <ColumnDirective
            field="location"
            headerText="Location"
            width="120"
            textAlign="center"
          />
          <ColumnDirective
            field="phoneNumber"
            headerText="Phone Number"
            width="80"
            textAlign="center"
          />
          <ColumnDirective
            field="roleId"
            headerText="RoleID"
            width="80"
            textAlign="center"
          />

          <ColumnDirective
            field="created"
            headerText="Created"
            width="80"
            textAlign="center"
          />
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
