import { Bell, ShieldAlert, BookOpen, HelpCircle, Gamepad2, Medal, ArrowRight } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function Home({ onNavigate, onSOS }) {
  return (
    <div className="h-full bg-surface-container-low flex flex-col relative">
      {/* Header */}
      <div className="px-6 pt-8 pb-2 flex justify-between items-center bg-surface-container-low sticky top-0 z-10">
        <div className="flex items-center gap-2">
           <ShieldAlert size={20} className="text-primary" />
           <h1 className="text-primary font-bold text-lg">Lá Chắn Xanh</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-outline relative">
            <Bell size={22} />
          </button>
          <div className="w-8 h-8 rounded-full bg-primary-container text-primary font-bold flex items-center justify-center text-sm">
            A
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pb-28">
        
        {/* Welcome & Global Progress */}
        <div className="flex justify-between items-end mt-4 mb-2">
          <h2 className="text-[26px] font-bold text-on-surface leading-tight">Chào bạn, An!</h2>
          <span className="text-primary font-bold font-mono">65%</span>
        </div>
        <p className="text-sm text-outline mb-2">Tiến độ học tập</p>
        <div className="w-full bg-surface-dim h-2 rounded-full mb-6">
          <div className="bg-primary h-full rounded-full w-[65%]"></div>
        </div>

        {/* Hero Quick Start Card */}
        <div className="bg-primary rounded-[24px] overflow-hidden mb-6 shadow-md relative group cursor-pointer" onClick={() => onNavigate('quiz_select')}>
          {/* Top image placeholder area */}
          <div className="h-36 bg-gradient-to-br from-primary-fixed-dim to-primary relative opacity-90 mix-blend-multiply flex items-center justify-center">
              {/* Decorative shapes to mock an illustration */}
              <div className="absolute right-4 top-4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute left-8 bottom-4 w-16 h-16 bg-primary-fixed/30 rounded-lg rotate-12"></div>
              <ShieldAlert size={64} className="text-white/20" />
          </div>
          
          {/* Card Content overlap */}
          <div className="absolute top-[80px] left-6 right-6">
            <div className="inline-block bg-primary-container text-primary text-xs font-bold px-3 py-1.5 rounded-full mb-2 shadow-sm">
              Chương 3: Kỹ năng từ chối
            </div>
            <h3 className="text-2xl font-bold text-white leading-tight text-shadow">
              Bài 4: Xây dựng bản lĩnh cá nhân
            </h3>
          </div>

          <div className="bg-white p-5 pt-8 rounded-b-[24px] flex items-center justify-between mt-8 relative z-10">
            <p className="text-on-surface-variant text-sm pr-4 leading-relaxed">
              Tiếp tục hành trình bảo vệ bản thân và cộng đồng.
            </p>
            <button className="bg-primary text-white rounded-full px-5 py-3 font-semibold text-sm flex items-center gap-2 whitespace-nowrap shadow-[0_4px_12px_rgba(0,107,95,0.3)] active:scale-95 transition-transform">
              Tiếp tục <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Categories 2x2 Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="bg-white p-5 rounded-[24px] shadow-sm text-left flex flex-col justify-between border-l-4 border-l-primary h-28">
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-2">
              <BookOpen size={20} />
            </div>
            <div>
              <h4 className="font-bold text-on-surface">Bài học</h4>
              <p className="text-[11px] text-outline">12 khóa học</p>
            </div>
          </button>
          <button onClick={() => onNavigate('quiz_select')} className="bg-white p-5 rounded-[24px] shadow-sm text-left flex flex-col justify-between border-l-4 border-l-warning h-28">
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-warning mb-2">
              <HelpCircle size={20} />
            </div>
            <div>
              <h4 className="font-bold text-on-surface">Đố vui</h4>
              <p className="text-[11px] text-outline">Thử thách mới</p>
            </div>
          </button>
          <button className="bg-white p-5 rounded-[24px] shadow-sm text-left flex flex-col justify-between border-l-4 border-l-primary-fixed-dim h-28">
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary-fixed-dim mb-2">
              <Gamepad2 size={20} />
            </div>
            <div>
              <h4 className="font-bold text-on-surface">Trò chơi</h4>
              <p className="text-[11px] text-outline">Chơi mà học</p>
            </div>
          </button>
          <button className="bg-white p-5 rounded-[24px] shadow-sm text-left flex flex-col justify-between border-l-4 border-l-tertiary h-28">
            <div className="w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-tertiary mb-2">
              <Medal size={20} />
            </div>
            <div>
              <h4 className="font-bold text-on-surface">Thành tích</h4>
              <p className="text-[11px] text-outline">8 huy hiệu</p>
            </div>
          </button>
        </div>

        {/* SOS Button Card */}
        <button 
          onClick={onSOS}
          className="w-full bg-[#ba1a1a] rounded-[24px] p-6 text-center text-white flex flex-col items-center justify-center shadow-[0_12px_30px_rgba(186,26,26,0.3)] active:scale-[0.98] transition-transform relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
            <ShieldAlert size={32} strokeWidth={2.5} />
          </div>
          <h3 className="text-xl font-bold tracking-wide mb-1 relative z-10">HỖ TRỢ SOS</h3>
          <p className="text-sm text-white/90 relative z-10">Kết nối khẩn cấp với chuyên gia 24/7</p>
        </button>

      </div>

      <BottomNav current="home" onNavigate={onNavigate} />
    </div>
  );
}
