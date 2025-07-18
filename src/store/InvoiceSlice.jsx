import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    invoice: [  {
    biller: {
      streetAdd: "Kulswaminin nagar, barshi road, latur",
      city: "Latur",
      pincode: "413512",
      country: "India"
    },
    client: {
      name: "Sainath Mhetre",
      email: "lordasainath1@gmail.com",
      streetAdd: "KULSWAMININ NAGAR, BARSHI ROAD, LATUR",
      city: "Latur",
      pincode: "413512",
      country: "India"
    },
    date: "2025-07-31",
    dueDate: "10",
    projectdesc: "Something Intresting",
    items: {
      "item-1": {
        name: "Laptop",
        quantity: "1",
        price: "80000"
      },
      "item-2": {
        name: "Charger",
        quantity: "22",
        price: "200000"
      }
    },
    invoiceNumber: "INV9840",
    status: "Pending"
  }],
    filter: "All",
    isFormOpen : false,
    selectedInvoice: null,
}

export const invoiceSlice = createSlice({
    name:"invoice",
    initialState,
    reducers :{
          
       FetchInvoiceItem:(state,actions)=>{
        state.invoice = [...state.invoice]
        
         console.log(actions.payload)
       },

        AddInvoiceItem: (state,actions)=>{
            state.invoice.push(actions.payload)
        },
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



export const {AddInvoiceItem,FormOpenStatus,DeleteInvoiceItem,FetchInvoiceItem} = invoiceSlice.actions
export default invoiceSlice.reducer