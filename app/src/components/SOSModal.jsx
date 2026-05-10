import { PhoneCall, X } from 'lucide-react';
import ShieldLogo from './ShieldLogo';

export default function SOSModal({ onClose }) {
  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end bg-on-surface/40 backdrop-blur-sm">
      <div className="bg-surface rounded-t-3xl p-6 shadow-2xl animate-in slide-in-from-bottom-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-error">Hỗ trợ khẩn cấp</h2>
          <button onClick={onClose} className="p-2 bg-surface-dim rounded-full text-on-surface-variant">
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col items-center py-6 text-center">
          <ShieldLogo type="alert" size={48} className="mb-4 animate-pulse" />
          <p className="text-on-surface text-lg mb-6">
            Bạn đang cảm thấy không an toàn hoặc cần sự trợ giúp ngay lập tức?
          </p>
          
          <button className="w-full py-4 rounded-xl bg-error text-on-error font-bold text-xl flex items-center justify-center gap-3 mb-3 shadow-[0_4px_14px_0_rgba(186,26,26,0.39)]">
            <PhoneCall size={24} />
            Gọi Tổng đài 111
          </button>
          <p className="text-sm text-on-surface-variant">
            Đây là bản dùng thử. Cuộc gọi sẽ không được thực hiện.
          </p>
        </div>
      </div>
    </div>
  );
}
