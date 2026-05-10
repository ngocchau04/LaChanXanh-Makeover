import { Home, Map, HelpCircle, User } from 'lucide-react';

export default function BottomNav({ current, onNavigate }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Trang chủ' },
    { id: 'learning_map', icon: Map, label: 'Bản đồ' },
    { id: 'quiz_select', icon: HelpCircle, label: 'Đố vui' },
    { id: 'profile', icon: User, label: 'Cá nhân' },
  ];

  return (
    <div className="absolute bottom-0 left-0 right-0 bg-surface border-t border-outline-variant/20 px-4 py-3 flex justify-between items-center rounded-b-3xl z-50">
      {navItems.map((item) => {
        const isActive = current === item.id;
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => {
              if(item.id === 'profile') return;
              onNavigate(item.id);
            }}
            className={`flex flex-col items-center gap-1 w-[70px] ${isActive ? 'text-primary' : 'text-outline'}`}
          >
            <div className={`px-4 py-1.5 rounded-full ${isActive ? 'bg-secondary-container/60' : 'bg-transparent'}`}>
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className={`text-[11px] ${isActive ? 'font-bold' : 'font-medium'}`}>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
