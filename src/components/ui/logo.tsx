type LogoProps = {
  size?: number;
  color?: string;
};

// TODO: Import the brand colour from the tailwind theme
export function Logo({ size = 40, color = "#0B3B3C" }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        fill={color}
        fillRule="evenodd"
        d="M10.7 37.038c-.678 0-1.102-.514-1.102-1.356 0-3.976 7.89-13.009 15.761-20.665-1.33 8.599-10.124 22.021-14.66 22.021ZM38.944 1.503c-1.083.026-3.305.11-5.254.138-.686.01-.96.318-.872.76.104.521.447.907.964.92.665.018 1.556-.093 2.699-.149-2.598 1.999-5.74 4.625-8.983 7.548-.38-2.94-1.744-5.292-4.426-5.292-3.898 0-7.796 5.932-9.491 9.237-.17-2.711-1.356-5.254-3.898-5.254C4.397 9.411 0 21.44 0 23.24c0 .615.704 1.087 1.127 1.087.509 0 .674-.254.844-.847 2.203-7.203 5.508-12.204 7.712-12.204 1.101 0 1.949 1.272 1.949 4.238 0 2.182-.372 3.507-.372 4.024 0 .808.71 1.23 1.134 1.23.509 0 .678-.254.933-.847 2.542-6.272 6.694-12.543 9.66-12.543 1.461 0 2.455 1.866 2.537 5.149C16.63 20.776 7.67 30.718 7.67 35.609c0 2.035 1.123 3.209 2.944 3.209 6.538 0 16.77-16.25 16.993-25.952 3.638-3.423 7.107-6.413 9.604-8.315-.384.954-.772 1.881-.969 2.574-.144.506-.056 1.063.566 1.306.394.153.745-.07.9-.51.938-2.676 1.421-3.774 1.995-5.306.375-1.002.335-1.138-.76-1.112Z"
        clipRule="evenodd"
      />
    </svg>
  );
}