export default function Footer() {
  return (
    <footer className="mt-10 p-4 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Bex & Oli. All rights reserved.
      <br />
        <span className="text-gray-300 text-xs">
          (Psst… check out <a href="https://oliverscubadiving.com" target="_blank" rel="noreferrer" className="underline hover:text-blue-400">Oliver’s scuba site</a> for training & courses)
        </span>
    </footer>
  );
}
