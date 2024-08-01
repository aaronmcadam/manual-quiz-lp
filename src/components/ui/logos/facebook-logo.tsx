type FacebookLogoProps = {
  size?: number;
  className: string;
};

export function FacebookLogo({ size = 24, className }: FacebookLogoProps) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M9.52866 22L9.5 13.25H5.75V9.5H9.5V7C9.5 3.626 11.5894 2 14.5992 2C16.041 2 17.2801 2.10734 17.6412 2.15531V5.68134L15.5537 5.68229C13.9168 5.68229 13.5998 6.46012 13.5998 7.60155V9.5H18.25L17 13.25H13.5998V22H9.52866Z"
      />
    </svg>
  );
}
