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
      <div className="container mx-auto px-6 max-w-[1280px]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="tech-stack-heading"
            className="text-3xl md:text-4xl font-bold text-[var(--color-secondary)] mb-4 leading-tight"
          >
            Technology Stack: Built for Scale and Security
          </h2>
          <p className="text-lg text-gray-600">
            Modern, battle-tested technologies powering your logistics platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {categories.map((category) => (
            <div key={category.label}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
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

        {/* Architecture Image Placeholder */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="img-placeholder aspect-[16/7] rounded-2xl">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <p className="mt-2 text-sm">System Architecture Diagram</p>
            <p className="text-xs text-gray-400">
              (Replace with architecture diagram: 1200x525 recommended)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
