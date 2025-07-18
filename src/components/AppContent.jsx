import React, { useEffect } from "react";
import Header from "./Header";
import InvoiceList from "./InvoiceList";
import InvoiceForm from "./InvoiceForm";
import { useDispatch, useSelector } from "react-redux";
import { FetchInvoiceItem } from "../store/InvoiceSlice";

function AppContent() {
  const { isFormOpen } = useSelector((state) => state.invoiceSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    const storedData = localStorage.getItem("invoice");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log(typeof parsedData)
      dispatch(FetchInvoiceItem(parsedData));
    }

  }, []);

  return (
    <>
      <div className="px-24">
        <Header />
        <InvoiceList />
        {isFormOpen && <InvoiceForm />}
      </div>
    </>
  );
}

export default AppContent;
