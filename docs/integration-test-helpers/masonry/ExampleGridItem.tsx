import { useEffect, useState } from 'react';

type Props = {
  data: any;
  expanded: boolean;
  itemIdx: number;
};

export default function ExampleGridItem({ data = {}, itemIdx, expanded }: Props) {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    // @ts-expect-error - TS2339 - Property 'ITEM_MOUNT_COUNT' does not exist on type 'Window & typeof globalThis'.
    const mountCount = window.ITEM_MOUNT_COUNT || 0;
    // @ts-expect-error - TS2339 - Property 'ITEM_MOUNT_COUNT' does not exist on type 'Window & typeof globalThis'.
    window.ITEM_MOUNT_COUNT = mountCount + 1;
  }, []);

  function incrementStateCounter() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  const isMultiColItem = data.columnSpan && data.columnSpan !== 1;

  return (
    <div
      style={{
        padding: '0 7px 14px',
      }}
    >
      <div
        style={{
          height: expanded ? data.height + 100 : data.height,
          border: '1px solid #ff0000',
          background: isMultiColItem ? 'black' : data.color,
          color: isMultiColItem ? 'white' : undefined,
        }}
      >
        <div>
          {data.name} • {data.height}px
          {isMultiColItem ? ` • columnSpan: ${data.columnSpan}` : ''}
        </div>
        <div>Slot Index: {itemIdx}</div>
        <div>
          <button id={`increment-counter-${itemIdx}`} onClick={incrementStateCounter} type="button">
            Increment counter:
          </button>
          {'(Current '}
          <span id={`item-counter-${itemIdx}`}>{counter}</span>)
        </div>
      </div>
    </div>
  );
}
