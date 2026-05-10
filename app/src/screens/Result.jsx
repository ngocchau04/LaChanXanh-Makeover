import { X, CheckCircle2, XCircle, Star, Medal } from 'lucide-react';

export default function Result({ onNavigate }) {
  return (
    <div className="flex flex-col h-full bg-surface-container-lowest p-6 relative overflow-hidden">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8 relative z-10">
        <div className="flex items-center gap-2">
           <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-[10px]">
             <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>
           </div>
           <h1 className="text-primary font-bold">Lá Chắn Xanh</h1>
        </div>
        <button onClick={() => onNavigate('home')} className="text-outline">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center">
        
        {/* Floating Stars */}
        <Star size={32} strokeWidth={1.5} className="absolute top-20 left-6 text-warning/60 -rotate-12" />
        <Star size={20} strokeWidth={1.5} className="absolute top-16 right-16 text-warning/60 rotate-45" />
        <Star size={28} strokeWidth={1.5} className="absolute top-48 right-6 text-warning/60 rotate-12" />

        {/* Circular Progress (85/100) */}
        <div className="relative w-56 h-56 flex items-center justify-center mb-6">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#2dd4bf" strokeWidth="8" />
            {/* Progress circle (85%) */}
            <circle cx="50" cy="50" r="45" fill="none" stroke="#006b5f" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="42.4" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[40px] font-bold text-primary tracking-tight leading-none mb-1">85<span className="text-[28px]">/100</span></span>
            <span className="text-xs font-bold text-on-surface-variant">Tổng điểm</span>
          </div>
        </div>

        <h2 className="text-[28px] font-bold text-on-surface mb-3">Tuyệt vời!</h2>
        <p className="text-center text-[15px] text-on-surface-variant max-w-[280px] mb-8 leading-relaxed">
          Bạn đã hoàn thành xuất sắc thử thách này. Kiến thức của bạn thật đáng nể!
        </p>

        {/* Detailed Stats Card */}
        <div className="w-full bg-white rounded-[24px] p-5 shadow-sm border border-surface-dim mb-6">
          <div className="flex justify-between items-center py-3 border-b border-surface-dim">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-secondary-container/50 text-secondary flex items-center justify-center">
                 <CheckCircle2 size={20} />
               </div>
               <span className="text-[15px] text-on-surface font-medium">Số câu đúng</span>
             </div>
             <span className="text-lg font-bold text-secondary">17/20</span>
          </div>
          <div className="flex justify-between items-center py-3">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-error-container/50 text-error flex items-center justify-center">
                 <XCircle size={20} />
               </div>
               <span className="text-[15px] text-on-surface font-medium">Số câu sai</span>
             </div>
             <span className="text-lg font-bold text-error">03</span>
          </div>
        </div>

        {/* Reward Card */}
        <div className="w-full bg-warning-container/30 rounded-[24px] p-5 border border-warning/20 flex items-center gap-4 mb-6">
           <div className="w-16 h-16 bg-gradient-to-br from-warning to-[#d97706] rounded-[16px] flex items-center justify-center text-white shadow-md">
             <Medal size={32} />
           </div>
           <div>
             <p className="text-xs font-bold text-[#b45309] mb-1">Phần thưởng mới</p>
             <h3 className="font-bold text-on-surface text-lg leading-tight">Lá Chắn Sáng Suốt</h3>
           </div>
        </div>

      </div>

      <div className="flex flex-col gap-3">
        <button 
          onClick={() => onNavigate('quiz_select')}
          className="w-full bg-primary text-white py-[18px] rounded-full font-bold text-[16px] shadow-sm active:scale-95 transition-transform"
        >
          Làm lại
        </button>
        <button 
          onClick={() => onNavigate('home')}
          className="w-full bg-surface-container text-primary py-[18px] rounded-full font-bold text-[16px] active:scale-95 transition-transform"
        >
          Về trang chủ
        </button>
      </div>
    </div>
  );
}
