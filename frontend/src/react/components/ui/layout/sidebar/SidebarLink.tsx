import "./SidebarLink.scss";
import { NavLink } from "react-router-dom";

interface SidebarLinkProps {
    path: string;
    children: string
}

export const SidebarLink = ({ path, children }: SidebarLinkProps) => {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
            isActive ? "link link--active" : "link"
            }
        >
            {children}
        </NavLink>
    );
};

export default SidebarLink;