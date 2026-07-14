import React from 'react';

export default function Trsuted() {
  const industries = [
    'Retail', 'Hospitality', 'Construction', 'Oil & Gas',
    'Logistics', 'Facility Management', 'FMCG', 'Healthcare'
  ];

  const countries = [
    {
      name: 'UAE',
      flag: (
        <svg viewBox="0 0 16 16" className="w-4 h-4 rounded-full inline-block shrink-0 object-cover">
          <rect width="16" height="5.33" fill="#00732F" />
          <rect y="5.33" width="16" height="5.33" fill="#FFFFFF" />
          <rect y="10.66" width="16" height="5.34" fill="#000000" />
          <rect width="4" height="16" fill="#FF0000" />
        </svg>
      )
    },
    {
      name: 'Saudi Arabia',
      flag: (
        <svg viewBox="0 0 16 16" className="w-4 h-4 rounded-full inline-block shrink-0 object-cover">
          <rect width="16" height="16" fill="#006C35" />
          <path d="M3 9h10M5 11l6-3-6-3" stroke="#FFFFFF" strokeWidth="1" fill="none" />
        </svg>
      )
    },
    {
      name: 'Qatar',
      flag: (
        <svg viewBox="0 0 16 16" className="w-4 h-4 rounded-full inline-block shrink-0 object-cover">
          <rect width="16" height="16" fill="#8A1538" />
          <path d="M0 0h3.5l1.5 1-1.5 1 1.5 1-1.5 1 1.5 1-1.5 1 1.5 1-1.5 1 1.5 1-1.5 1 1.5 1-1.5 1h-3.5z" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      name: 'Oman',
      flag: (
        <svg viewBox="0 0 16 16" className="w-4 h-4 rounded-full inline-block shrink-0 object-cover">
          <rect width="16" height="5.33" fill="#FFFFFF" />
          <rect y="5.33" width="16" height="5.33" fill="#FF0000" />
          <rect y="10.66" width="16" height="5.34" fill="#008000" />
          <rect width="4" height="16" fill="#FF0000" />
        </svg>
      )
    },
    {
      name: 'Kuwait',
      flag: (
        <svg viewBox="0 0 16 16" className="w-4 h-4 rounded-full inline-block shrink-0 object-cover">
          <rect width="16" height="5.33" fill="#007A3D" />
          <rect y="5.33" width="16" height="5.33" fill="#FFFFFF" />
          <rect y="10.66" width="16" height="5.34" fill="#CE1126" />
          <path d="M0 0l4 4v8l-4 4z" fill="#000000" />
        </svg>
      )
    },
    {
      name: 'Bahrain',
      flag: (
        <svg viewBox="0 0 16 16" className="w-4 h-4 rounded-full inline-block shrink-0 object-cover">
          <rect width="16" height="16" fill="#CE1126" />
          <path d="M0 0h4l1.5 1.3-1.5 1.3 1.5 1.3-1.5 1.3 1.5 1.3-1.5 1.3 1.5 1.3-1.5 1.3h-4z" fill="#FFFFFF" />
        </svg>
      )
    }
  ];

  const metrics = [
    { value: '50,000', label: 'Workforce Profiles' },
    { value: '10,000+', label: 'Verified Candidate' },
    { value: '500+', label: 'Enterprise Hiring Requirements' },
    { value: '6', label: 'GCC Countries' },
    { value: '98%', label: 'Deployment Success Rate' }
  ];

  const certifications = [
    'Secure.', 'Compliant', 'ISO 27001 Certified',
    'GDPR Compliant', '100% Legal & Compliant', 'Secure Data Protection'
  ];

  const SparkleIcon = () => (
    <svg className="w-3 h-3 text-cyan-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
    </svg>
  );

  return (
    <section className="bg-[#020b14] text-white py-12 px-6 sm:px-12 md:px-20 font-sans antialiased">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Badges Row */}
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start">

          {/* Industries Filter */}
          <div className="w-full lg:w-auto flex-1">
            <div className="border border-slate-800/80 rounded-xl bg-[#031220]/60 px-5 py-3 text-xs text-gray-300 backdrop-blur-sm flex flex-wrap gap-x-3 gap-y-2 items-center">
              {industries.map((item, index) => (
                <React.Fragment key={item}>
                  <span className="hover:text-white transition-colors duration-200">{item}</span>
                  {index < industries.length - 1 && (
                    <span className="text-gray-600 font-bold select-none text-[10px]">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Countries Filter */}
          <div className="w-full lg:w-auto shrink-0">
            <div className="border border-slate-800/80 rounded-xl bg-[#031220]/60 px-5 py-3 text-xs text-gray-300 backdrop-blur-sm flex flex-wrap gap-x-5 gap-y-2 items-center">
              {countries.map((country) => (
                <div key={country.name} className="flex items-center gap-2 group cursor-default">
                  {country.flag}
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Clean Metrics Grid Panel */}
        <div className="grid grid-cols-2 md:grid-cols-5 border border-slate-800/90 rounded-2xl bg-[#031220]/40 backdrop-blur-md divide-y divide-x-0 md:divide-y-0 md:divide-x divide-slate-800/90 shadow-2xl overflow-hidden">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`px-6 py-8 flex flex-col justify-center text-left ${idx === 4 ? 'col-span-2 md:col-span-1' : 'col-span-1'
                }`}
            >
              <div className="text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-none mb-3">
                {metric.value}
              </div>
              <div className="text-[11px] md:text-xs text-gray-400 font-medium tracking-wide max-w-[140px] leading-relaxed">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Certifications Pill Box */}
        <div className="border border-slate-800/60 rounded-full bg-[#031220]/20 px-6 py-3.5 flex flex-wrap justify-center lg:justify-between items-center gap-x-8 gap-y-3 text-[11px] font-medium tracking-wide text-gray-400 max-w-5xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert} className="flex items-center gap-2 hover:text-gray-200 transition-colors duration-200">
              <SparkleIcon />
              <span>{cert}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}