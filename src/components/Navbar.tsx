import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";

const Navbar = () => {
  return (
    <div className="bg-neutral-800 hover:text-[#efefed]">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <div className="hidden md:flex gap-8 items-center text-amber-50">
          <p className=" hover:text-[#efefed] ">
            <Link href="#Jumbotron">Home</Link>
          </p>
          <p className=" hover:text-[#efefed] ">
            <Link href="#AboutMe">About Me</Link>
          </p>
          <p className=" hover:text-[#efefed]">
            <Link href="#ContactMe">Contact Me</Link>
          </p>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <AlignJustify />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <Link href="#AboutMe">
                <DropdownMenuItem>About Me</DropdownMenuItem>
              </Link>
              <Link href="#ContactMe">
                <DropdownMenuItem>Contact Me</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
