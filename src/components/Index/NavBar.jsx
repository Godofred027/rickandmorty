import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center">
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
