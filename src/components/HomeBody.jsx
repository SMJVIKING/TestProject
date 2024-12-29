import { useState } from "react";
import TicketsList from "./TicketsList";
import ReservesList from "./ReservesList";

function HomeBody() {
  const [isActive, setIsActive] = useState("0"); 

  const handleClick = (id) => {
    setIsActive(id);
  };

  return (
    <div className="mt-6">
      <div className="hidden justify-center gap-x-10 w-full md:flex">
        <TicketsList/>
        <ReservesList/>
      </div>

      <div className="flex md:hidden justify-center gap-x-10 w-full">
        {isActive === "0" ? <TicketsList id="0" /> : <ReservesList id="1" />}
      </div>

      <div className="flex md:hidden items-center justify-center gap-x-2 mt-8 mb-6">
        <button
         aria-label="نمایش تیکت ها"
          className={`w-12 h-1.5 rounded-2xl ${
            isActive === "0" ? "bg-orange-light" : "bg-gray-light"
          }`
        }
          onClick={() => handleClick("0")}
        ></button>
        <button
         aria-label="نمایش رزروها"
          className={`w-12 h-1.5 rounded-2xl ${
            isActive === "1" ? "bg-orange-light" : "bg-gray-light"
          }`}
          onClick={() => handleClick("1")}
        ></button>
      </div>
    </div>
  );
}

export default HomeBody;
