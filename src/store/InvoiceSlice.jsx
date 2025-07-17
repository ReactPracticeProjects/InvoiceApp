import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    invoice: [{
    invoiceNumber: "INV5019",
    dueDate: "03 April 2025",
    customerName: "Aarav Sharma",
    amount: 750,
    status: "Pending"
  },
  {
    invoiceNumber: "INV5020",
    dueDate: "06 April 2025",
    customerName: "Meera Iyer",
    amount: 1200,
    status: "Paid"
  },
  {
    invoiceNumber: "INV5021",
    dueDate: "09 April 2025",
    customerName: "Rohan Deshmukh",
    amount: 980,
    status: "Pending"
  },
  {
    invoiceNumber: "INV5022",
    dueDate: "12 April 2025",
    customerName: "Ananya Patel",
    amount: 1100,
    status: "Paid"
  }],
    filter: "All",
    isFormOpen : false,
    selectedInvoice: null,
}

export const invoiceSlice = createSlice({
    name:"invoice",
    initialState,
    reducers :{
        FormOpenStatus: (state)=>{
            state.isFormOpen = !state.isFormOpen
            if(!state.isFormOpen){
                state.selectedInvoice = null;
            }
        },
        DeleteInvoiceItem : (state,actions)=>{
            console.log(state.invoice)
            state.invoice.splice(actions.payload,1)
        }
    }
})



export const {FormOpenStatus,DeleteInvoiceItem} = invoiceSlice.actions
export default invoiceSlice.reducer