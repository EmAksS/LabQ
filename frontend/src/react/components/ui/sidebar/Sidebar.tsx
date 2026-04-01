import { NavLink } from "react-router-dom";
import { sidebarItems } from "../../../../constants/config";

import './Sidebar.scss';

export const Sidebar = () => {
  return (
    <aside className="sidebar">
        <div className="content">
            <nav>
                <ul>
                    {sidebarItems.map((item) => (
                        <li key={item.path}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                isActive ? "link active" : "link"
                                }
                            >
                                {item.label}
                            </NavLink>
                        </li>
                        
                    ))}
                </ul>
                
            </nav>
        </div>
        
    </aside>
  );
};