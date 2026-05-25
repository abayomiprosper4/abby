import React from 'react';

const ProblemStatementCards = () => {
  const cards = [
    {
      title: "REDIRECT",
      description: "Users leave the main website to complete forms",
      impacts: ["Confusion", "User drop-off", "Reduced trust"],
    },
    {
      title: "SCATTERED OWNERSHIP",
      description: "Different teams manage different Forms",
      impacts: ["Inconsistent form behaviour hard to manage and analyse"],
    },
    {
      title: "BROKEN USER JOURNEY",
      description: "Sessions or design change across pages",
      impacts: ["Experience feels broken", "Hard to track user journey"],
    },
  ];

  return (
    <div className="bg-white p-8">
      <div className="flex flex-col md:flex-row gap-3 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="flex-1 bg-[#f1f9f1] border border-[#22910f1a] rounded-[2rem] px-6 py-14 shadow-sm"
          >
            <div className="mb-4">
              <h3 className="font-bold text-xl text-gray-800 tracking-tight uppercase">
                {card.title}
              </h3>
              <p className="text-lg text-gray-800 mt-1">
                {card.description}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg text-gray-800 tracking-tight uppercase mt-4 mb-2">
                IMPACT
              </h4>
              <ul className="space-y-1">
                {card.impacts.map((impact, i) => (
                  <li key={i} className="text-md text-gray-800 leading-snug">
                    {impact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProblemStatementCards;