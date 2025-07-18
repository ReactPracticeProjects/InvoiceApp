import { useDispatch, useSelector } from "react-redux";
import { FaChevronRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { MdDeleteOutline } from "react-icons/md";
import { DeleteInvoiceItem } from "../store/InvoiceSlice";

function InvoiceList() {
  const { invoice } = useSelector((state) => state.invoiceSlice);
                    const dispatch = useDispatch()

  return (
    <div>
      {invoice &&
        invoice.map((item, index) => {
          return (
            <div key={index} className="flex w-full gap-4">
<div className="bg-slate-700 flex justify-between cursor-pointer p-4 mb-4 w-full  hover:bg-slate-800 rounded-md">
              <div className="flex space-x-4">
                <span className="opacity-60">{item.invoiceNumber}</span>
                <span className="opacity-80 text-red-400">Due <span className="">{item?.client?.dueDate}</span></span>
                <span className="opacity-90">{item?.client?.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                {/* <span>₹ {item?.items["item-1"]?.price}</span> */}
              
                
                <span className={`${item.status == "Pending" ? "bg-amber-600/30" : "bg-green-600/30"} px-3 py-1 rounded-md flex items-center gap-1`}><GoDotFill className={`${item.status == "Pending" ? "text-amber-500" : "text-green-500"}`} />{item.status}</span>
                <span>
                  <FaChevronRight className="text-violet-500" />
                </span>
              </div>
            </div>
             <button onClick={()=>dispatch(DeleteInvoiceItem(index))} className="bg-slate-700 flex justify-between items-center cursor-pointer p-4 mb-4  hover:bg-slate-800 rounded-md">
                <MdDeleteOutline className="text-2xl" />
             </button>

            </div>
          );
        })}
    </div>
  );
}

export default InvoiceList;
