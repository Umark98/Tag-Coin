export const ParticleBackground = () => (
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(30)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-purple-500 rounded-full"
        style={{
          top: `${Math.random() * 200}%`,
          left: `${Math.random() * 200}%`,
          animation: `float ${9 + Math.random() * 10}s linear infinite`,
        }}
      />
    ))}
  </div>
);