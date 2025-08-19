export default function Brand({ size = 28 }) {
  return (
    <div className="brand" style={{ display:'flex', alignItems:'center', gap:10, fontWeight:800, fontSize:20 }}>
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="sunMini" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#FDB813"/><stop offset="1" stopColor="#FFA000"/>
          </linearGradient>
        </defs>
        <g transform="translate(6,6)">
          <circle cx="34" cy="18" r="10" fill="url(#sunMini)" />
          <g stroke="#FFA000" strokeLinecap="round" strokeWidth="3">
            <line x1="34" y1="3"  x2="34" y2="0"/>
            <line x1="24" y1="8"  x2="22" y2="6"/>
            <line x1="44" y1="8"  x2="46" y2="6"/>
          </g>
          <path d="M14 36a8 8 0 0 1 1.3-15.9 10 10 0 0 1 18.8-3.1A9 9 0 1 1 40 36H14Z"
                fill="#E6EEF6" stroke="#CAD7E3" strokeWidth="2"/>
        </g>
      </svg>
      <span>Weathervine</span>
    </div>
  );
}
