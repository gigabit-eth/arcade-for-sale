import React from "react";
import { Gamepad2, Sparkles, Trophy, Users } from "lucide-react";

function App() {
  const games = [
    {
      title: "Pixel Platformer",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400&h=300",
      players: "10.2K",
    },
    {
      title: "Space Shooter",
      image:
        "https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&q=80&w=400&h=300",
      players: "8.5K",
    },
    {
      title: "Neon Racing",
      image:
        "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=400&h=300",
      players: "12.1K",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(120,0,255,0.3),rgba(255,255,255,0))]" />
      <div className="max-w-6xl w-full relative">
        <div className="backdrop-blur-xl bg-purple-900/60 rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.4)] border-2 border-purple-500/50 p-8 md:p-12">
          <div className="flex items-center justify-center mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-400/30 to-pink-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_0_20px_rgba(147,51,234,0.3)] border border-purple-400/50">
              <Gamepad2 className="w-16 h-16 text-purple-300" />
            </div>
          </div>

          <div className="text-center mb-12">
            <h1 className="font-arcade text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 mb-6 tracking-tight leading-relaxed">
              arcade.lol
            </h1>
            <p className="text-2xl text-purple-200/90">
              Your Next Gaming Empire Awaits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {games.map((game, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-purple-800/30 border border-purple-400/50 shadow-[0_4px_20px_rgba(168,85,247,0.2)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.4)] transition-all duration-300"
              >
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {game.title}
                  </h3>
                  <div className="flex items-center text-purple-200">
                    <Users className="w-4 h-4 mr-2" />
                    <span>{game.players} players</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center backdrop-blur-sm bg-purple-800/30 rounded-2xl p-6 border border-purple-400/50 shadow-[0_4px_20px_rgba(168,85,247,0.2)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/30 to-pink-500/30 flex items-center justify-center flex-shrink-0 border border-purple-400/50">
                <Trophy className="w-6 h-6 text-purple-300" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">
                  Premium Gaming Domain
                </h3>
                <p className="text-purple-200/80">
                  Perfect for your gaming platform
                </p>
              </div>
            </div>

            <div className="flex items-center backdrop-blur-sm bg-purple-800/30 rounded-2xl p-6 border border-purple-400/50 shadow-[0_4px_20px_rgba(168,85,247,0.2)]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400/30 to-pink-500/30 flex items-center justify-center flex-shrink-0 border border-purple-400/50">
                <Sparkles className="w-6 h-6 text-purple-300" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-white">
                  Instant Setup
                </h3>
                <p className="text-purple-200/80">
                  Ready for your gaming community
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-purple-200/60 mt-8">
            contact{" "}
            <a
              href="https://x.com/@digitalhust1a"
              target="_blank"
              className="hover:text-purple-300 transition-colors"
            >
              @digitalhust1a
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
