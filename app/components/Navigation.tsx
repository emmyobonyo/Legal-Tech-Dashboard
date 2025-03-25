import Image from "next/image";
import { AttorneyInformation } from "./AttorneyInformation";

export function Navigation() {
  return (
    <nav className="flex items-center justify-between w-full px-4 py-2 bg-white shadow-md rounded-l-full rounded-r-full hover:shadow-xl border border-gray-300">
      <div className="font-bold text-2xl">Legal Tech Dashboard</div>

      <div>
        <AttorneyInformation />
      </div>
    </nav>
  );
}
