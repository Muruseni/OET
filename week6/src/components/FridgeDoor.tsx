import { useDroppable } from '@dnd-kit/core';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export function FridgeDoor({ children }: Props) {
  const { setNodeRef, isOver } = useDroppable({ id: 'fridge' });

  return (
    <div
      ref={setNodeRef}
      className={`relative w-full h-[500px] bg-blue-100 border-4 rounded-lg transition-colors ${
        isOver ? 'border-blue-500' : 'border-blue-300'
      }`}
    >
      {children}
    </div>
  );
}
