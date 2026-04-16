/* ── Gothic Arch — trang trí đặc trưng Công giáo ── */
export function GothicArch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer arch */}
      <path
        d="M10 280 V120 Q10 10 100 10 Q190 10 190 120 V280"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      {/* Inner arch */}
      <path
        d="M24 280 V125 Q24 28 100 28 Q176 28 176 125 V280"
        stroke="currentColor"
        strokeWidth="0.5"
        fill="none"
        opacity="0.4"
      />
      {/* Cross at top */}
      <line x1="100" y1="36" x2="100" y2="62" stroke="currentColor" strokeWidth="1" />
      <line x1="88" y1="46" x2="112" y2="46" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}

/* ── Thánh Giá Latin chi tiết ── */
export function LatinCross({
  size = 24,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Vertical beam */}
      <rect x="10.5" y="0" width="3" height="32" rx="0.5" fill="currentColor" />
      {/* Horizontal beam — positioned higher like a Latin cross */}
      <rect x="3" y="7" width="18" height="3" rx="0.5" fill="currentColor" />
      {/* Center ornament */}
      <circle cx="12" cy="8.5" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </svg>
  );
}

/* ── Thánh Giá Hôn Phối (Sacred Unity Cross) ── */
export function SacredUnityCross({
  size = 32,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={(size * 40) / 32}
      viewBox="0 0 32 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Main Cross Structure with Fleur-de-lis tips */}
      <path
        d="M16 2 V38 M8 12 H24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Fleur-de-lis Top */}
      <path d="M14 4 Q16 0 18 4 Q16 6 14 4 Z" fill="currentColor" />
      {/* Fleur-de-lis Bottom */}
      <path d="M14 36 Q16 40 18 36 Q16 34 14 36 Z" fill="currentColor" />
      {/* Fleur-de-lis Left */}
      <path d="M6 10 Q2 12 6 14 Q8 12 6 10 Z" fill="currentColor" />
      {/* Fleur-de-lis Right */}
      <path d="M26 10 Q30 12 26 14 Q24 12 26 10 Z" fill="currentColor" />

      {/* Central Radiance / Symbol of Unity */}
      <circle cx="16" cy="12" r="4.5" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="16" cy="12" r="6.5" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.4" />
      
      {/* Decorative details inside the cross */}
      <path d="M16 18 V28" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" />
    </svg>
  );
}

/* ── Olive Branch — cành ô liu ── */
export function OliveBranch({
  flip = false,
  className = "",
}: {
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : "none" }}
    >
      {/* Main stem */}
      <path
        d="M5 35 Q30 30 55 20 Q80 10 115 5"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
      />
      {/* Leaves */}
      <ellipse cx="25" cy="28" rx="8" ry="3.5" transform="rotate(-25 25 28)" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <ellipse cx="40" cy="23" rx="7" ry="3" transform="rotate(-20 40 23)" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <ellipse cx="55" cy="17" rx="7" ry="3" transform="rotate(-15 55 17)" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <ellipse cx="70" cy="13" rx="6.5" ry="2.8" transform="rotate(-12 70 13)" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <ellipse cx="85" cy="9" rx="6" ry="2.5" transform="rotate(-8 85 9)" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <ellipse cx="100" cy="6" rx="5.5" ry="2.2" transform="rotate(-5 100 6)" stroke="currentColor" strokeWidth="0.6" fill="none" />
      {/* Leaf veins */}
      <line x1="19" y1="28" x2="31" y2="27" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
      <line x1="35" y1="23" x2="45" y2="22" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
      <line x1="50" y1="17" x2="60" y2="16" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
      <line x1="65" y1="13" x2="75" y2="12" stroke="currentColor" strokeWidth="0.3" opacity="0.5" />
    </svg>
  );
}

/* ── Wedding Rings — nhẫn cưới ── */
export function WeddingRings({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="22" cy="18" r="12" stroke="currentColor" strokeWidth="1" />
      <circle cx="22" cy="18" r="10" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
      <circle cx="38" cy="18" r="12" stroke="currentColor" strokeWidth="1" />
      <circle cx="38" cy="18" r="10" stroke="currentColor" strokeWidth="0.4" opacity="0.4" />
      {/* Small diamond on left ring */}
      <path d="M22 10 L24 13 L22 16 L20 13 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
    </svg>
  );
}

/* ── Decorative Divider with Cross ── */
export function CrossDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="w-16 h-px bg-gold-muted/40" />
      <SacredUnityCross size={20} className="text-gold-muted/60" />
      <div className="w-16 h-px bg-gold-muted/40" />
    </div>
  );
}

/* ── Gothic Section Header ── */
export function SectionHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-12">
      <LatinCross size={20} className="text-gold-muted mx-auto mb-4" />
      <h2 className="font-serif text-navy text-2xl md:text-3xl font-normal tracking-wide mb-2">
        {title}
      </h2>
      <div className="divider-gold" />
      {subtitle && (
        <p className="text-charcoal-light text-sm mt-4 max-w-md mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
