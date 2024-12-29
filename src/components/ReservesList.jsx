function ReservesList() {
  const reserves = [
    {
      id: 0,
      num: "01",
      btnText: "مشاهده تایید هتل",
      price: "2,000,000 تومان",
      hotelName: "اسپیناس پالاس تهران",
      status: "پرداخت شده",
      BgColor: "bg-green-light",
      TextColor: "text-green-dark",
      BorderColor: "border-green-dark",
      StatusColor: "text-green-dark",
    },
    {
      id: 1,
      num: "02",
      btnText: "لغو شده",
      price: "3,000,000 تومان",
      hotelName: "استقلال ازادی تهران",
      status: "لغو شده",
      BgColor: "bg-black-light",
      TextColor: "text-black-dark",
      BorderColor: "border-black-dark",
      StatusColor: "text-black-dark",
    },
    {
      id: 2,
      num: "03",
      btnText: "در حال بررسی",
      price: "4,000,000 تومان",
      hotelName: "پارسیان ازادی تهران",
      status: "در حال پرداخت",
      BgColor: "bg-blue-light",
      TextColor: "text-blue-dark",
      BorderColor: "border-blue-dark",
      StatusColor: "text-blue-dark",
    },
  ];

  return (
    <div className="bg-current p-10 rounded-xl w-screen">
      <div className="flex justify-between items-center mb-6 gap-x-4">
        <h1 className="md:text-xl text-sm font-bold">لیست رزرو های اخیر</h1>
        <button
          className="bg-gray-darkest text-white p-3 w-36 rounded-lg"
          aria-label="مشاهده لیست تیکت ها"
        >
          مشاهده همه
        </button>
      </div>

      {reserves.map((ticket) => (
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
              aria-label={`بررسی وضعیت رزرو ${ticket.hotelName}`}
            >
              {ticket.btnText}
            </button>
          </div>

          <div className="flex mt-4">
            <div className="border-l-2 border-dashed border-gray-400 h-24 mx-4"></div>
            <ul className="list-none p-0">
              <li className="flex items-center mb-4 gap-x-2">
                <span className="font-bold">نام هتل :</span>
                <span className="text-gray-dark">{ticket.hotelName}</span>
              </li>
              <li className="flex items-center mb-4 gap-x-2">
                <span className="font-bold">مبلغ :</span>
                <span className="text-gray-dark">{ticket.price}</span>
              </li>
              <li className="flex items-center mb-4 gap-x-2">
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

export default ReservesList;
