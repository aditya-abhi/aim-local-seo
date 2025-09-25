import React from "react";

const timelineData = [
  {
    id: 1,
    year: "2020",
    title: "Foundational Tech",
    subtitle: "2020 Concept & Research",
    description: "Laid the groundwork for AI-powered solutions with extensive research and development."
  },
  {
    id: 2,
    year: "2021",
    title: "Community Build",
    subtitle: "2021 Concept & Research",
    description: "Built a strong community of AI enthusiasts and early adopters."
  },
  {
    id: 3,
    year: "2021",
    title: "Community Build",
    subtitle: "2021 Market Launch",
    description: "Successfully launched our AI solutions to the market."
  },
  {
    id: 4,
    year: "2022",
    title: "Public Beta",
    subtitle: "2022 Open Source Release",
    description: "Released our platform as open source for the developer community."
  },
  {
    id: 5,
    year: "2023",
    title: "New Horizons",
    subtitle: "Global Expansion",
    description: "Expanded our services globally with enhanced AI capabilities."
  }
];

export default function ServiceTimeline() {
  return (
    <div className="service-timeline section panel overflow-hidden position-relative">
      {/* Enhanced Background with Gradient Overlay */}
      <div 
        className="position-absolute top-0 start-0 w-100 h-100 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/landing/hero-11-bg-light.jpg')",
          opacity: 0.03
        }}
      />
      <div 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.02) 0%, rgba(147, 51, 234, 0.02) 100%)'
        }}
      />
      
      <div className="section-outer panel py-12 lg:py-16 xl:py-20 position-relative">
        <div className="container">
          <div className="section-inner panel">
            {/* Enhanced Header */}
            <div className="row justify-center">
              <div className="col-12 lg:col-10 xl:col-8">
                <div className="panel text-center mb-12 lg:mb-16">
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary bg-opacity-10 text-primary rounded-pill fs-7 fw-bold mb-4"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 600;"
                  >
                    <i className="unicon-timeline fs-6" />
                    OUR JOURNEY
                  </div>
                  <h2 
                    className="h2 lg:h1 xl:display-6 m-0 mb-4 fw-bold"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 600; delay: 100;"
                  >
                    Innovation Through
                    <span className="text-primary d-block">Time & Excellence</span>
                  </h2>
                  <p 
                    className="fs-6 lg:fs-5 text-gray-600 dark:text-gray-400 lh-lg max-w-600px mx-auto"
                    data-anime="translateY: [24, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 600; delay: 200;"
                  >
                    From groundbreaking concepts to global impact, explore the pivotal moments that shaped our AI-powered solutions and transformed industries worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Timeline */}
            <div className="row justify-center">
              <div className="col-12 lg:col-11 xl:col-10">
                <div className="timeline-wrapper position-relative py-8">
                  {/* Enhanced Vertical line for desktop */}
                  <div className="timeline-line position-absolute start-50 translate-middle-x d-none lg:d-block" 
                       style={{ 
                         width: '3px', 
                         height: 'calc(100% - 80px)', 
                         top: '40px',
                         background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.3) 0%, rgba(147, 51, 234, 0.3) 100%)',
                         borderRadius: '2px'
                       }} />
                  
                  {timelineData.map((item, index) => (
                    <div 
                      key={item.id}
                      className="timeline-item mb-12 lg:mb-16 position-relative"
                      data-anime="translateY: [60, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 800;"
                      style={{ '--anime-delay': `${400 + (index * 200)}ms` }}
                    >
                      <div className="row align-items-center">
                        {/* Left content (even indexes) */}
                        <div className={`col-12 col-lg-5 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
                          {index % 2 === 0 ? (
                            <div className="timeline-content bg-white dark:bg-gray-800 rounded-4 p-8 shadow-xl border border-gray-50 dark:border-gray-700 position-relative text-end transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
                              {/* Enhanced Arrow pointing right */}
                              <div className="timeline-arrow position-absolute top-50 end-0 translate-middle-y d-none lg:d-block"
                                   style={{ 
                                     width: '20px', 
                                     height: '20px', 
                                     backgroundColor: 'white',
                                     transform: 'translateY(-50%) translateX(50%) rotate(45deg)',
                                     border: '2px solid #f8fafc',
                                     borderTop: 'none',
                                     borderLeft: 'none',
                                     zIndex: 1,
                                     boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                   }} />
                              
                              <div className="fs-7 fw-bold text-primary mb-3 opacity-80 tracking-wide">
                                {item.subtitle}
                              </div>
                              <h4 className="h4 mb-4 text-dark dark:text-white fw-bold lh-sm group-hover:text-primary transition-colors duration-300">
                                {item.title}
                              </h4>
                              <p className="fs-6 text-gray-600 dark:text-gray-400 m-0 lh-lg">
                                {item.description}
                              </p>
                              
                              {/* Subtle background pattern */}
                              <div className="position-absolute top-0 end-0 w-24 h-24 opacity-5 d-none lg:d-block">
                                <i className={`unicon-${getIconClass(index)} fs-1 text-primary`} />
                              </div>
                            </div>
                          ) : (
                            <div className="d-none d-lg-block"></div>
                          )}
                        </div>

                        {/* Enhanced Center icon */}
                        <div className="col-12 col-lg-2 order-2 d-flex justify-center mb-6 lg:mb-0">
                          <div className="timeline-icon bg-white border-4 border-primary rounded-circle d-flex align-items-center justify-content-center position-relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
                               style={{ width: '90px', height: '90px', zIndex: 2 }}>
                            <div className="bg-gradient-to-br from-primary to-purple-600 rounded-circle d-flex align-items-center justify-content-center group-hover:from-purple-600 group-hover:to-primary transition-all duration-300"
                                 style={{ width: '60px', height: '60px' }}>
                              <i className={`unicon-${getIconClass(index)} text-white fs-3 group-hover:scale-110 transition-transform duration-300`} />
                            </div>
                            
                            {/* Pulsing ring effect */}
                            <div className="position-absolute inset-0 border-2 border-primary rounded-circle opacity-20 animate-ping" style={{ animationDuration: '2s' }} />
                            
                            {/* Year badge */}
                            <div className="position-absolute -top-2 -end-2 bg-primary text-white rounded-pill px-2 py-1 fs-8 fw-bold shadow-lg">
                              {item.year}
                            </div>
                          </div>
                        </div>

                        {/* Right content (odd indexes) */}
                        <div className={`col-12 col-lg-5 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
                          {index % 2 !== 0 ? (
                            <div className="timeline-content bg-white dark:bg-gray-800 rounded-4 p-8 shadow-xl border border-gray-50 dark:border-gray-700 position-relative text-start transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group">
                              {/* Enhanced Arrow pointing left */}
                              <div className="timeline-arrow position-absolute top-50 start-0 translate-middle-y d-none lg:d-block"
                                   style={{ 
                                     width: '20px', 
                                     height: '20px', 
                                     backgroundColor: 'white',
                                     transform: 'translateY(-50%) translateX(-50%) rotate(45deg)',
                                     border: '2px solid #f8fafc',
                                     borderBottom: 'none',
                                     borderRight: 'none',
                                     zIndex: 1,
                                     boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                   }} />
                              
                              <div className="fs-7 fw-bold text-primary mb-3 opacity-80 tracking-wide">
                                {item.subtitle}
                              </div>
                              <h4 className="h4 mb-4 text-dark dark:text-white fw-bold lh-sm group-hover:text-primary transition-colors duration-300">
                                {item.title}
                              </h4>
                              <p className="fs-6 text-gray-600 dark:text-gray-400 m-0 lh-lg">
                                {item.description}
                              </p>
                              
                              {/* Subtle background pattern */}
                              <div className="position-absolute top-0 start-0 w-24 h-24 opacity-5 d-none lg:d-block">
                                <i className={`unicon-${getIconClass(index)} fs-1 text-primary`} />
                              </div>
                            </div>
                          ) : (
                            <div className={`timeline-content bg-white dark:bg-gray-800 rounded-4 p-8 shadow-xl border border-gray-50 dark:border-gray-700 position-relative text-start d-lg-none transition-all duration-300 hover:shadow-2xl group`}>
                              <div className="fs-7 fw-bold text-primary mb-3 opacity-80 tracking-wide">
                                {item.subtitle}
                              </div>
                              <h4 className="h4 mb-4 text-dark dark:text-white fw-bold lh-sm group-hover:text-primary transition-colors duration-300">
                                {item.title}
                              </h4>
                              <p className="fs-6 text-gray-600 dark:text-gray-400 m-0 lh-lg">
                                {item.description}
                              </p>
                              
                              {/* Mobile year badge */}
                              <div className="position-absolute top-4 end-4 bg-primary text-white rounded-pill px-3 py-1 fs-8 fw-bold shadow-lg">
                                {item.year}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get icon classes
function getIconClass(index) {
  const icons = ['gear', 'star', 'star', 'globe', 'rocket-launch'];
  return icons[index] || 'gear';
}

