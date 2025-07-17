import {configureStore} from "@reduxjs/toolkit"
import invoiceSlice  from "./InvoiceSlice"

export const store = configureStore({
    reducer: {
        invoiceSlice:invoiceSlice
    }
})