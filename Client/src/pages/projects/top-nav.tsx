import ProjectSwitcher from "./project-switcher";
import { UserNav } from "./user-nav";

function TopNav() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-6">
        <ProjectSwitcher />

        <div className="mr-auto flex items-center space-x-4">
          <UserNav />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
