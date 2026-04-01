import { NavLink } from "react-router-dom";
import { sidebarItems } from "../../../../constants/config";

import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
        <nav>
            {sidebarItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                    isActive ? "link active" : "link"
                    }
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    </aside>
  );
};