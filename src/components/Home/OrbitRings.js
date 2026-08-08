/* eslint-disable react/prop-types */

/**
 * Concentric dashed rings with satellites, drawn behind the hero avatar.
 * Pure SVG + CSS rotation — no runtime cost, no dependency.
 */

const SPIN = { transformBox: 'view-box', transformOrigin: '50% 50%' };

const OrbitRings = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 400"
    className={className}
    fill="none"
    aria-hidden
    focusable="false"
  >
    {/* static hairlines */}
    <circle cx="200" cy="200" r="197" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
    <circle cx="200" cy="200" r="143" stroke="rgba(255,255,255,0.09)" strokeWidth="1" />

    {/* dashed ring — slow */}
    <g className="animate-orbit motion-reduce:animate-none" style={SPIN}>
      <circle
        cx="200"
        cy="200"
        r="179"
        stroke="rgba(255,255,255,0.22)"
        strokeWidth="1"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
      <circle cx="379" cy="200" r="3" fill="#fafafa" opacity="0.75" />
    </g>

    {/* accent arcs — counter-rotating */}
    <g className="animate-orbit-rev motion-reduce:animate-none" style={SPIN}>
      <circle
        cx="200"
        cy="200"
        r="161"
        stroke="rgba(163,230,53,0.55)"
        strokeWidth="1.5"
        strokeDasharray="110 895"
        strokeLinecap="round"
      />
      <circle
        cx="200"
        cy="200"
        r="161"
        stroke="rgba(163,230,53,0.22)"
        strokeWidth="1"
        strokeDasharray="46 466"
        strokeDashoffset="-300"
        strokeLinecap="round"
      />
      <circle cx="200" cy="39" r="4" fill="#a3e635" />
      <circle cx="200" cy="39" r="10" fill="#a3e635" opacity="0.2" />
    </g>

    {/* inner tick ring — fastest */}
    <g className="animate-orbit-fast motion-reduce:animate-none" style={SPIN}>
      <circle
        cx="200"
        cy="200"
        r="152"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
        strokeDasharray="1 6"
      />
      <circle cx="48" cy="200" r="2.5" fill="#a3e635" opacity="0.85" />
    </g>
  </svg>
);

export default OrbitRings;
