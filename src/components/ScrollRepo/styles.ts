import styled from "styled-components";
import * as ScrollArea from '@radix-ui/react-scroll-area';

export const ScrollAreaRoot = styled(ScrollArea.Root)`
    width: 200px;
    height: 225px;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 10px var(--blackA7);
    background-color: white;
    --scrollbar-size: 10px;
`