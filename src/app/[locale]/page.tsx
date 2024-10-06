import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 h-screen w-screen items-center justify-center bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500 p-2 sm:p-4 lg:p-8 text-white">
      <h1 className="text-4xl font-bold">Welcome to our app</h1>
      <Button as={Link} href="/intake" variant="solid">Create your tenant</Button>
    </div>
  );
}
