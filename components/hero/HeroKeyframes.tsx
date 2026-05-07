export default function HeroKeyframes() {
  return (
    <style>{`
      @keyframes orbDrift1 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50%       { transform: translate(40px, 30px) scale(1.12); }
      }
      @keyframes orbDrift2 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50%       { transform: translate(-35px, -25px) scale(1.1); }
      }
      @keyframes orbDrift3 {
        0%, 100% { transform: translate(0, 0) scale(1); }
        50%       { transform: translate(20px, -40px) scale(1.18); }
      }
      @keyframes scrollBounce {
        0%, 100% { transform: translateY(0); opacity: 0.5; }
        50%       { transform: translateY(8px); opacity: 1; }
      }
      @keyframes ringPulse {
        0%, 100% { opacity: 0.18; transform: scale(1); }
        50%       { opacity: 0.42; transform: scale(1.04); }
      }
      @keyframes imageEntrance {
        0%   { opacity: 0; transform: scale(0.88) translateY(24px); }
        100% { opacity: 1; transform: scale(1) translateY(0); }
      }
    `}</style>
  );
}
