import { useContext } from "solid-js"
import { PopoverContext } from "../../context/PopoverContext";

export const usePopover = () => {
    const context = useContext(PopoverContext);

    return context;
}