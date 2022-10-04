import Link from "next/link";

const Footer = () => {
  return (
    <footer className="my-4 grid w-full place-items-center text-center text-xs">
      <div>
        <p>
          <strong>Created</strong> by{" "}
          <Link href="https://github.com/jlmodell" passHref>
            <a>jlmodell</a>
          </Link>
          .
        </p>
        <p>
          <strong>Source</strong> is located at{" "}
          <Link
            passHref
            href="https://github.com/jlmodell/mansari_ups_box_picker"
          >
            <a className="font-indigo-400">GitHub</a>
          </Link>
          .
        </p>
        <p>&copy; {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;
