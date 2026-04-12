import { useState } from 'react';

export default function SplashPage({ onUnlock }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password })
      });
      
      const data = await response.json();
      if (data.success) {
        onUnlock();
      } else {
        setError(true);
        setTimeout(() => setError(false), 2000);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div 
      className="relative min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: `url('/alexispaul.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
      <div className="relative z-10 w-full max-w-md bg-[#faf9f6] p-10 md:p-14 border border-[var(--color-sage-300)] text-center text-[var(--color-sage-600)] shadow-2xl">
        <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-4">
          Alexis & Paul
        </h1>
        <p className="font-sans text-xs tracking-widest uppercase mb-10 opacity-80 decoration-[var(--color-sage-300)] underline underline-offset-4">
          July 31, 2027
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="sr-only" htmlFor="password">Enter the Celebration</label>
            <input
              id="password"
              type="password"
              placeholder="Enter password..."
              className="w-full px-0 py-3 bg-transparent border-b border-[var(--color-sage-300)] text-[var(--color-sage-600)] placeholder-[var(--color-sage-400)] focus:outline-none focus:border-[var(--color-sage-600)] transition-colors text-center shadow-none rounded-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
          </div>
          {error && (
            <p className="text-red-500 text-xs tracking-wider animate-pulse uppercase">Incorrect password</p>
          )}
          <button 
            type="submit"
            className="w-full mt-4 py-3 bg-[var(--color-sage-500)] hover:bg-[var(--color-sage-600)] text-white text-sm uppercase tracking-widest transition-colors"
          >
            Enter the Celebration
          </button>
        </form>
      </div>
    </div>
  );
}
