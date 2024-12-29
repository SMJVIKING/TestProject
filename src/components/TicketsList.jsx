// function TicketsList() {
//   const Tickets = [
//     {
//       id: 0,
//       num: "01",
//       BgColor: "bg-green-light",
//       TextColor: "text-green-dark",
//       BorderColor: "border-green-dark",
//       btnText: "ورود به تیکت",
//       ID: "#123456",
//       title: "عدم فعالسازی سرویس",
//       status: "پاسخ داده شده",
//       StatusColor: "text-green-dark",
//     },
//     {
//       id: 1,
//       num: "02",
//       BgColor: "bg-blue-light",
//       TextColor: "text-blue-dark",
//       BorderColor: "border-blue-dark",
//       btnText: "ورود به تیکت",
//       ID: "#159874",
//       title: "درخواست فعالسازی ",
//       status: "در حال بررسی",
//       StatusColor: "text-blue-dark",
//     },
//     {
//       id: 2,
//       num: "03",
//       BgColor: "bg-black-light",
//       TextColor: "text-black-dark",
//       BorderColor: "border-black-dark",
//       btnText: "ورود به تیکت",
//       ID: "#789456",
//       title: "مشکل در رزو",
//       status: "باز شده",
//       StatusColor: "text-black-dark",
//     },
//   ];

//   return (
//     <div className="bg-current p-10 rounded-xl w-screen">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-xl font-bold">لیست تیکت های اخیر</h1>
//         <button className="bg-gray-darkest text-white p-3 w-36 rounded-lg"
//          aria-label="مشاهده لیست تیکت ها"
//         >
//           مشاهده همه
//         </button>
//       </div>

//       {Tickets.map((Ticket) => (
//         <div key={Ticket.id}>
//           <div className="flex justify-between items-center mb-4">
//             <span
//               className={`${Ticket.BgColor} ${Ticket.TextColor} ${Ticket.BorderColor} border-2 
//             p-5 w-6 h-6 rounded-lg flex items-center justify-center`}
//             >
//               {Ticket.num}
//             </span>

//             <button className="bg-orange-darkest text-white p-3 w-36 rounded-lg"
//              aria-label="بررسی وضعیت تیکت"
//             >
//               {Ticket.btnText}
//             </button>
//           </div>

//           <div className="flex">
//             <div className="border-l-2 border-dashed border-gray-400 h-20 mx-4"></div>
//             <ul className="list-none p-0">
//               <li className="flex items-center mb-2 gap-x-4">
//                 <span className="font-bold">شناسه :</span>
//                 <span className="text-gray-dark">{Ticket.ID}</span>
//               </li>
//               <li className="flex items-center mb-2 gap-x-4">
//                 <span className="font-bold">عنوان :</span>
//                 <span className="text-gray-dark">{Ticket.title}</span>
//               </li>
//               <li className="flex items-center mb-2 gap-x-4">
//                 <span className="font-bold">وضعیت :</span>
//                 <span className={`${Ticket.StatusColor}`}>{Ticket.status}</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default TicketsList;







function TicketsList() {
  const tickets = [
    {
      id: 0,
      num: "01",
      BgColor: "bg-green-light",
      TextColor: "text-green-dark",
      BorderColor: "border-green-dark",
      btnText: "ورود به تیکت",
      ID: "#123456",
      title: "عدم فعالسازی سرویس",
      status: "پاسخ داده شده",
      StatusColor: "text-green-dark",
    },
    {
      id: 1,
      num: "02",
      BgColor: "bg-blue-light",
      TextColor: "text-blue-dark",
      BorderColor: "border-blue-dark",
      btnText: "ورود به تیکت",
      ID: "#159874",
      title: "درخواست فعالسازی",
      status: "در حال بررسی",
      StatusColor: "text-blue-dark",
    },
    {
      id: 2,
      num: "03",
      BgColor: "bg-black-light",
      TextColor: "text-black-dark",
      BorderColor: "border-black-dark",
      btnText: "ورود به تیکت",
      ID: "#789456",
      title: "مشکل در رزو",
      status: "باز شده",
      StatusColor: "text-black-dark",
    },
  ];

  return (
    <div className="bg-current p-10 rounded-xl w-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">لیست تیکت های اخیر</h1>
        <button
          className="bg-gray-darkest text-white p-3 w-36 rounded-lg"
          aria-label="مشاهده لیست تیکت ها"
        >
          مشاهده همه
        </button>
      </div>

      {tickets.map((ticket) => (
        <div key={ticket.id} className="mb-4">
          <div className="flex justify-between items-center">
            <span
              className={`${ticket.BgColor} ${ticket.TextColor} ${ticket.BorderColor} border-2 
            p-5 w-6 h-6 rounded-lg flex items-center justify-center`}
              aria-hidden="true"
            >
              {ticket.num}
            </span>

            <button
              className="bg-orange-darkest text-white p-3 w-36 rounded-lg"
              aria-label={`ورود به تیکت ${ticket.ID}`}
            >
              {ticket.btnText}
            </button>
          </div>

          <div className="flex mt-2">
            <div className="border-l-2 border-dashed border-gray-400 h-20 mx-4"></div>
            <ul className="list-none p-0">
              <li className="flex items-center mb-2 gap-x-4">
                <span className="font-bold">شناسه :</span>
                <span className="text-gray-dark">{ticket.ID}</span>
              </li>
              <li className="flex items-center mb-2 gap-x-4">
                <span className="font-bold">عنوان :</span>
                <span className="text-gray-dark">{ticket.title}</span>
              </li>
              <li className="flex items-center mb-2 gap-x-4">
                <span className="font-bold">وضعیت :</span>
                <span className={ticket.StatusColor}>{ticket.status}</span>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TicketsList;
