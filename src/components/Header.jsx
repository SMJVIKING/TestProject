import Menu from "./Menu";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex">
        <Menu />

        <div
          className="2xl:flex hidden items-center p-2 bg-gray-lightest rounded-lg"
          role="contentinfo"
        >
          <img
            className="rounded-full w-14 h-14 mr-2"
            src="/public/images/alexander-hipp-iEEBWgY_6lA-unsplash.jpg"
            alt="تصویر کاربر"
          />
          <span
            className="pr-2 pl-5 text-gray-dark"
            role="heading"
            aria-level="3"
          >
            ابوالفضل عزیز خوش آمدی
          </span>
          <button
            className="ml-2 w-6 h-6 pl-1 bg-gray-light rounded-lg flex items-center justify-center"
            aria-label="آیکون خروج"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14px"
              viewBox="0 -960 960 960"
              width="14px"
              fill="#e8eaed"
            >
              <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
            </svg>
          </button>
        </div>

        <div
          className="flex items-center space-x-4 p-2 bg-gray-lightest rounded-lg mr-3"
          role="complementary"
        >
          <span
            className="w-6 h-6 text-gray-light rounded-md flex items-center justify-center"
            aria-label="آیکون قیمت"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                fill="#292D32"
              />
              <path
                d="M14.85 3.94964V7.74962H6.26C4.19 7.74962 2.5 9.43963 2.5 11.5096V7.83965C2.5 6.64965 3.23 5.58961 4.34 5.16961L12.28 2.16961C13.52 1.70961 14.85 2.61963 14.85 3.94964Z"
                fill="#292D32"
              />
              <path
                d="M22.5598 13.9702V16.0302C22.5598 16.5802 22.1198 17.0302 21.5598 17.0502H19.5998C18.5198 17.0502 17.5298 16.2602 17.4398 15.1802C17.3798 14.5502 17.6198 13.9602 18.0398 13.5502C18.4098 13.1702 18.9198 12.9502 19.4798 12.9502H21.5598C22.1198 12.9702 22.5598 13.4202 22.5598 13.9702Z"
                fill="#292D32"
              />
              <path
                d="M14 12.75H7C6.59 12.75 6.25 12.41 6.25 12C6.25 11.59 6.59 11.25 7 11.25H14C14.41 11.25 14.75 11.59 14.75 12C14.75 12.41 14.41 12.75 14 12.75Z"
                fill="#292D32"
              />
            </svg>
          </span>
          <span className="pr-2 text-gray-dark">21,265,000 تومان</span>
        </div>
      </div>

      <div className="flex">
        <button
          className="flex items-center space-x-4 p-2 bg-orange-darkest rounded-lg ml-3"
          aria-label="برگشت به وبسایت"
        >
          <span
            className="w-8 h-5 text-gray-lightest rounded-md flex items-center justify-center"
            aria-hidden="true"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.6"
                d="M9 7.2V16.79C9 20 11 22 14.2 22H16.79C19.99 22 21.99 20 21.99 16.8V7.2C22 4 20 2 16.8 2H14.2C11 2 9 4 9 7.2Z"
                fill="white"
              />
              <path
                d="M5.57043 8.11953L2.22043 11.4695C1.93043 11.7595 1.93043 12.2395 2.22043 12.5295L5.57043 15.8795C5.86043 16.1695 6.34043 16.1695 6.63043 15.8795C6.92043 15.5895 6.92043 15.1095 6.63043 14.8195L4.56043 12.7495H15.2504C15.6604 12.7495 16.0004 12.4095 16.0004 11.9995C16.0004 11.5895 15.6604 11.2495 15.2504 11.2495H4.56043L6.63043 9.17953C6.78043 9.02953 6.85043 8.83953 6.85043 8.64953C6.85043 8.45953 6.78043 8.25953 6.63043 8.11953C6.34043 7.81953 5.87043 7.81953 5.57043 8.11953Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="pr-2 text-gray-lightest hidden md:block">
            برگشت به وبسایت
          </span>
        </button>

        <button className="relative flex items-center space-x-4 p-2 bg-gray-lightest rounded-lg">
          <button
            className="w-10 h-10 text-gray-light rounded-md flex items-center justify-center"
            aria-hidden="true"
             aria-label="یادداشت ها"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
                fill="#292D32"
              />
              <path
                opacity="0.4"
                d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2 19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z"
                fill="#292D32"
              />
              <path
                d="M11.75 14H6.75C6.34 14 6 13.66 6 13.25C6 12.84 6.34 12.5 6.75 12.5H11.75C12.16 12.5 12.5 12.84 12.5 13.25C12.5 13.66 12.16 14 11.75 14Z"
                fill="#292D32"
              />
              <path
                d="M15.75 18H6.75C6.34 18 6 17.66 6 17.25C6 16.84 6.34 16.5 6.75 16.5H15.75C16.16 16.5 16.5 16.84 16.5 17.25C16.5 17.66 16.16 18 15.75 18Z"
                fill="#292D32"
              />
            </svg>
          </button>
          <span className="absolute -top-2 left-7 transform bg-orange-darkest text-gray-lightest rounded-full  w-5 h-5 flex justify-center">
            <span aria-hidden="true">2</span>
          </span>
        </button>
      </div>
    </header>
  );
}
export default Header;












