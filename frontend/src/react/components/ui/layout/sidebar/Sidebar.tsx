import './Sidebar.scss';

import { sidebarItems } from "../../../../../constants/config";
import SidebarLink from "./SidebarLink";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="content">
            <nav>
                <ul>
                    {sidebarItems.map((item) => (
                        <li key={item.path}>
                            <SidebarLink path={item.path} >{item.label}</SidebarLink>
                        </li>
                        
                    ))}
                </ul>
            </nav>
        </div>
        
    </aside>
  );
};