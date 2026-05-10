import { ArrowLeft, Star, BookOpen, GraduationCap, Medal, Clock, HelpCircle, Lock, ShieldCheck } from 'lucide-react';
import BottomNav from '../components/BottomNav';

export default function QuizSelect({ onNavigate }) {
  return (
    <div className="h-full bg-surface-container-lowest flex flex-col relative">
      {/* Header */}
      <div className="px-6 pt-8 pb-4 flex justify-between items-center bg-surface-container-lowest sticky top-0 z-10">
        <div className="flex items-center gap-4">
           <button onClick={() => onNavigate('learning_map')} className="text-primary hover:bg-surface-dim p-2 rounded-full -ml-2 transition-colors">
             <ArrowLeft size={24} />
           </button>
           <h1 className="text-primary font-bold text-lg">Đố vui</h1>
        </div>
        <div className="bg-warning-container text-tertiary-container font-bold px-3 py-1.5 rounded-full text-sm flex items-center gap-1 border border-warning/30 shadow-sm">
          <Star size={14} fill="currentColor" /> 1,250
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-4 pb-28">
        
        <h2 className="text-2xl font-bold text-on-surface mb-2">Chọn mức độ</h2>
        <p className="text-sm text-outline mb-6 leading-relaxed">
          Thử thách kiến thức của bạn về phòng chống tệ nạn xã hội và bảo vệ bản thân.
        </p>

        {/* Level 1: Co ban */}
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-surface-dim mb-6 relative">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-primary-container/50 text-primary rounded-xl flex items-center justify-center">
              <BookOpen size={24} />
            </div>
            <div className="flex text-outline gap-1">
              <Star size={16} fill="currentColor" className="text-warning" />
              <Star size={16} fill="none" />
              <Star size={16} fill="none" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-on-surface mb-2">Cơ bản</h3>
          <div className="flex gap-4 text-xs font-medium text-outline mb-4">
            <span className="flex items-center gap-1"><HelpCircle size={14} /> 10 câu hỏi</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 5 phút</span>
          </div>
          <div className="w-full bg-surface-dim h-1.5 rounded-full overflow-hidden mb-2">
            <div className="bg-primary w-full h-full"></div>
          </div>
          <p className="text-right text-[10px] font-bold text-primary">Đã hoàn thành 100%</p>
        </div>

        {/* Level 2: Nang cao */}
        <div onClick={() => onNavigate('result')} className="bg-white rounded-[24px] p-5 shadow-md border-2 border-primary mb-6 relative cursor-pointer active:scale-95 transition-transform">
          <div className="absolute -top-3 right-6 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
            Khuyên dùng
          </div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-secondary-container/30 text-secondary rounded-xl flex items-center justify-center">
              <GraduationCap size={24} />
            </div>
            <div className="flex text-outline gap-1">
              <Star size={16} fill="currentColor" className="text-warning" />
              <Star size={16} fill="currentColor" className="text-warning" />
              <Star size={16} fill="none" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-on-surface mb-2">Nâng cao</h3>
          <div className="flex gap-4 text-xs font-medium text-outline mb-4">
            <span className="flex items-center gap-1"><HelpCircle size={14} /> 15 câu hỏi</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 10 phút</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="flex-1 bg-surface-dim h-1.5 rounded-full overflow-hidden">
               <div className="bg-secondary w-[45%] h-full"></div>
             </div>
             <p className="text-[10px] font-bold text-outline whitespace-nowrap">Đang thực hiện: 7/15</p>
          </div>
        </div>

        {/* Level 3: Thu thach */}
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-surface-dim mb-8 opacity-70 relative">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-tertiary-container/30 text-tertiary rounded-xl flex items-center justify-center">
              <Medal size={24} />
            </div>
            <div className="flex text-outline gap-1">
              <Star size={16} fill="currentColor" className="text-warning" />
              <Star size={16} fill="currentColor" className="text-warning" />
              <Star size={16} fill="currentColor" className="text-warning" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-on-surface mb-2">Thử thách</h3>
          <div className="flex gap-4 text-xs font-medium text-outline mb-4">
            <span className="flex items-center gap-1"><HelpCircle size={14} /> 20 câu hỏi</span>
            <span className="flex items-center gap-1"><Clock size={14} /> 15 phút</span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs font-bold text-tertiary flex items-center gap-1">
              <Lock size={14} /> Đã mở khóa
            </p>
            <p className="text-[10px] font-bold text-outline italic">Chưa bắt đầu</p>
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-primary-container/20 rounded-[24px] p-6 text-center border border-primary-container flex flex-col items-center shadow-inner">
           <div className="w-10 h-10 bg-primary rounded-full text-white flex items-center justify-center mb-4">
             <ShieldCheck size={20} />
           </div>
           <p className="text-sm font-medium text-on-surface px-2">
             Học tập mỗi ngày để trang bị kiến thức vững vàng cho bản thân và cộng đồng.
           </p>
        </div>

      </div>

      <BottomNav current="quiz_select" onNavigate={onNavigate} />
    </div>
  );
}
