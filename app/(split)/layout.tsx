import Link from "next/link";
import { Fragment } from "react";

export default function RoboticsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <header>
        <Link href="/"><h1>Robotics Hall of Fame</h1></Link>
        <div className="text-sm">Check separate HoF: {" "}
          <Link href="/rss">RSS</Link> / {" "}
          <Link href="/scirobotics">SR</Link> / {" "}
          <Link href="/tro">TRO</Link> / {" "}
          <Link href="/ijrr">IJRR</Link>
        </div>
      </header>
      {children}
      <footer>
        <div>
          © {new Date().getFullYear()}{" "}
          <Link href="https://matchy.bio">Matchy</Link>{" "}
          | <Link href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</Link>
        </div>
      </footer>
    </Fragment>
  );
}
