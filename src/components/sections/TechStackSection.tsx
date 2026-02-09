export default function TechStackSection() {
  const categories = [
    {
      label: "Frontend",
      techs: [
        { name: "React.js", color: "#61DAFB" },
        { name: "Next.js", color: "#000000" },
        { name: "Tailwind CSS", color: "#06B6D4" },
      ],
    },
    {
      label: "Mobile",
      techs: [
        { name: "iOS (Swift / SwiftUI)", color: "#F05138" },
        { name: "Android (Kotlin / Jetpack Compose)", color: "#7F52FF" },
        { name: "React Native", color: "#61DAFB" },
      ],
    },
    {
      label: "Backend & Infrastructure",
      techs: [
        { name: "Node.js", color: "#339933" },
        { name: "AWS", color: "#FF9900" },
        { name: "Docker", color: "#2496ED" },
        { name: "Kubernetes", color: "#326CE5" },
      ],
    },
    {
      label: "Database & Caching",
      techs: [
        { name: "PostgreSQL", color: "#4169E1" },
        { name: "Redis", color: "#DC382D" },
      ],
    },
    {
      label: "AI & DevOps",
      techs: [
        { name: "Isometrik AI", color: "#4361EE" },
        { name: "CircleCI", color: "#343434" },
        { name: "Cloudflare", color: "#F38020" },
      ],
    },
  ];

  return (
    <section
      className="section-alt"
      id="tech-stack"
      aria-labelledby="tech-stack-heading"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label">Technology</span>
          <h2
            id="tech-stack-heading"
            className="text-[1.875rem] md:text-[2.25rem] font-bold text-[var(--color-secondary)] leading-[1.2] tracking-[-0.01em] mb-4"
          >
            Technology Stack: Built for Scale and Security
          </h2>
          <p className="text-[15px] text-[var(--color-gray-600)]">
            Modern, battle-tested technologies powering your logistics platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {categories.map((category) => (
            <div key={category.label}>
              <h3 className="text-[13px] font-semibold uppercase tracking-wider text-[var(--color-gray-600)] mb-3">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.techs.map((tech) => (
                  <div key={tech.name} className="tech-badge">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: tech.color }}
                    />
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Image */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=525&fit=crop&q=80"
              alt="Server room representing scalable cloud infrastructure"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
