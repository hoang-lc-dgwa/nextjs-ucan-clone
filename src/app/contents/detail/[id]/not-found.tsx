import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <p>Could not find the requested invoice.</p>
      <Link href="/" className="c-btn">
        Go Back
      </Link>
    </main>
  );
}
