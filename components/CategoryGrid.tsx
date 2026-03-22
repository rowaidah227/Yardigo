'use client';

interface CategoryGridProps {
  onCategoryClick: (category: string) => void;
}

const categories = [
  { name: 'Materials', icon: '🪨', description: 'Steel, lumber, concrete materials' },
  { name: 'Dirt & Aggregate', icon: '⛏️', description: 'Fill dirt, gravel, topsoil' },
  { name: 'Concrete', icon: '🏗️', description: 'Ready mix, leftover concrete' },
  { name: 'Equipment', icon: '🚜', description: 'Excavators, compactors, skid steers' },
  { name: 'Hauling', icon: '🚚', description: 'Dump trucks, material transport' },
  { name: 'Labor & Crews', icon: '👷', description: 'Trades, crews, services' },
];

export default function CategoryGrid({ onCategoryClick }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => onCategoryClick(cat.name)}
          className="p-4 bg-white border border-slate-200 rounded hover:shadow-md transition-shadow text-left hover:border-slate-400"
        >
          <div className="text-3xl mb-2">{cat.icon}</div>
          <h3 className="font-semibold text-slate-900 text-sm mb-1">
            {cat.name}
          </h3>
          <p className="text-xs text-slate-600">{cat.description}</p>
        </button>
      ))}
    </div>
  );
}
