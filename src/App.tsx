import { useState } from 'react';
import type { Tache } from './types';
import { TacheItem } from './TacheItem';

function App() {
  const [taches, setTaches] = useState<Tache[]>([
    { id: 1, libelle: 'Apprendre Git', fait: false },
    { id: 2, libelle: 'Apprendre React', fait: false },
  ]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  function ajouterTache() {
    if (!nouvelleTache.trim()) return;
    setTaches([...taches, { id: Date.now(), libelle: nouvelleTache, fait: false }]);
    setNouvelleTache('');
  }

  function toggleTache(id: number) {
    setTaches(taches.map(t => t.id === id ? { ...t, fait: !t.fait } : t));
  }

  return (
    <div>
      <h1>Ma Todo-list</h1>
      <input value={nouvelleTache} onChange={e => setNouvelleTache(e.target.value)} />
      <button onClick={ajouterTache}>Ajouter</button>
      <ul>
        {taches.map(t => <TacheItem key={t.id} tache={t} onToggle={toggleTache} />)}
      </ul>
    </div>
  );
}

export default App;