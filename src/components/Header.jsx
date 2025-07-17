import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { FormOpenStatus } from "../store/InvoiceSlice";

function Header() {
  const { isFormOpen, invoice, filter } = useSelector(
    (state) => state.invoiceSlice
  );
  const statusOption = ["All", "Draft", "Pending", "Paid"];

  const dispatch = useDispatch();
  return (
    <div className="flex p-2  justify-between items-center mb-5">
      <div>
        <p className="text-2xl font-semibold">Invoice</p>
        <p className="opacity-70 text-sm">
          There are {invoice.length} total Invoices
        </p>
      </div>
      <div className="flex items-center gap-4">
        <Menu as="div" className="relative">
          <MenuButton
            className={"flex items-center cursor-pointer outline-none"}
          >
            <CiFilter className="text-2xl" />
            <span>Filter By Status</span>
          </MenuButton>

          <MenuItems className="absolute right-0 m-2 w-48 bg-slate-700 rounded-lg shadow-lg p-2 z-10">
            {statusOption.map((item, index) => {
              return (
                <MenuItem key={index} className="rounded-md">
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-slate-900" : ""
                      } w-full text-left px-4 py-2 rounded-lg capitalize ${
                        filter === item ? "text-violet-500 " : "text-white"
                      }`}
                    >
                      {item}
                    </button>
                  )}
                </MenuItem>
              );
            })}
          </MenuItems>
        </Menu>

        <button
          onClick={() => dispatch(FormOpenStatus())}
          className="flex items-center gap-2 bg-violet-500 hover:bg-violet-700 px-3 py-2 cursor-pointer rounded-3xl"
        >
          {" "}
          <IoIosAddCircleOutline className="bg-white rounded-full p-1 text-2xl text-violet-400" />{" "}
          New Invoice
        </button>

        {/* <p className='flex items-center cursor-pointer'><CiFilter className='text-2xl' /> Filter By Status</p>
            <button className='flex items-center gap-2 bg-violet-500 px-3 py-2 cursor-pointer rounded-3xl'> < IoIosAddCircleOutline className='bg-white rounded-full p-1 text-2xl text-violet-400' /> New Invoice</button> */}
      </div>
    </div>
  );
}

export default Header;
