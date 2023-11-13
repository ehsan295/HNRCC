import { MainNav } from "./main-nav";
import TeamSwitcher from "./team-switcher";
import { UserNav } from "./user-nav";

function TopNav() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-8">
        <TeamSwitcher />
        <MainNav className="mx-6" />
        <div className="mr-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
