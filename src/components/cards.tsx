export default function Cards() {
  const cardsData = [
    { id: 1, title: "Portfolio Website", desc: "React aur Tailwind se bani hui website." },
    { id: 2, title: "E-commerce App", desc: "Shopping cart aur payment integration." }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-10">
      {cardsData.map((item) => (
        <div key={item.id} className="bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
          {/* H2 mein title */}
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">{item.title}</h2>
          
          {/* P mein description */}
          <p className="text-slate-300">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
