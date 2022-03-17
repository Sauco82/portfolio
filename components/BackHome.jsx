import Link from "next/link";

export default function BackHome(){
  return(
    <p className="align-center mb-5">
      <Link href="/">Back to the homepage</Link>
    </p>
  );
}