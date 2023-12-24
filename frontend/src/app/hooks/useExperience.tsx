import trip from "@public/images/trip.svg";

export type experiencePage = "Experience1" | "Experience2" | "Experience3";

const pageProperties = {
    Experience1: {
        title: "Automated Rationalisation",
        text: [
            "non ad deserunt pariatur ullamco labore ullamco aute labore ad ut sunt amet excepteur et sunt aliqua Lorem deserunt eu commodo labore consectetur ipsum id ex consequat consequat consectetur enim cupidatat adipisicing aute sit consequat anim exercitation sint id ad id anim minim dolore reprehenderit reprehenderit veniam minim adipisicing deserunt laborum nulla reprehenderit nostrud adipisicing elit amet consectetur.",
        ],
        image: trip,
        alt: "trip alt",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.945 511.945"
            >
                <path d="M481.839 308.707c-9.809 0-18.171 6.294-21.271 15.055h-10.161c-1.979 0-3.913-.8-5.307-2.193l-21.33-21.33c-4.186-4.186-9.985-6.587-15.913-6.587H386.12a134.819 134.819 0 005.125-30.18h61.451c3.341 12.974 15.14 22.588 29.143 22.588 16.591 0 30.088-13.498 30.088-30.088s-13.497-30.088-30.088-30.088c-14.002 0-25.801 9.614-29.143 22.588h-61.451a134.819 134.819 0 00-5.125-30.18h21.736c5.928 0 11.728-2.401 15.913-6.586l21.329-21.33a7.559 7.559 0 015.308-2.194h10.161c3.1 8.76 11.462 15.055 21.271 15.055 12.438 0 22.559-10.12 22.559-22.559s-10.12-22.559-22.559-22.559c-9.812 0-18.176 6.299-21.274 15.063h-10.159c-5.927 0-11.727 2.4-15.914 6.587l-21.33 21.331a7.555 7.555 0 01-5.306 2.192h-27.061c-5.876-13.874-14.007-26.568-23.92-37.633l5.402-5.403a7.546 7.546 0 015.298-2.194h10.167c3.099 8.761 11.462 15.057 21.271 15.057 12.438 0 22.559-10.12 22.559-22.559s-10.12-22.559-22.559-22.559c-9.811 0-18.174 6.297-21.272 15.061h-10.166c-5.92 0-11.717 2.401-15.904 6.587l-5.403 5.403a135.932 135.932 0 00-32.478-21.598l36.572-36.573c4.242-4.249 9.89-6.589 15.902-6.589h18.665c3.34 12.976 15.139 22.592 29.143 22.592 16.591 0 30.089-13.498 30.089-30.088 0-16.591-13.498-30.088-30.089-30.088-14.001 0-25.798 9.613-29.141 22.584h-18.667c-10.024 0-19.442 3.903-26.514 10.987l-41.093 41.094a134.636 134.636 0 00-35.203-6.689V25.091c0-9.496-5.977-18.005-14.874-21.176-33.323-11.864-70.883 3.989-85.092 37.318-40.322-14.538-81.92 16.585-80.655 58.515-35.14 8.861-53.994 46.922-41.144 80.095-55.564 35.455-55.564 116.798-.001 152.255-12.836 33.134 5.954 71.212 41.134 80.092a60.073 60.073 0 004.76 25.434 7.501 7.501 0 006.906 4.569c5.337 0 9.007-5.473 6.898-10.435-6.549-15.414-4.151-33.788 7.354-47.148a7.5 7.5 0 00-11.367-9.788 60.061 60.061 0 00-12.176 22.449c-24.66-7.046-38.572-33.907-30.12-58.121 9.35 3.966 18.966 5.93 21.021 5.93a7.504 7.504 0 007.382-6.223 7.499 7.499 0 00-6.112-8.668c-35.403-6.124-62.384-36.971-62.384-74.218 0-36.929 26.511-67.517 61.386-74.038a7.499 7.499 0 005.994-8.75c-.762-4.073-4.688-6.757-8.75-5.994a89.654 89.654 0 00-18.536 5.604c-8.445-24.197 5.438-51.071 30.12-58.123a60.245 60.245 0 0010.042 19.828 7.502 7.502 0 0011.897-9.137c-12.877-16.764-12.352-40.11 1.181-56.349 20.985-25.184 60.081-20.299 74.816 7.988a7.5 7.5 0 0010.116 3.186 7.499 7.499 0 003.187-10.116 60.068 60.068 0 00-19.557-21.999c10.232-25.702 39.471-39.708 66.667-30.025 2.936 1.046 4.907 3.877 4.907 7.045v95.602c-20.618 1.144-40.786 6.974-58.743 17.059a7.5 7.5 0 007.346 13.079c17.892-10.048 38.258-15.359 58.897-15.359 66.444 0 120.5 54.056 120.5 120.5s-54.056 120.5-120.5 120.5-120.5-54.056-120.5-120.5c0-32.187 12.541-62.455 35.313-85.227a7.5 7.5 0 00-10.607-10.606c-25.604 25.605-39.706 59.639-39.706 95.833 0 72.198 56.76 131.383 128 135.289v93.781c0 3.013-1.828 5.786-4.542 6.896-28.599 11.661-61.133 2.341-79.452-21.595a60.311 60.311 0 0015.081-8.39c3.291-2.515 3.92-7.222 1.404-10.513s-7.222-3.922-10.514-1.405c-14.499 11.082-33.705 11.997-48.759 3.911a7.5 7.5 0 00-10.156 3.059 7.5 7.5 0 003.059 10.156c10.42 5.597 22.371 7.972 34.145 6.864 21.304 33.029 63.647 46.975 100.863 31.8 8.427-3.446 13.871-11.604 13.871-20.782V391.26a134.677 134.677 0 0035.203-6.689l41.089 41.089c7.075 7.088 16.493 10.991 26.518 10.991h18.667c3.342 12.972 15.14 22.584 29.141 22.584 16.591 0 30.089-13.498 30.089-30.088s-13.498-30.088-30.089-30.088c-14.004 0-25.803 9.616-29.143 22.592h-18.665c-6.013 0-11.66-2.34-15.906-6.593l-36.568-36.568a135.962 135.962 0 0032.478-21.598l5.403 5.404c4.187 4.186 9.983 6.586 15.903 6.586h10.166c3.099 8.763 11.462 15.061 21.272 15.061 12.438 0 22.559-10.12 22.559-22.559s-10.12-22.559-22.559-22.559c-9.809 0-18.172 6.296-21.271 15.057h-10.167c-1.973 0-3.903-.8-5.297-2.193l-5.403-5.404c9.913-11.065 18.043-23.759 23.92-37.633h27.061c1.979 0 3.912.799 5.306 2.193l21.331 21.331c4.187 4.186 9.986 6.586 15.913 6.586h10.159c3.098 8.764 11.462 15.063 21.274 15.063 12.438 0 22.559-10.12 22.559-22.559s-10.119-22.559-22.557-22.559zm0-135.589c4.168 0 7.559 3.391 7.559 7.559s-3.391 7.559-7.559 7.559-7.56-3.391-7.56-7.559 3.392-7.559 7.56-7.559zm-82.825-30.117c4.168 0 7.559 3.391 7.559 7.559s-3.391 7.559-7.559 7.559-7.559-3.391-7.559-7.559 3.391-7.559 7.559-7.559zm15.059-75.294c8.32 0 15.089 6.769 15.089 15.088s-6.769 15.088-15.089 15.088c-8.319 0-15.088-6.769-15.088-15.088 0-8.32 6.769-15.088 15.088-15.088zm0 346.353c8.32 0 15.089 6.769 15.089 15.088 0 8.32-6.769 15.088-15.089 15.088-8.319 0-15.088-6.769-15.088-15.088 0-8.32 6.769-15.088 15.088-15.088zm-15.059-60.236c4.168 0 7.559 3.391 7.559 7.559s-3.391 7.559-7.559 7.559-7.559-3.391-7.559-7.559 3.391-7.559 7.559-7.559zm82.825-112.941c8.319 0 15.088 6.769 15.088 15.088s-6.769 15.088-15.088 15.088c-8.32 0-15.089-6.769-15.089-15.088s6.768-15.088 15.089-15.088zm0 97.941c-4.168 0-7.56-3.391-7.56-7.559s3.392-7.559 7.56-7.559 7.559 3.391 7.559 7.559-3.391 7.559-7.559 7.559z"></path>
                <path d="M208.483 345.935a7.5 7.5 0 009.436-4.843l5.462-16.982h35.083l5.406 16.963a7.5 7.5 0 1014.291-4.554l-28.388-89.084c-1.092-3.593-4.589-6.491-8.744-6.491-3.942 0-7.402 2.591-8.69 6.326l-28.698 89.231a7.496 7.496 0 004.842 9.434zm32.52-76.62l12.681 39.794h-25.479zM308.633 338.795v-90.353c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v90.353c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5zM201.008 203.651v-12c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v12c0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5zM325.904 203.651v-12c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v12c0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5zM278.074 208.221a7.5 7.5 0 00-11.309-9.855c-5.724 6.568-15.895 6.568-21.619 0a7.5 7.5 0 00-11.309 9.855c11.698 13.425 32.54 13.425 44.237 0z"></path>
            </svg>
        ),
        highlight: "£700k",
        context: "saved in cost of materials",
    },

    Experience2: {
        title: "Experience 2",
        text: [
            "non ad deserunt pariatur ullamco labore ullamco aute labore ad ut sunt amet excepteur et sunt aliqua Lorem deserunt eu commodo labore consectetur ipsum id ex consequat consequat consectetur enim cupidatat adipisicing aute sit consequat anim exercitation sint id ad id anim minim dolore reprehenderit reprehenderit veniam minim adipisicing deserunt laborum nulla reprehenderit nostrud adipisicing elit amet consectetur.",
        ],
        image: trip,
        alt: "trip alt",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.945 511.945"
            >
                <path d="M481.839 308.707c-9.809 0-18.171 6.294-21.271 15.055h-10.161c-1.979 0-3.913-.8-5.307-2.193l-21.33-21.33c-4.186-4.186-9.985-6.587-15.913-6.587H386.12a134.819 134.819 0 005.125-30.18h61.451c3.341 12.974 15.14 22.588 29.143 22.588 16.591 0 30.088-13.498 30.088-30.088s-13.497-30.088-30.088-30.088c-14.002 0-25.801 9.614-29.143 22.588h-61.451a134.819 134.819 0 00-5.125-30.18h21.736c5.928 0 11.728-2.401 15.913-6.586l21.329-21.33a7.559 7.559 0 015.308-2.194h10.161c3.1 8.76 11.462 15.055 21.271 15.055 12.438 0 22.559-10.12 22.559-22.559s-10.12-22.559-22.559-22.559c-9.812 0-18.176 6.299-21.274 15.063h-10.159c-5.927 0-11.727 2.4-15.914 6.587l-21.33 21.331a7.555 7.555 0 01-5.306 2.192h-27.061c-5.876-13.874-14.007-26.568-23.92-37.633l5.402-5.403a7.546 7.546 0 015.298-2.194h10.167c3.099 8.761 11.462 15.057 21.271 15.057 12.438 0 22.559-10.12 22.559-22.559s-10.12-22.559-22.559-22.559c-9.811 0-18.174 6.297-21.272 15.061h-10.166c-5.92 0-11.717 2.401-15.904 6.587l-5.403 5.403a135.932 135.932 0 00-32.478-21.598l36.572-36.573c4.242-4.249 9.89-6.589 15.902-6.589h18.665c3.34 12.976 15.139 22.592 29.143 22.592 16.591 0 30.089-13.498 30.089-30.088 0-16.591-13.498-30.088-30.089-30.088-14.001 0-25.798 9.613-29.141 22.584h-18.667c-10.024 0-19.442 3.903-26.514 10.987l-41.093 41.094a134.636 134.636 0 00-35.203-6.689V25.091c0-9.496-5.977-18.005-14.874-21.176-33.323-11.864-70.883 3.989-85.092 37.318-40.322-14.538-81.92 16.585-80.655 58.515-35.14 8.861-53.994 46.922-41.144 80.095-55.564 35.455-55.564 116.798-.001 152.255-12.836 33.134 5.954 71.212 41.134 80.092a60.073 60.073 0 004.76 25.434 7.501 7.501 0 006.906 4.569c5.337 0 9.007-5.473 6.898-10.435-6.549-15.414-4.151-33.788 7.354-47.148a7.5 7.5 0 00-11.367-9.788 60.061 60.061 0 00-12.176 22.449c-24.66-7.046-38.572-33.907-30.12-58.121 9.35 3.966 18.966 5.93 21.021 5.93a7.504 7.504 0 007.382-6.223 7.499 7.499 0 00-6.112-8.668c-35.403-6.124-62.384-36.971-62.384-74.218 0-36.929 26.511-67.517 61.386-74.038a7.499 7.499 0 005.994-8.75c-.762-4.073-4.688-6.757-8.75-5.994a89.654 89.654 0 00-18.536 5.604c-8.445-24.197 5.438-51.071 30.12-58.123a60.245 60.245 0 0010.042 19.828 7.502 7.502 0 0011.897-9.137c-12.877-16.764-12.352-40.11 1.181-56.349 20.985-25.184 60.081-20.299 74.816 7.988a7.5 7.5 0 0010.116 3.186 7.499 7.499 0 003.187-10.116 60.068 60.068 0 00-19.557-21.999c10.232-25.702 39.471-39.708 66.667-30.025 2.936 1.046 4.907 3.877 4.907 7.045v95.602c-20.618 1.144-40.786 6.974-58.743 17.059a7.5 7.5 0 007.346 13.079c17.892-10.048 38.258-15.359 58.897-15.359 66.444 0 120.5 54.056 120.5 120.5s-54.056 120.5-120.5 120.5-120.5-54.056-120.5-120.5c0-32.187 12.541-62.455 35.313-85.227a7.5 7.5 0 00-10.607-10.606c-25.604 25.605-39.706 59.639-39.706 95.833 0 72.198 56.76 131.383 128 135.289v93.781c0 3.013-1.828 5.786-4.542 6.896-28.599 11.661-61.133 2.341-79.452-21.595a60.311 60.311 0 0015.081-8.39c3.291-2.515 3.92-7.222 1.404-10.513s-7.222-3.922-10.514-1.405c-14.499 11.082-33.705 11.997-48.759 3.911a7.5 7.5 0 00-10.156 3.059 7.5 7.5 0 003.059 10.156c10.42 5.597 22.371 7.972 34.145 6.864 21.304 33.029 63.647 46.975 100.863 31.8 8.427-3.446 13.871-11.604 13.871-20.782V391.26a134.677 134.677 0 0035.203-6.689l41.089 41.089c7.075 7.088 16.493 10.991 26.518 10.991h18.667c3.342 12.972 15.14 22.584 29.141 22.584 16.591 0 30.089-13.498 30.089-30.088s-13.498-30.088-30.089-30.088c-14.004 0-25.803 9.616-29.143 22.592h-18.665c-6.013 0-11.66-2.34-15.906-6.593l-36.568-36.568a135.962 135.962 0 0032.478-21.598l5.403 5.404c4.187 4.186 9.983 6.586 15.903 6.586h10.166c3.099 8.763 11.462 15.061 21.272 15.061 12.438 0 22.559-10.12 22.559-22.559s-10.12-22.559-22.559-22.559c-9.809 0-18.172 6.296-21.271 15.057h-10.167c-1.973 0-3.903-.8-5.297-2.193l-5.403-5.404c9.913-11.065 18.043-23.759 23.92-37.633h27.061c1.979 0 3.912.799 5.306 2.193l21.331 21.331c4.187 4.186 9.986 6.586 15.913 6.586h10.159c3.098 8.764 11.462 15.063 21.274 15.063 12.438 0 22.559-10.12 22.559-22.559s-10.119-22.559-22.557-22.559zm0-135.589c4.168 0 7.559 3.391 7.559 7.559s-3.391 7.559-7.559 7.559-7.56-3.391-7.56-7.559 3.392-7.559 7.56-7.559zm-82.825-30.117c4.168 0 7.559 3.391 7.559 7.559s-3.391 7.559-7.559 7.559-7.559-3.391-7.559-7.559 3.391-7.559 7.559-7.559zm15.059-75.294c8.32 0 15.089 6.769 15.089 15.088s-6.769 15.088-15.089 15.088c-8.319 0-15.088-6.769-15.088-15.088 0-8.32 6.769-15.088 15.088-15.088zm0 346.353c8.32 0 15.089 6.769 15.089 15.088 0 8.32-6.769 15.088-15.089 15.088-8.319 0-15.088-6.769-15.088-15.088 0-8.32 6.769-15.088 15.088-15.088zm-15.059-60.236c4.168 0 7.559 3.391 7.559 7.559s-3.391 7.559-7.559 7.559-7.559-3.391-7.559-7.559 3.391-7.559 7.559-7.559zm82.825-112.941c8.319 0 15.088 6.769 15.088 15.088s-6.769 15.088-15.088 15.088c-8.32 0-15.089-6.769-15.089-15.088s6.768-15.088 15.089-15.088zm0 97.941c-4.168 0-7.56-3.391-7.56-7.559s3.392-7.559 7.56-7.559 7.559 3.391 7.559 7.559-3.391 7.559-7.559 7.559z"></path>
                <path d="M208.483 345.935a7.5 7.5 0 009.436-4.843l5.462-16.982h35.083l5.406 16.963a7.5 7.5 0 1014.291-4.554l-28.388-89.084c-1.092-3.593-4.589-6.491-8.744-6.491-3.942 0-7.402 2.591-8.69 6.326l-28.698 89.231a7.496 7.496 0 004.842 9.434zm32.52-76.62l12.681 39.794h-25.479zM308.633 338.795v-90.353c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v90.353c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5zM201.008 203.651v-12c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v12c0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5zM325.904 203.651v-12c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v12c0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5zM278.074 208.221a7.5 7.5 0 00-11.309-9.855c-5.724 6.568-15.895 6.568-21.619 0a7.5 7.5 0 00-11.309 9.855c11.698 13.425 32.54 13.425 44.237 0z"></path>
            </svg>
        ),
        highlight: "£700k",
        context: "saved in cost of materials",
    },

    Experience3: {
        title: "Experience 3",
        text: [
            "non ad deserunt pariatur ullamco labore ullamco aute labore ad ut sunt amet excepteur et sunt aliqua Lorem deserunt eu commodo labore consectetur ipsum id ex consequat consequat consectetur enim cupidatat adipisicing aute sit consequat anim exercitation sint id ad id anim minim dolore reprehenderit reprehenderit veniam minim adipisicing deserunt laborum nulla reprehenderit nostrud adipisicing elit amet consectetur.",
        ],
        image: trip,
        alt: "trip alt",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.945 511.945"
            >
                <path d="M481.839 308.707c-9.809 0-18.171 6.294-21.271 15.055h-10.161c-1.979 0-3.913-.8-5.307-2.193l-21.33-21.33c-4.186-4.186-9.985-6.587-15.913-6.587H386.12a134.819 134.819 0 005.125-30.18h61.451c3.341 12.974 15.14 22.588 29.143 22.588 16.591 0 30.088-13.498 30.088-30.088s-13.497-30.088-30.088-30.088c-14.002 0-25.801 9.614-29.143 22.588h-61.451a134.819 134.819 0 00-5.125-30.18h21.736c5.928 0 11.728-2.401 15.913-6.586l21.329-21.33a7.559 7.559 0 015.308-2.194h10.161c3.1 8.76 11.462 15.055 21.271 15.055 12.438 0 22.559-10.12 22.559-22.559s-10.12-22.559-22.559-22.559c-9.812 0-18.176 6.299-21.274 15.063h-10.159c-5.927 0-11.727 2.4-15.914 6.587l-21.33 21.331a7.555 7.555 0 01-5.306 2.192h-27.061c-5.876-13.874-14.007-26.568-23.92-37.633l5.402-5.403a7.546 7.546 0 015.298-2.194h10.167c3.099 8.761 11.462 15.057 21.271 15.057 12.438 0 22.559-10.12 22.559-22.559s-10.12-22.559-22.559-22.559c-9.811 0-18.174 6.297-21.272 15.061h-10.166c-5.92 0-11.717 2.401-15.904 6.587l-5.403 5.403a135.932 135.932 0 00-32.478-21.598l36.572-36.573c4.242-4.249 9.89-6.589 15.902-6.589h18.665c3.34 12.976 15.139 22.592 29.143 22.592 16.591 0 30.089-13.498 30.089-30.088 0-16.591-13.498-30.088-30.089-30.088-14.001 0-25.798 9.613-29.141 22.584h-18.667c-10.024 0-19.442 3.903-26.514 10.987l-41.093 41.094a134.636 134.636 0 00-35.203-6.689V25.091c0-9.496-5.977-18.005-14.874-21.176-33.323-11.864-70.883 3.989-85.092 37.318-40.322-14.538-81.92 16.585-80.655 58.515-35.14 8.861-53.994 46.922-41.144 80.095-55.564 35.455-55.564 116.798-.001 152.255-12.836 33.134 5.954 71.212 41.134 80.092a60.073 60.073 0 004.76 25.434 7.501 7.501 0 006.906 4.569c5.337 0 9.007-5.473 6.898-10.435-6.549-15.414-4.151-33.788 7.354-47.148a7.5 7.5 0 00-11.367-9.788 60.061 60.061 0 00-12.176 22.449c-24.66-7.046-38.572-33.907-30.12-58.121 9.35 3.966 18.966 5.93 21.021 5.93a7.504 7.504 0 007.382-6.223 7.499 7.499 0 00-6.112-8.668c-35.403-6.124-62.384-36.971-62.384-74.218 0-36.929 26.511-67.517 61.386-74.038a7.499 7.499 0 005.994-8.75c-.762-4.073-4.688-6.757-8.75-5.994a89.654 89.654 0 00-18.536 5.604c-8.445-24.197 5.438-51.071 30.12-58.123a60.245 60.245 0 0010.042 19.828 7.502 7.502 0 0011.897-9.137c-12.877-16.764-12.352-40.11 1.181-56.349 20.985-25.184 60.081-20.299 74.816 7.988a7.5 7.5 0 0010.116 3.186 7.499 7.499 0 003.187-10.116 60.068 60.068 0 00-19.557-21.999c10.232-25.702 39.471-39.708 66.667-30.025 2.936 1.046 4.907 3.877 4.907 7.045v95.602c-20.618 1.144-40.786 6.974-58.743 17.059a7.5 7.5 0 007.346 13.079c17.892-10.048 38.258-15.359 58.897-15.359 66.444 0 120.5 54.056 120.5 120.5s-54.056 120.5-120.5 120.5-120.5-54.056-120.5-120.5c0-32.187 12.541-62.455 35.313-85.227a7.5 7.5 0 00-10.607-10.606c-25.604 25.605-39.706 59.639-39.706 95.833 0 72.198 56.76 131.383 128 135.289v93.781c0 3.013-1.828 5.786-4.542 6.896-28.599 11.661-61.133 2.341-79.452-21.595a60.311 60.311 0 0015.081-8.39c3.291-2.515 3.92-7.222 1.404-10.513s-7.222-3.922-10.514-1.405c-14.499 11.082-33.705 11.997-48.759 3.911a7.5 7.5 0 00-10.156 3.059 7.5 7.5 0 003.059 10.156c10.42 5.597 22.371 7.972 34.145 6.864 21.304 33.029 63.647 46.975 100.863 31.8 8.427-3.446 13.871-11.604 13.871-20.782V391.26a134.677 134.677 0 0035.203-6.689l41.089 41.089c7.075 7.088 16.493 10.991 26.518 10.991h18.667c3.342 12.972 15.14 22.584 29.141 22.584 16.591 0 30.089-13.498 30.089-30.088s-13.498-30.088-30.089-30.088c-14.004 0-25.803 9.616-29.143 22.592h-18.665c-6.013 0-11.66-2.34-15.906-6.593l-36.568-36.568a135.962 135.962 0 0032.478-21.598l5.403 5.404c4.187 4.186 9.983 6.586 15.903 6.586h10.166c3.099 8.763 11.462 15.061 21.272 15.061 12.438 0 22.559-10.12 22.559-22.559s-10.12-22.559-22.559-22.559c-9.809 0-18.172 6.296-21.271 15.057h-10.167c-1.973 0-3.903-.8-5.297-2.193l-5.403-5.404c9.913-11.065 18.043-23.759 23.92-37.633h27.061c1.979 0 3.912.799 5.306 2.193l21.331 21.331c4.187 4.186 9.986 6.586 15.913 6.586h10.159c3.098 8.764 11.462 15.063 21.274 15.063 12.438 0 22.559-10.12 22.559-22.559s-10.119-22.559-22.557-22.559zm0-135.589c4.168 0 7.559 3.391 7.559 7.559s-3.391 7.559-7.559 7.559-7.56-3.391-7.56-7.559 3.392-7.559 7.56-7.559zm-82.825-30.117c4.168 0 7.559 3.391 7.559 7.559s-3.391 7.559-7.559 7.559-7.559-3.391-7.559-7.559 3.391-7.559 7.559-7.559zm15.059-75.294c8.32 0 15.089 6.769 15.089 15.088s-6.769 15.088-15.089 15.088c-8.319 0-15.088-6.769-15.088-15.088 0-8.32 6.769-15.088 15.088-15.088zm0 346.353c8.32 0 15.089 6.769 15.089 15.088 0 8.32-6.769 15.088-15.089 15.088-8.319 0-15.088-6.769-15.088-15.088 0-8.32 6.769-15.088 15.088-15.088zm-15.059-60.236c4.168 0 7.559 3.391 7.559 7.559s-3.391 7.559-7.559 7.559-7.559-3.391-7.559-7.559 3.391-7.559 7.559-7.559zm82.825-112.941c8.319 0 15.088 6.769 15.088 15.088s-6.769 15.088-15.088 15.088c-8.32 0-15.089-6.769-15.089-15.088s6.768-15.088 15.089-15.088zm0 97.941c-4.168 0-7.56-3.391-7.56-7.559s3.392-7.559 7.56-7.559 7.559 3.391 7.559 7.559-3.391 7.559-7.559 7.559z"></path>
                <path d="M208.483 345.935a7.5 7.5 0 009.436-4.843l5.462-16.982h35.083l5.406 16.963a7.5 7.5 0 1014.291-4.554l-28.388-89.084c-1.092-3.593-4.589-6.491-8.744-6.491-3.942 0-7.402 2.591-8.69 6.326l-28.698 89.231a7.496 7.496 0 004.842 9.434zm32.52-76.62l12.681 39.794h-25.479zM308.633 338.795v-90.353c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v90.353c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5zM201.008 203.651v-12c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v12c0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5zM325.904 203.651v-12c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v12c0 4.142 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5zM278.074 208.221a7.5 7.5 0 00-11.309-9.855c-5.724 6.568-15.895 6.568-21.619 0a7.5 7.5 0 00-11.309 9.855c11.698 13.425 32.54 13.425 44.237 0z"></path>
            </svg>
        ),
        highlight: "£700k",
        context: "saved in cost of materials",
    },
};

const useExperience = (page: experiencePage) => {
    return pageProperties[page];
};

export default useExperience;
