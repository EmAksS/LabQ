import { Show, type ParentProps } from "solid-js";
import { PopoverContext } from "./context/PopoverContext";
import { HoverCard } from "@kobalte/core/hover-card";
import "./Popover.scss";
import { usePopover } from "./scripts/hooks/usePopover";

interface PopoverProps extends ParentProps {
    label: any;
    onOpenChange?: (open: boolean) => void;
}

export default function Popover(props: PopoverProps){

    const isNested = usePopover();

    return (
        <PopoverContext.Provider value={true}>
            <HoverCard 
            placement="bottom" 
            flip={true}
            slide={true}
            >

                <HoverCard.Trigger class="popover">
                    {props.children}
                </HoverCard.Trigger>

                <Show when={isNested} fallback={
                    <HoverCard.Portal>
                        <HoverCard.Content class="popover__content">
                            <HoverCard.Arrow />
                            {props.label}
                        </HoverCard.Content>
                    </HoverCard.Portal>
                }>
                    <HoverCard.Content class="popover__content">
                        <HoverCard.Arrow />
                        {props.label}
                    </HoverCard.Content>
                </Show>
            </HoverCard>
        </PopoverContext.Provider>
        
    )
}