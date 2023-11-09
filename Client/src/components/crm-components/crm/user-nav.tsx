import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";

export function UserNav() {
  return (
    <DropdownMenu>
      <div className="flex gap-4">
        <ModeToggle />
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent className="w-56" align="start" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-right leading-none">
              shadcn
            </p>
            <p className="text-xs leading-none text-right text-muted-foreground">
              m@example.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <DropdownMenuShortcut className="mr-auto ml-0">
              ⇧⌘P
            </DropdownMenuShortcut>
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuShortcut className="mr-auto ml-0">
              ⌘B
            </DropdownMenuShortcut>
            Billing
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuShortcut className="mr-auto ml-0">
              ⌘S
            </DropdownMenuShortcut>
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <DropdownMenuShortcut className="mr-auto ml-0">
            ⇧⌘Q
          </DropdownMenuShortcut>
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
