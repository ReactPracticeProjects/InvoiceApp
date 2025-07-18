import { IoRemoveOutline } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { AddInvoiceItem, FormOpenStatus } from "../store/InvoiceSlice";
import { useForm } from "react-hook-form";
import { useState } from "react";

function InvoiceForm() {
  const { invoice, isFormOpen } = useSelector((state) => state.invoiceSlice);
  const dispatch = useDispatch();

  const [itemlist, setItemList] = useState([1]);

  const handleAddItem = () => {
    setItemList((prev) => [...prev, Math.floor(Math.random()*100)]);
  };

  const handleRemoveItem = (itemindex) => {
    console.log(itemindex);

    setItemList((prev) => prev.filter((item, index) => item !== itemindex));
  };

  const onSubmit = (data) => {
    data.invoiceNumber = "INV" + Math.floor(Math.random() * 8999 + 1000);
    data.status = "Pending";
    dispatch(AddInvoiceItem(data));
    dispatch(FormOpenStatus())
     const existingInvoices = JSON.parse(localStorage.getItem("invoice")) || [];
     const updatedInvoices = [...existingInvoices, data];
    localStorage.setItem("invoice",JSON.stringify(updatedInvoices))
  };

  //    const onSubmit = (data) => {
  //     const invoiceNumber =  Math.floor(Math.random() * (99999) + 10000);
  //     const fulldata = {...data,invoiceNumber};
  //     dispatch(AddInvoiceItem(fulldata))
  //   };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();



  return (
    <div className="fixed inset-0  bg-black/50 flex items-start justify-center overflow-y-auto">
      <div className="bg-slate-800 w-full max-w-2xl mt-5 mb-2 rounded-md p-4">
        <div className="flex justify-between items-center mb-3">
          <p>New Invoice</p>
          <button
            className="cursor-pointer"
            onClick={() => dispatch(FormOpenStatus())}
          >
            {" "}
            <IoRemoveOutline />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Seller Details */}
          <div className="flex flex-col gap-3  mb-3">
            <p className="text-violet-700">Seller Details</p>
            <div>
              <input
                {...register("biller.streetadd")}
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                placeholder="Street Address"
                id=""
              />
            </div>

            <div className="grid grid-cols-3 gap-2">
              <input
                {...register("biller.city")}
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                placeholder="City"
                id=""
              />
              <input
                {...register("biller.pincode")}
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="number"
                placeholder="Pincode"
                id=""
              />
              <input
                {...register("biller.country")}
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                placeholder="Country"
                id=""
              />
            </div>
          </div>

          {/* Client Details */}
          <div className="flex flex-col gap-3">
            <p className="text-violet-700">Client Details</p>

            <div className="flex flex-col gap-3">
              <input
                {...register("client.name")}
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                placeholder="Client's Name"
                id=""
              />
              <input
                // {...register("client.email", { required: "email is required" })}
                {...register("client.email")}
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="email"
                placeholder="Client's Email"
                id=""
              />
              {/* 🔴 Error Message Displayed Here */}
              {/* {errors.client?.email && (
                <p className="text-red-500 px-2 -mt-3">
                  {errors.client.email.message}
                </p>
              )} */}

              <input
                {...register("client.streetAdd")}
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                placeholder="Street Address"
                id=""
              />
            </div>

            <div className="grid grid-cols-3 gap-3">
              <input
                {...register("client.city")}
                className="w-full  outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                placeholder="City"
                id=""
              />
              <input
                {...register("client.pincode")}
                className="w-full  outline-none bg-slate-900  rounded-md px-3 py-2"
                type="number"
                placeholder="Pincode"
                id=""
              />
              <input
                {...register("client.country")}
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="text"
                placeholder="Country"
                id=""
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <input
                {...register("client.date")}
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
                type="date"
                id=""
              />

              <select
                {...register("client.dueDate")}
                id=""
                className="w-full outline-none bg-slate-900  rounded-md px-3 py-"
              >
                <option value="" hidden>
                  Choose Due Date
                </option>
                <option value="10">Next 10 Days</option>
                <option value="15">Next 15 Days</option>
                <option value="30">Next 30 Days</option>
              </select>
            </div>

            <input
              {...register("client.projectdesc")}
              className="w-full outline-none bg-slate-900  rounded-md px-3 py-2"
              type="text"
              placeholder="Project Description"
              id=""
            />
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <p>New List</p>

            {/* add new item list */}

            {itemlist &&
              itemlist.map((item, index) => {
                return (
                  <div
                    key={item}
                    className="grid grid-cols-12 gap-2 items-center"
                  >
                    <input
                      {...register(`items.item-${index + 1}.name`)}
                      className="col-span-5 outline-none bg-slate-900  rounded-md px-3 py-2"
                      type="text"
                      placeholder="Enter the item"
                      id=""
                    />
                    <input
                      {...register(`items.item-${index + 1}.quantity`)}
                      className="col-span-2 outline-none bg-slate-900  rounded-md px-3 py-2"
                      type="number"
                      placeholder="Quantity"
                      id=""
                    />
                    <input
                      {...register(`items.item-${index + 1}.price`)}
                      className="col-span-2 outline-none bg-slate-900  rounded-md px-3 py-2"
                      type="number"
                      placeholder="Price"
                      id=""
                    />
                    <p className="col-span-2 px-3 py-2">120</p>
                    <button  type="button"
                      onClick={() => handleRemoveItem(item)}
                      className="cursor-pointer"
                    >
                      {" "}
                      <MdDeleteOutline className="col-span-1 text-xl text-center" />
                    </button>
                  </div>
                );
              })}

            <button type="button"
              onClick={handleAddItem}
              className="flex justify-center items-center mx-auto bg-slate-500 w-full p-2 rounded-md cursor-pointer"
            >
              <IoMdAdd />
              Add new item
            </button>
          </div>

          <div className="flex  space-x-2 justify-end p-1 mt-2">
            <button
              onClick={() => dispatch(FormOpenStatus())}
              className="bg-violet-500 cursor-pointer text-white px-3 py-1 rounded-full text-[15px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-violet-500 cursor-pointer text-white px-3 py-1 rounded-full text-[15px]"
            >
              Create Invoice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default InvoiceForm;
