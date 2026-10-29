export default function Logo({ className = "h-6 w-6", strokeWidth = 2.4 }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <rect x="2.2" y="2.2" width="27.6" height="27.6" rx="7.5" stroke="currentColor" strokeWidth={strokeWidth} />
      <path
        d="M8.5 20.5 L13.5 12 L17.5 17.5 L23.5 8.5"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="23.5" cy="8.5" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}
