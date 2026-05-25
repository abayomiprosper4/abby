"use client";

function UserUnderstanding() {
  return (
    <div>
        <section className="bg-[#fcf3f6] py-20 px-4 xl:px-0">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl md:text-4xl text-center md:text-left font-bold mb-10 text-gray-900">
      Understanding the User
    </h2>

    <div className="w-full relative">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-medium text-gray-800 mb-2">Empathy Map</h3>
        <p className="text-gray-600 text-lg md:text-md leading-relaxed tracking-wider">Understanding User Needs for a Budgeting App</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        
        <div className="bg-green-50/60 p-6 md:p-10 border-b-4 border-white min-h-[150px] rounded-tl-3xl">
          <h4 className="font-bold text-gray-800 text-base mb-6">Think & Feel</h4>
          <ul className="space-y-2 text-base text-gray-600">
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-emerald-400" />
              "I need to track my expenses but it's tedious"
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-emerald-400" />
              "Where is my money actually going?"
            </li>
          </ul>
        </div>

        <div className="bg-amber-50/60 p-6 md:p-10 md:border-l-4 border-gray-200 min-h-[150px] rounded-tr-3xl">
          <h4 className="font-bold text-gray-800 text-base mb-6">Hear</h4>
          <ul className="space-y-2 text-base text-gray-600">
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-amber-400" />
              "You need to be better at budgeting"
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-amber-400" />
              "Another app making things complicated"
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-amber-400" />
              "Have you tried setting up a budget?"
            </li>
          </ul>
        </div>

        <div className="bg-blue-50/60 p-6 md:p-10 md:border-r-4 border-gray-200 min-h-[150px]">
          <h4 className="font-bold text-gray-800 text-base mb-4">See</h4>
          <ul className="space-y-2 text-base text-gray-600">
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-emerald-400/40" />
              Endless lists of transactions
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-emerald-400/40" />
              Confusing numbers without context
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-emerald-400/40" />
              Apps that are hard to navigate
            </li>
          </ul>
        </div>

        <div className="bg-purple-50/60 p-6 md:p-10 border-t-4 border-white min-h-[150px]">
          <h4 className="font-bold ml-8 text-gray-800 text-base mb-4">Say & Do</h4>
          <div className="space-y-3">
            <div className="bg-white/80 px-3 py-4 rounded-xl rounded-bl-none text-[13px] text-gray-800 italic shadow-sm inline-block border border-white">
              "Ugh, I have to go through all my expenses again."
            </div>
            <br />
            <div className="bg-white/80 px-3 py-4 rounded-xl rounded-bl-none text-[13px] text-gray-800 italic shadow-sm inline-block border border-white">
              "What did I even spend on last month?"
            </div>
          </div>
        </div>
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white border-[4px] border-white shadow-lg flex items-center justify-center overflow-hidden">
            <img 
              src="/assets/images/understand.png" 
              alt="User Avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-6 md:p-10 rounded-bl-3xl border-r-4 border-gray-200">
          <ul className="space-y-2 text-base text-gray-600">
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-sky-400" />
              Endless lists of transactions
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-sky-400" />
              Confusing numbers without context
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-sky-400" />
              Apps that are hard to navigate
            </li>
          </ul>
        </div>
        <div className="bg-white p-6 md:p-10 rounded-br-3xl">
          <ul className="space-y-2 text-base text-gray-600">
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-purple-400" />
              Spends time categorizing transactions manually
            </li>
            <li className="flex gap-3">
              <span className="w-2 h-2 mt-1.5 shrink-0 rounded-full bg-purple-400" />
              Attempts to use multiple apps to track finances
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default UserUnderstanding