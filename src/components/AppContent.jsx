import React from 'react'
import Header from './Header'
import InvoiceList from './InvoiceList'
import InvoiceForm from './InvoiceForm'
import { useSelector } from 'react-redux'

function AppContent() {

         const {isFormOpen} = useSelector(state=>state.invoiceSlice)
        //  console.log(isFormOpen)
                 
    
  return (
   <>
   <div className='px-14'>

   <Header/>
   <InvoiceList/>
   {
    isFormOpen && (
      <InvoiceForm/>
    )

   }
   
   </div>
   </>
  )
}

export default AppContent
