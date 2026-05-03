export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-charleston/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-cerise flex items-center justify-center">
              <span className="text-white font-bold text-lg">L</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Liplip Academy
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-light-pink hover:text-white transition-colors text-sm font-medium">About</a>
            <a href="#programs" className="text-light-pink hover:text-white transition-colors text-sm font-medium">Programs</a>
            <a href="#founder" className="text-light-pink hover:text-white transition-colors text-sm font-medium">Founder</a>
            <a href="#contact" className="text-light-pink hover:text-white transition-colors text-sm font-medium">Contact</a>
          </div>
          <a
            href="#contact"
            className="bg-cerise text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-deep-blush transition-colors"
          >
            Enroll Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charleston">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-citron/20 blur-3xl" />
          <div className="absolute top-1/2 -left-32 w-80 h-80 rounded-full bg-cerise/15 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-deep-blush/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          <div className="animate-fade-up opacity-0">
            <span className="inline-block bg-citron/20 text-citron px-4 py-1.5 rounded-full text-sm font-medium mb-8 border border-citron/30">
              Welcome to Liplip Academy
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-up opacity-0 delay-100">
            Where <span className="text-cerise">Curiosity</span>
            <br />
            Meets <span className="text-citron">Excellence</span>
          </h1>

          <p className="text-lg md:text-xl text-light-pink/80 max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 delay-200">
            Empowering learners to reach their full potential through
            personalized education, creative thinking, and a nurturing
            community.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 delay-300">
            <a
              href="#programs"
              className="bg-cerise text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-deep-blush transition-colors animate-pulse-glow"
            >
              Explore Programs
            </a>
            <a
              href="#about"
              className="border-2 border-citron text-citron px-8 py-4 rounded-full text-lg font-semibold hover:bg-citron hover:text-charleston transition-colors"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 animate-fade-up opacity-0 delay-400">
            {[
              { number: "500+", label: "Students" },
              { number: "50+", label: "Programs" },
              { number: "98%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-cerise">
                  {stat.number}
                </p>
                <p className="text-light-pink/60 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-light-pink/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-cerise font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-charleston mt-3">
              A Place to <span className="text-cerise">Grow</span> &{" "}
              <span className="text-citron">Thrive</span>
            </h2>
            <p className="text-charleston/60 max-w-2xl mx-auto mt-4 text-lg">
              At Liplip Academy, we believe every learner has unique gifts waiting
              to be discovered. Our approach blends creativity, discipline, and
              joy to unlock potential.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                title: "Expert Curriculum",
                desc: "Carefully designed programs that adapt to each learner's pace and style, ensuring deep understanding.",
                color: "cerise",
                bg: "bg-cerise/10",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: "Creative Learning",
                desc: "We foster imagination and innovation, helping students think beyond textbooks and discover new possibilities.",
                color: "citron",
                bg: "bg-citron/10",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Nurturing Community",
                desc: "A warm, supportive environment where every student feels valued, safe, and inspired to reach their goals.",
                color: "deep-blush",
                bg: "bg-deep-blush/10",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group p-8 rounded-2xl border border-light-pink/30 hover:border-transparent hover:shadow-xl transition-all duration-300 bg-white hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${card.bg} rounded-xl flex items-center justify-center text-${card.color} mb-6 group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-charleston mb-3">
                  {card.title}
                </h3>
                <p className="text-charleston/60 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-24 bg-charleston">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-citron font-semibold text-sm uppercase tracking-wider">
              Our Programs
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-3">
              Designed for Every Learner
            </h2>
            <p className="text-light-pink/60 max-w-2xl mx-auto mt-4 text-lg">
              From young explorers to advanced learners, our programs inspire
              growth at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Little Explorers",
                age: "Ages 3–6",
                desc: "Playful learning that builds foundational skills through creativity and discovery.",
                gradient: "from-cerise to-deep-blush",
              },
              {
                title: "Young Scholars",
                age: "Ages 7–10",
                desc: "Building confidence and knowledge through interactive, hands-on education.",
                gradient: "from-deep-blush to-light-pink",
              },
              {
                title: "Rising Stars",
                age: "Ages 11–14",
                desc: "Challenging programs that develop critical thinking and leadership skills.",
                gradient: "from-citron to-charleston",
              },
              {
                title: "Future Leaders",
                age: "Ages 15+",
                desc: "Advanced preparation for academic success and real-world achievement.",
                gradient: "from-charleston to-citron",
              },
            ].map((program) => (
              <div
                key={program.title}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${program.gradient} mb-6`} />
                <span className="text-cerise text-xs font-semibold uppercase tracking-wider">
                  {program.age}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  {program.title}
                </h3>
                <p className="text-light-pink/50 text-sm leading-relaxed">
                  {program.desc}
                </p>
                <a href="#contact" className="inline-flex items-center gap-1 text-citron text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-cerise font-semibold text-sm uppercase tracking-wider">
                Meet the Founder
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-charleston mt-3 mb-6">
                Dahab Mahmoud
              </h2>
              <div className="space-y-4 text-charleston/70 leading-relaxed">
                <p>
                  Dahab Mahmoud founded Liplip Academy with a simple but powerful
                  vision: to create a learning environment where every child is
                  seen, heard, and empowered to shine.
                </p>
                <p>
                  With years of experience in education and a deep passion for
                  nurturing young minds, Dahab has built Liplip Academy into a
                  beloved institution that transforms lives through knowledge,
                  creativity, and compassion.
                </p>
                <p>
                  &ldquo;Education is not just about filling minds — it&rsquo;s
                  about lighting hearts.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-2 mt-6">
                <div className="w-12 h-0.5 bg-cerise rounded-full" />
                <span className="text-cerise font-semibold text-sm">
                  Owner & Founder
                </span>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-cerise via-deep-blush to-light-pink p-1">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-charleston to-citron flex items-center justify-center mb-4">
                      <span className="text-white text-5xl font-bold">DM</span>
                    </div>
                    <p className="text-charleston font-bold text-xl">
                      Dahab Mahmoud
                    </p>
                    <p className="text-charleston/50 text-sm">
                      Visionary Educator
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-citron/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cerise/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial / Quote Section */}
      <section className="py-20 bg-gradient-to-r from-cerise to-deep-blush">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <svg className="w-12 h-12 text-white/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11h4v10H0z" />
          </svg>
          <blockquote className="text-2xl md:text-3xl font-semibold text-white leading-relaxed mb-6">
            &ldquo;At Liplip Academy, we don&rsquo;t just teach — we inspire.
            Every child who walks through our doors leaves with a spark that
            will light their way forever.&rdquo;
          </blockquote>
          <p className="text-white/80 font-medium">
            — Dahab Mahmoud, Founder
          </p>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 bg-charleston">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-citron font-semibold text-sm uppercase tracking-wider">
            Get Started
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
            Join the Liplip Family
          </h2>
          <p className="text-light-pink/60 max-w-xl mx-auto mb-10 text-lg">
            Ready to give your child the gift of exceptional education? Reach out
            to us and take the first step toward a brighter future.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 max-w-lg mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-light-pink/40 focus:outline-none focus:border-citron transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-light-pink/40 focus:outline-none focus:border-citron transition-colors"
              />
              <textarea
                placeholder="Tell us about your child..."
                rows={4}
                className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-light-pink/40 focus:outline-none focus:border-citron transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-cerise text-white py-4 rounded-xl font-semibold text-lg hover:bg-deep-blush transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charleston border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-cerise flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-white font-bold text-lg">
                Liplip Academy
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#about" className="text-light-pink/50 hover:text-white transition-colors text-sm">About</a>
              <a href="#programs" className="text-light-pink/50 hover:text-white transition-colors text-sm">Programs</a>
              <a href="#founder" className="text-light-pink/50 hover:text-white transition-colors text-sm">Founder</a>
              <a href="#contact" className="text-light-pink/50 hover:text-white transition-colors text-sm">Contact</a>
            </div>
            <p className="text-light-pink/30 text-sm">
              &copy; 2026 Liplip Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
