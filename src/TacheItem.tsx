import type { Tache } from './types';

interface TacheItemProps {
  tache: Tache;
  // Le composant parent garde la responsabilité de modifier la liste.
  onToggle: (id: number) => void;
}

export function TacheItem({ tache, onToggle }: TacheItemProps) {
  return (
    <li onClick={() => onToggle(tache.id)} style={{ textDecoration: tache.fait ? 'line-through' : 'none' }}>
      {tache.libelle}
    </li>
  );
}