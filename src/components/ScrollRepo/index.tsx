import * as ScrollArea from '@radix-ui/react-scroll-area';
import './styles.ts';
import { ScrollAreaRoot } from './styles';

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export function ScrollRepo () {
    return (
        <ScrollAreaRoot className="ScrollAreaRoot">
        <ScrollArea.Viewport className="ScrollAreaViewport">
          <div style={{ padding: '15px 20px' }}>
            <div className="Text">Tags</div>
            {TAGS.map((tag) => (
              <div className="Tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
          <ScrollArea.Thumb className="ScrollAreaThumb" />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner className="ScrollAreaCorner" />
      </ScrollAreaRoot>
    )
}