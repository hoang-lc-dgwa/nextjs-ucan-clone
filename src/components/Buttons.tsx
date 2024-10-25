interface ButtonProps {
  className?: string;
}

export default function Button({ className }: ButtonProps) {
  return (
    <a
      href="https://job.mynavi.jp/25/pc/search/corp72921/outline.html"
      target="_blank"
      className={`c-btn ${className || ""}`}
    >
      <span>ENTRY</span>
    </a>
  );
}
