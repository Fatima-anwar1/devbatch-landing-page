export default function Footer() { 
      return (
      <footer className="footer footer-center p-10 bg-slate-950 text-slate-400 border-t border-slate-800 mt-20">
        <aside>
          <p className="font-bold text-white text-lg tracking-wider">DevBatch</p> 
          <p className="text-sm mt-1">Providing quality tech education since 2026</p>
          <p className="text-xs text-slate-500 mt-4">Copyright © 2026 - All right reserved by DevBatch Ltd</p>
        </aside> 
        <nav className="grid grid-flow-col gap-4 text-sm mt-2">
          <a className="link link-hover hover:text-blue-400">About us</a>
          <a className="link link-hover hover:text-blue-400">Contact</a>
          <a className="link link-hover hover:text-blue-400">Jobs</a>
          <a className="link link-hover hover:text-blue-400">Press kit</a>
        </nav>
      </footer> 

      ); 
  }
