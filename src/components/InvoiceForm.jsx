import { IoRemoveOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { FormOpenStatus } from "../store/InvoiceSlice";

function InvoiceForm() {

    const {isFormOpen} = useSelector(state=>state.invoiceSlice)
    const dispatch = useDispatch()

  return (
    <div className="fixed inset-0  bg-black/50 flex items-start justify-center overflow-y-auto">
      <div className="bg-slate-800 w-full max-w-2xl mt-5 mb-2 rounded-md p-4">
        <div className="flex justify-between items-center mb-3">
          <p>New Invoice</p>
         <button className="cursor-pointer" onClick={()=>dispatch(FormOpenStatus())}> <IoRemoveOutline /></button>
        </div>

        <form>
          <div className="flex flex-col gap-3  mb-3">
            <p className="text-violet-700">Bill From</p>
            <div>
              <input
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                name="StreeAdd"
                placeholder="Street Address"
                id=""
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <input
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                name="city"
                placeholder="City"
                id=""
              />
              <input
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="number"
                name="pincode"
                placeholder="Pincode"
                id=""
              />
              <input
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                name="country"
                placeholder="Country"
                id=""
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-violet-700">Bill To</p>

            <div className="flex flex-col gap-3">
              <input
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                name="city"
                placeholder="Client's Name"
                id=""
              />
              <input
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="email"
                name="pincode"
                placeholder="Client's Email"
                id=""
              />
              <input
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                name="country"
                placeholder="Street Address"
                id=""
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <input
                className="w-full  outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                name="city"
                placeholder="City"
                id=""
              />
              <input
                className="w-full  outline-none bg-slate-900  rounded-md px-3 py-2"
                type="number"
                name="pincode"
                placeholder="Pincode"
                id=""
              />
              <input
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                name="country"
                placeholder="Country"
                id=""
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <input
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="date"
                name=""
                id=""
              />

              <select
                name=""
                id=""
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-"
              >
                <option value="" hidden>
                  Choose Due Date
                </option>
                <option value="">Next 10 Days</option>
                <option value="">Next 15 Days</option>
                <option value="">Next 30 Days</option>
              </select>
            </div>

            <input
              className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
              type="text"
              name="StreeAdd"
              placeholder="Project Description"
              id=""
            />
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p>New List</p>

            <div className="grid grid-cols-12 gap-2 items-center">
              <input
                className="col-span-5 outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                placeholder="Enter the item"
                name=""
                id=""
              />
              <input
                className="col-span-2 outline-none bg-slate-900  rounded-md px-3 py-2"
                type="number"
                placeholder="Quantity"
                name=""
                id=""
              />
              <input
                className="col-span-2 outline-none bg-slate-900  rounded-md px-3 py-2"
                type="number"
                placeholder="Price"
                name=""
                id=""
              />
              <p className="col-span-2 px-3 py-2"> $120</p>
             <button className="cursor-pointer"> <MdDeleteOutline className="col-span-1 text-xl text-center" /></button>
            </div>

            <button className="flex justify-center items-center mx-auto bg-slate-500 w-full p-2 rounded-md cursor-pointer">
              <IoMdAdd />
              Add new item
            </button>
          </div>

          <div className="flex  space-x-2 justify-end p-1 mt-2">
            <button onClick={()=>dispatch(FormOpenStatus())} className="bg-violet-500 cursor-pointer text-white px-3 py-1 rounded-full text-[15px]">
              Cancel
            </button>
            <button className="bg-violet-500 cursor-pointer text-white px-3 py-1 rounded-full text-[15px]">
              Create Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InvoiceForm;
