import React, { useEffect, useState } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  ForeignKey,
  Toolbar,
  Inject,
} from "@syncfusion/ej2-react-grids";

import moment from "moment";

import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import { Header } from "../components";
import axios from "axios";

const Orders = () => {
  const [state, setstate] = useState([]);

  const editing = { allowDeleting: true, allowEditing: true };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/get-all-order`)
      .then((res) => {
        if (res.data.data && res.data.data.length > 0) {
          let arr = [];
          res.data.data.forEach((item) => {
            arr.push({
              id: item.id,
              userId: item.userId,
              itemId: item.itemId,
              quantity: item.quantity,
              status: item.status,

              priceTotal: item.priceTotal,

              created: moment(item.createdAt).format("DD/MM/YYYY"),
            });

            return arr;
          });
          setstate(arr);
        }
      });
  }, []);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />

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
          <ColumnDirective
            field="id"
            foreignKeyField="id"
            headerText="Order ID"
            width="80"
            textAlign="center"
          />
          <ColumnDirective
            field="userId"
            headerText="Customer ID"
            width="80"
            textAlign="center"
          />
          <ColumnDirective
            field="itemId"
            headerText="itemId"
            width="100"
            textAlign="center"
          />
          <ColumnDirective
            field="quantity"
            headerText="Quantity"
            width="80"
            textAlign="center"
          />
          <ColumnDirective
            field="status"
            headerText="Status"
            width="80"
            textAlign="center"
          />
          <ColumnDirective
            field="priceTotal"
            headerText="Total"
            width="100"
            textAlign="center"
          />

          <ColumnDirective
            field="created"
            headerText="Created"
            width="100"
            textAlign="center"
          />
        </ColumnsDirective>

        <Inject
          services={[
            ForeignKey,
            Toolbar,
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};
export default Orders;
