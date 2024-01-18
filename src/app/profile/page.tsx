import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-xl capitalize font-medium py-2">
      <h1 className="text-4xl font-bold mb-5">profile</h1>
      <hr />
      <p>profile page</p>

      <Link href={"profile/123"}>pro</Link>
      <Toaster />
    </div>
  );
}
