      export default function Hero() {
        return(
      <div className="px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full px-3 py-1 text-sm text-slate-400 ring-1 ring-slate-800 bg-slate-950">
              Our Next Development Batch is Live!{' '}
              <a href="#" className="font-semibold text-blue-400 pl-1">
                Read more &rarr;
              </a>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white sm:text-6xl">
            Master Web Development with <span className="text-blue-500">DevBatch</span>
          </h1>
          
          <p className="mt-6 text-lg text-slate-300">
            React.js, JavaScript, aur modern UI libraries seekhein bilkul scratch se. Apna professional portfolio banayein aur market mein in-demand developer banean.
          </p>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button className="btn btn-primary text-white px-6">
              Get Started
            </button>
            <button className="btn btn-ghost text-white">
              Learn More &rarr;
            </button>
          </div>
        </div>
      </div>
        ) ;
      } ;
