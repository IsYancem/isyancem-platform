export default function AmbientBackground() {
  return (
    <>
      <div className="bg-field" aria-hidden="true">
        <div className="bg-grid" />
        <div className="glow a" />
        <div className="glow b" />
        <div className="glow c" />
      </div>

      <div className="grain" aria-hidden="true" />
      <div className="cursor-glow" id="cursorGlow" aria-hidden="true" />
    </>
  );
}