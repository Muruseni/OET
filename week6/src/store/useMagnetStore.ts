import { create } from 'zustand';
import { Magnet } from '../types/Magnet';

interface MagnetStore {
  magnets: Magnet[];
  updateMagnet: (id: string, updates: Partial<Magnet>) => void;
  loadExpansionPack: (words: string[]) => void;
}

export const useMagnetStore = create<MagnetStore>((set) => ({
  magnets: [
    { id: '1', word: 'love', status: 'bank', x: 0, y: 0 },
    { id: '2', word: 'moon', status: 'bank', x: 0, y: 0 },
    { id: '3', word: 'shine', status: 'bank', x: 0, y: 0 },
    { id: '4', word: 'dream', status: 'bank', x: 0, y: 0 },
  ],
  updateMagnet: (id, updates) =>
    set((state) => ({
      magnets: state.magnets.map((m) =>
        m.id === id ? { ...m, ...updates } : m
      ),
    })),
  loadExpansionPack: (words) =>
    set((state) => ({
      magnets: [
        ...state.magnets,
        ...words.map((word, i) => ({
          id: `exp-${Date.now()}-${i}`,
          word,
          status: 'bank',
          x: 0,
          y: 0,
        })),
      ],
    })),
}));
