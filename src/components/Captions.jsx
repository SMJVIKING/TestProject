import { useState, useRef } from "react";

function Captions() {
  const captions = [
    {
      id: 0,
      text: "تعداد رزرو های من 50 تا",
      icon: "/icon/box-tick.svg",
    },
    {
      id: 1,
      text: "تیکت های من 1023 تا",
      icon: "/icon/sms-tracking.svg",
    },
    {
      id: 2,
      text: "مبلغ کل خرید 2,000,000 تومان",
      icon: "/icon/bag-2.svg",
    },
  ];

  const [isActive, setIsActive] = useState(captions[0]);
  const captionRefs = useRef([]);

  const handleClick = (caption) => {
    setIsActive(caption);
    captionRefs.current[caption.id].scrollIntoView({ behavior: "smooth" });
  };

  const filteredCaptions = captions.filter(
    (caption) => caption.id === isActive.id
  );

  return (
    <div>
      <div className="md:flex hidden justify-between mt-2">
        {captions.map((caption) => (
          <div className="items-center flex " key={caption.id}>
            <div
              className={`bg-gray-dark w-2 h-14 rounded-xl ${
                isActive.id === caption.id ? "bg-orange-light" : ""
              }`}
            ></div>
            <div
              className="bg-gray-darkest p-5 rounded-xl flex items-center mt-2 cursor-pointer"
              onClick={() => handleClick(caption)}
            >
              <span>
                <img src={caption.icon} alt="ایکون کپشن" />
              </span>
              <span className="m-2 text-xl text-textColor">{caption.text}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden flex justify-center items-center mt-8">
        {filteredCaptions.map((caption) => (
          <div
            className="items-center justify-center flex w-full"
            key={caption.id}
            ref={(el) => (captionRefs.current[caption.id] = el)}
          >
            <div
              className={`bg-gray-dark w-2 h-14 rounded-xl ${
                isActive.id === caption.id ? "bg-orange-light" : ""
              }`}
            ></div>
            <div
              className="bg-gray-darkest p-5 rounded-xl flex items-center mt-2 cursor-pointer"
              onClick={() => handleClick(caption)}
            >
              <span>
                <img src={caption.icon} alt="ایکون کپشن" />
              </span>
              <span className="m-2 text-xl text-textColor">{caption.text}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden overflow-x-auto flex items-center justify-center mt-6 space-x-2">
        {captions.map((caption) => (
          <button
            key={caption.id}
            aria-label={`انتخاب ${caption.text}`}
            className={`w-12 h-1.5 mx-2 rounded-2xl cursor-pointer ${
              isActive.id === caption.id ? "bg-orange-light" : "bg-gray-light"
            }`}
            onClick={() => handleClick(caption)}
          ></button>
        ))}
      </div>
    </div>

  );
}

export default Captions;
