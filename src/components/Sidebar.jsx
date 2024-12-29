import Items from "./Items";

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`absolute max-w-72 top-0 right-0 h-auto bg-current text-gray-lightest transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "translate-x-full"} 
      2xl:translate-x-0 2xl:max-w-96`}
      role="complementary"
      aria-hidden={!isOpen}
      aria-labelledby="sidebar-title"
    >
      <div className="p-4 max-h-max">
        <button
          className="absolute top-4 left-4 bg-gray-lightest text-gray-dark p-2 rounded-lg 2xl:hidden"
          onClick={onClose}
          aria-label="بستن نوار کناری"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.23659 4.99992L8.91992 2.31659C9.25825 1.97825 9.25825 1.41826 8.91992 1.07992C8.58159 0.741589 8.02159 0.741589 7.68326 1.07992L4.99992 3.76325L2.31659 1.07992C1.97825 0.741589 1.41826 0.741589 1.07992 1.07992C0.741589 1.41826 0.741589 1.97825 1.07992 2.31659L3.76325 4.99992L1.07992 7.68325C0.741589 8.02159 0.741589 8.58159 1.07992 8.91992C1.25492 9.09492 1.47659 9.17659 1.69825 9.17659C1.91992 9.17659 2.14159 9.09492 2.31659 8.91992L4.99992 6.23659L7.68326 8.91992C7.85826 9.09492 8.07992 9.17659 8.30159 9.17659C8.52325 9.17659 8.74492 9.09492 8.91992 8.91992C9.25825 8.58159 9.25825 8.02159 8.91992 7.68325L6.23659 4.99992Z"
              fill="#898989"
            />
          </svg>
        </button>

        <div className="m-2 space-y-52">
          <div>
            <div className="mb-10 flex flex-col items-center">
              <div className="relative flex flex-col items-center">
                <span className="bg-orange-light w-12 h-1.5 rounded-2xl absolute bottom-0 mb-0.5"></span>
                <span className="block">
                  <img
                    src="/public/icon/logo-sample 4.svg"
                    alt="لوگو ZARVANTRIP"
                    className="h-20 w-20 mt-4 mb-2 bg-gradient-to-b from-linear-dark via-linear-gay to-linear-gray p-4 rounded-lg"
                  />
                </span>
              </div>
              <h2 className="text-gray-darkest text-xl mt-2">ZARVANTRIP</h2>
              <div className="w-full border-b-2 border-gray-light mt-3"></div>
            </div>
            <Items />
          </div>

          <div>
            <div className="bg-gray-lightest p-3 rounded-md w-full flex flex-col items-center space-y-1">
              <span className="block">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
                  alt="عکس کاربر"
                />
              </span>
              <span className="text-gray-darkest">ابوالفضل عزیز</span>
              <span className="text-gray-darkest">AbyariZarvan@gmail.com</span>
            </div>

            <button
              className="bg-orange-dark text-white p-2 w-full rounded-lg mt-4"
              aria-label="خروج از حساب کاربری"
            >
              خروج
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
