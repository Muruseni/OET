import { DndContext } from '@dnd-kit/core';
import { useMagnetStore } from './store/useMagnetStore';
import { WordMagnet } from './components/WordMagnet';
import { FridgeDoor } from './components/FridgeDoor';

function App() {
  const magnets = useMagnetStore((s) => s.magnets);
  const updateMagnet = useMagnetStore((s) => s.updateMagnet);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over?.id === 'fridge') {
      const magnetRect = active.rect.current.translated;
      const fridgeRect = over.rect;
      const x = magnetRect.left - fridgeRect.left;
      const y = magnetRect.top - fridgeRect.top;
      updateMagnet(active.id, { status: 'fridge', x, y });
    } else {
      updateMagnet(active.id, { status: 'bank', x: 0, y: 0 });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <header className="print:hidden p-4 text-center text-2xl font-bold">Fridge Magnet Poetry</header>
      <div className="flex gap-4 print:hidden">
        <div className="w-1/3 p-2">
          <h2 className="font-semibold mb-2">Word Bank</h2>
          <div className="flex flex-wrap">
            {magnets.filter((m) => m.status === 'bank').map((m) => (
              <WordMagnet key={m.id} magnet={m} />
            ))}
          </div>
        </div>
        <div className="w-2/3">
          <FridgeDoor>
            {magnets.filter((m) => m.status === 'fridge').map((m) => (
              <WordMagnet key={m.id} magnet={m} />
            ))}
          </FridgeDoor>
        </div>
      </div>
      <div className="print:hidden flex justify-center mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => window.print()}>
          Print Poem
        </button>
      </div>
    </DndContext>
  );
}

export default App;
