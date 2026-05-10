import { ShieldAlert, ShieldCheck } from 'lucide-react';

export default function ShieldLogo({ size = 64, className = '', type = 'default' }) {
  if (type === 'alert') {
    return (
      <div className={`flex items-center justify-center rounded-2xl bg-error-container text-error p-3 ${className}`}>
        <ShieldAlert size={size} strokeWidth={2} />
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center rounded-2xl bg-primary-container text-primary p-3 ${className}`}>
      <ShieldCheck size={size} strokeWidth={2} />
    </div>
  );
}
