import { useDraggable } from '@dnd-kit/core';
import { Magnet } from '../types/Magnet';

interface Props {
  magnet: Magnet;
}

export function WordMagnet({ magnet }: Props) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: magnet.id,
  });

  const style =
    magnet.status === 'fridge'
      ? {
          position: 'absolute' as const,
          left: magnet.x,
          top: magnet.y,
          zIndex: 10,
          cursor: 'grab',
        }
      : { position: 'relative' as const, cursor: 'grab' };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`select-none px-2 py-1 m-1 bg-white border rounded shadow ${
        magnet.status === 'fridge' ? '' : 'hover:bg-gray-100'
      }`}
    >
      {magnet.word}
    </div>
  );
}
