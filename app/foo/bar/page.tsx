import Link from "next/link";

export default function bars() {
    return (
      <div>
        <h1 className="font-bold text-2xl m-4 text-center my-4">bar</h1>
        <Link className='text-blue-800 block border-2 border-black p-2 m-2 w-fit mb-8'
                href="/">
                  go back
              </Link>
      </div>
    );
  }