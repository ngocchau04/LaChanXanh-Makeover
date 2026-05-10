import { ShieldCheck, GraduationCap } from 'lucide-react';
import ShieldLogo from '../components/ShieldLogo';

export default function Splash({ onNavigate }) {
  return (
    <div className="flex flex-col h-full bg-surface-container-low text-center relative overflow-hidden">
      {/* Background soft gradients */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-primary-fixed-dim/20 to-transparent"></div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 mt-12 z-10">
        
        {/* Placeholder for mascot */}
        <div className="w-64 h-64 bg-white rounded-[2rem] shadow-sm flex flex-col items-center justify-center p-6 mb-8 relative">
           <div className="w-32 h-32 bg-primary-container rounded-full flex items-center justify-center mb-4 relative">
             <div className="absolute -right-2 bottom-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white rotate-12 shadow-md">
                <ShieldCheck size={28} />
             </div>
             {/* Leaf proxy */}
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-primary">
                <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
             </svg>
           </div>
           <h1 className="text-2xl font-black text-primary tracking-tight">LÁ CHẮN XANH</h1>
        </div>

        <h2 className="text-[28px] font-bold text-primary mb-3">Lá Chắn Xanh</h2>
        <p className="text-[16px] text-on-surface-variant max-w-[300px] mb-8">
          Cùng nhau xây dựng cộng đồng an toàn và lành mạnh.
        </p>

        {/* Feature Pills */}
        <div className="flex gap-4 mb-auto">
          <div className="bg-white px-5 py-3 rounded-2xl flex items-center gap-2 shadow-sm border border-surface-dim/50">
            <ShieldCheck size={18} className="text-primary" />
            <span className="font-bold text-sm text-on-surface">Bảo mật</span>
          </div>
          <div className="bg-white px-5 py-3 rounded-2xl flex items-center gap-2 shadow-sm border border-surface-dim/50">
            <GraduationCap size={18} className="text-tertiary" />
            <span className="font-bold text-sm text-on-surface">Kiến thức</span>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="w-full px-6 pb-12 pt-6 bg-surface-container-lowest z-10">
        <button 
          onClick={() => onNavigate('home')}
          className="w-full bg-primary py-4 rounded-[20px] text-on-primary font-bold text-lg flex items-center justify-center gap-2 shadow-md active:scale-95 transition-transform mb-6"
        >
          Bắt đầu ngay 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>
        <p className="text-on-surface-variant text-sm">
          Bạn đã có tài khoản? <button className="font-bold text-primary ml-1">Đăng nhập</button>
        </p>
      </div>
    </div>
  );
}
