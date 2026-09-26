import type { Tache } from './types';

interface TacheItemProps {
  tache: Tache;
  onToggle: (id: number) => void;
}

export function TacheItem({ tache, onToggle }: TacheItemProps) {
  return (
    <li onClick={() => onToggle(tache.id)} style={{ textDecoration: tache.fait ? 'line-through' : 'none' }}>
      {tache.libelle}
    </li>
  );
}