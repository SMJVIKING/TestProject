function Items() {
  const items = [
    {
      id: 0,
      text: "داشبورد",
      icon: "/icon/element-3.svg",
    },
    {
      id: 1,
      text: "لیست رزرو من",
      icon: "/icon/user-square.svg",
    },
    {
      id: 2,
      text: "بخش مالی",
      icon: "/icon/empty-wallet.svg ",
    },
    {
      id: 3,
      text: "مدیریت تیکت ها",
      icon: "/icon/direct.svg",
    },
    {
      id: 4,
      text: "باشگاه مشتریان",
      icon: "/icon/profile-2user.svg ",
    },
    {
      id: 5,
      text: "علاقه مندی های من",
      icon: "/icon/star.svg ",
    },
    {
      id: 6,
      text: "مسافران",
      icon: "/icon/verify.svg",
    },
  ];

  return (
    <div className="overflow-y-auto scrollbar 2xl:overflow-hidden h-96 2xl:h-auto">
      {items.map((item) => (
        <div key={item.id} className="hover:bg-gray-darkest rounded-xl transition">
          <ul className="mt-2 flex justify-end">
            <li className="flex items-center rounded-md p-2">
              <span className="pr-2 text-gray-darkest  hover:text-white">{item.text}</span>
              <span className="bg-gray-lightest rounded-lg p-2">
                <img src={item.icon} alt="ایکون" />
              </span>
            </li>
          </ul>
        </div>
      ))}
    </div>

  );
}
export default Items;
