import { Bell, ShieldAlert, CheckCircle2, PlayCircle, Lock, Flag, Star } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function LearningMap({ onNavigate }) {
  return (
    <div className="h-full bg-surface-container-low flex flex-col relative">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 flex justify-between items-center bg-surface-container-low sticky top-0 z-20 border-b border-surface-dim/30">
        <div className="flex items-center gap-2">
           <ShieldAlert size={20} className="text-primary" />
           <h1 className="text-primary font-bold text-lg">Lá Chắn Xanh</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-warning-container text-tertiary-container font-bold px-3 py-1 rounded-full text-sm flex items-center gap-1 border border-warning/30">
            <Star size={14} fill="currentColor" /> 120
          </div>
          <button className="text-outline">
            <Bell size={22} />
          </button>
        </div>
      </div>

      {/* Map Content */}
      <div className="flex-1 overflow-y-auto px-6 pt-8 pb-32 relative">
        {/* Wavy dashed line background */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 border-l-[4px] border-dashed border-primary-fixed-dim/50 z-0"></div>

        {/* Node 03 (Locked) */}
        <div className="flex justify-start mb-20 relative z-10 w-full max-w-[280px] mr-auto pl-4">
           <div className="bg-white/80 backdrop-blur-sm p-4 rounded-3xl border-2 border-surface-dim w-full flex flex-col shadow-sm">
              <div className="flex justify-between items-start mb-3">
                 <div className="w-10 h-10 rounded-full bg-surface-dim text-outline flex items-center justify-center font-bold text-sm">
                   03
                 </div>
                 <Lock size={18} className="text-outline" />
              </div>
              <h3 className="text-lg font-bold text-outline mb-2">Vượt khó</h3>
              <div className="flex gap-1 text-surface-dim">
                 <Star size={16} /><Star size={16} /><Star size={16} />
              </div>
              {/* Progress bar empty */}
              <div className="w-full h-1.5 bg-surface-dim rounded-full mt-3"></div>
           </div>
        </div>

        {/* Node 02 (Current) */}
        <div className="flex justify-end mb-20 relative z-10 w-full max-w-[280px] ml-auto pr-4">
           {/* 'Dang dien ra' badge */}
           <div className="absolute -top-3 right-8 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md z-20">
             Đang diễn ra
           </div>
           <div className="bg-white p-5 rounded-[24px] border border-primary-container shadow-[0_8px_24px_rgba(45,212,191,0.2)] w-full flex flex-col">
              <div className="flex justify-between items-start mb-3">
                 <div className="w-10 h-10 rounded-full bg-primary-container text-primary flex items-center justify-center font-bold text-sm">
                   02
                 </div>
                 <PlayCircle size={20} className="text-primary" />
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">Cảnh giác</h3>
              <div className="flex gap-1 text-warning">
                 <Star size={16} fill="none" /><Star size={16} fill="none" className="text-surface-dim" /><Star size={16} fill="none" className="text-surface-dim" />
              </div>
              {/* Progress bar active */}
              <div className="w-full h-1.5 bg-surface-dim rounded-full mt-3 mb-4 flex overflow-hidden">
                <div className="bg-primary-container w-1/3 h-full"></div>
              </div>
              <button onClick={() => onNavigate('quiz_select')} className="w-full bg-primary text-white font-bold py-2.5 rounded-xl shadow-md active:scale-95 transition-transform">
                Học tiếp
              </button>
           </div>
        </div>

        {/* Node 01 (Completed) */}
        <div className="flex justify-start mb-16 relative z-10 w-full max-w-[280px] mr-auto pl-4">
           {/* 'Hoan thanh' badge */}
           <div className="absolute -top-3 left-8 bg-warning text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md z-20 flex items-center gap-1">
             <CheckCircle2 size={12} /> Hoàn thành
           </div>
           <div className="bg-white p-5 rounded-[24px] border border-secondary shadow-sm w-full flex flex-col">
              <div className="flex justify-between items-start mb-3">
                 <div className="w-10 h-10 rounded-full bg-secondary-container text-secondary flex items-center justify-center font-bold text-sm">
                   01
                 </div>
                 <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                   <ShieldAlert size={16} />
                 </div>
              </div>
              <h3 className="text-lg font-bold text-on-surface mb-2">Khám phá</h3>
              <div className="flex gap-1 text-warning mb-3">
                 <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
              </div>
              {/* Progress bar full */}
              <div className="w-full h-1.5 bg-secondary rounded-full"></div>
           </div>
        </div>

        {/* Start Point */}
        <div className="flex justify-center relative z-10 mt-12 mb-6">
           <div className="w-24 h-24 rounded-full border border-dashed border-primary bg-primary-container/30 flex items-center justify-center text-primary">
              <Flag size={32} />
           </div>
        </div>
      </div>

      {/* Floating Profile Badge */}
      <div className="absolute bottom-24 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.05)] border border-surface-dim z-30 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border-2 border-primary">
          <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=2dd4bf" alt="avatar" />
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold text-outline uppercase tracking-wider">Thành tích hiện tại</p>
          <p className="font-bold text-primary">Sứ giả Bảo vệ</p>
        </div>
        <div className="text-right border-l border-surface-dim pl-4">
          <p className="text-[10px] font-bold text-outline uppercase tracking-wider">Cấp độ</p>
          <p className="font-bold text-secondary">08 / 20</p>
        </div>
      </div>

      <BottomNav current="learning_map" onNavigate={onNavigate} />
    </div>
  );
}
