export const LikeIcon = (props) => {
  const { liked } = props;
  console.log(liked);
  if (liked) {
    return (
      <svg
        className=" stroke-red"
        width="15"
        height="17"
        viewBox="0 0 15 17"
        // fill="current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.09076 1.53713C6.82256 0.613071 8.2243 0.611345 8.95808 1.53392L14.0657 7.95526C14.8337 8.92048 14.1539 10.3466 12.9208 10.3587L11.5331 10.3725L11.5318 15.0372C11.5318 15.2776 11.4844 15.5156 11.3923 15.7377C11.3002 15.9598 11.1652 16.1616 10.9951 16.3315C10.825 16.5014 10.6231 16.6361 10.4009 16.728C10.1788 16.8198 9.94065 16.867 9.70023 16.8668L5.34195 16.8628C4.85699 16.8623 4.39208 16.6692 4.04935 16.3261C3.70662 15.983 3.51408 15.5179 3.51404 15.033L3.51355 10.3735L2.15815 10.3727C0.91958 10.372 0.228693 8.94266 0.996975 7.97177L6.09076 1.53713ZM8.27582 2.07618C8.18593 1.96317 8.07167 1.87192 7.94157 1.80926C7.81147 1.7466 7.6689 1.71414 7.52449 1.7143C7.38009 1.71447 7.23759 1.74726 7.10764 1.81022C6.97768 1.87318 6.86363 1.96469 6.77401 2.07791L1.68022 8.51255C1.36399 8.91259 1.64818 9.50094 2.15839 9.50143L3.94958 9.50217C4.0068 9.50217 4.06347 9.51343 4.11635 9.53533C4.16922 9.55723 4.21727 9.58933 4.25773 9.62979C4.2982 9.67026 4.3303 9.7183 4.3522 9.77118C4.37409 9.82405 4.38536 9.88072 4.38535 9.93795L4.38511 15.033C4.38518 15.287 4.4861 15.5307 4.6657 15.7104C4.84529 15.89 5.08888 15.9911 5.34293 15.9913L9.70122 15.9952C9.82714 15.9953 9.95184 15.9706 10.0682 15.9225C10.1846 15.8744 10.2903 15.8038 10.3794 15.7148C10.4685 15.6258 10.5392 15.5201 10.5874 15.4038C10.6356 15.2875 10.6605 15.1628 10.6605 15.0369L10.6618 9.94091C10.6617 9.82609 10.707 9.71591 10.7878 9.63431C10.8686 9.55271 10.9783 9.50628 11.0931 9.50513L12.9121 9.48738C13.4199 9.48245 13.6996 8.89509 13.3836 8.49776L8.27582 2.07618Z"
          fill="#6F6F6F"
        />
      </svg>
    );
  } else {
    return (
      <svg
        width="15"
        height="17"
        viewBox="0 0 15 17"
        // fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" active:stroke-red active:stroke-2"
      >
        <path
          d="M6.09076 1.53713C6.82256 0.613071 8.2243 0.611345 8.95808 1.53392L14.0657 7.95526C14.8337 8.92048 14.1539 10.3466 12.9208 10.3587L11.5331 10.3725L11.5318 15.0372C11.5318 15.2776 11.4844 15.5156 11.3923 15.7377C11.3002 15.9598 11.1652 16.1616 10.9951 16.3315C10.825 16.5014 10.6231 16.6361 10.4009 16.728C10.1788 16.8198 9.94065 16.867 9.70023 16.8668L5.34195 16.8628C4.85699 16.8623 4.39208 16.6692 4.04935 16.3261C3.70662 15.983 3.51408 15.5179 3.51404 15.033L3.51355 10.3735L2.15815 10.3727C0.91958 10.372 0.228693 8.94266 0.996975 7.97177L6.09076 1.53713ZM8.27582 2.07618C8.18593 1.96317 8.07167 1.87192 7.94157 1.80926C7.81147 1.7466 7.6689 1.71414 7.52449 1.7143C7.38009 1.71447 7.23759 1.74726 7.10764 1.81022C6.97768 1.87318 6.86363 1.96469 6.77401 2.07791L1.68022 8.51255C1.36399 8.91259 1.64818 9.50094 2.15839 9.50143L3.94958 9.50217C4.0068 9.50217 4.06347 9.51343 4.11635 9.53533C4.16922 9.55723 4.21727 9.58933 4.25773 9.62979C4.2982 9.67026 4.3303 9.7183 4.3522 9.77118C4.37409 9.82405 4.38536 9.88072 4.38535 9.93795L4.38511 15.033C4.38518 15.287 4.4861 15.5307 4.6657 15.7104C4.84529 15.89 5.08888 15.9911 5.34293 15.9913L9.70122 15.9952C9.82714 15.9953 9.95184 15.9706 10.0682 15.9225C10.1846 15.8744 10.2903 15.8038 10.3794 15.7148C10.4685 15.6258 10.5392 15.5201 10.5874 15.4038C10.6356 15.2875 10.6605 15.1628 10.6605 15.0369L10.6618 9.94091C10.6617 9.82609 10.707 9.71591 10.7878 9.63431C10.8686 9.55271 10.9783 9.50628 11.0931 9.50513L12.9121 9.48738C13.4199 9.48245 13.6996 8.89509 13.3836 8.49776L8.27582 2.07618Z"
          fill="#6F6F6F"
        />
      </svg>
    );
  }
};
