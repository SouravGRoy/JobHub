import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavMenu = () => {
  return (
    <div className="border p-2 rounded-md hover:shadow-lg transition duration-300 ">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-white">
          Socials
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div>
            <DropdownMenuItem>Linkden </DropdownMenuItem>
          </div>

          <DropdownMenuItem>Twitter</DropdownMenuItem>
          <DropdownMenuItem>Instagram</DropdownMenuItem>
          <DropdownMenuItem>Github</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavMenu;
