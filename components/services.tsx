import {
  Globe,
  Smartphone,
  Palette,
  Cloud,
  Shield,
  Brain,
  Bot,
  Users,
  BarChart3,
  Workflow,
  Code2,
  TestTube2,
  Wrench,
  TrendingUp,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom Website & Web Application Development, Healthcare & Enterprise Web Portals, Responsive Design, CMS Development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Android & iOS Development, Cross-Platform Apps (Flutter/React Native), Patient Engagement & Telehealth Apps",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "User Research & Experience Strategy, Healthcare-Focused UX/UI Design, Wireframing & Prototypes, Accessibility Compliance",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Cloud Architecture & Migration (AWS, Azure, GCP), Secure Hosting & Server Management, DevOps & CI/CD Automation",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    description:
      "Healthcare Data Security & Encryption, HIPAA & Regulatory Compliance, Penetration Testing, Identity Management",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "AI-Driven Healthcare Applications, Predictive Analytics & Clinical Insights, Intelligent Automation, Computer Vision & NLP",
  },
  {
    icon: Bot,
    title: "Chatbot Development",
    description:
      "AI Chatbots for Patient Support, WhatsApp & Mobile Bots, Appointment Booking & Query Handling, Multilingual NLP",
  },
  {
    icon: Users,
    title: "CRM Solutions",
    description:
      "Custom CRM Development, Healthcare CRM Implementation, Patient & Lead Management, Automation & Reporting Dashboards",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & BI",
    description:
      "Healthcare Data Analytics & Dashboards, Real-Time Reporting & Insights, Big Data Processing, Decision Support Systems",
  },
  {
    icon: Workflow,
    title: "Automation & Digital Transformation",
    description:
      "Workflow & Process Automation, RPA (Robotic Process Automation), Digital Transformation Consulting, Legacy Modernization",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Enterprise & Healthcare Software, Hospital Management Systems, API Development & Integrations, Third-Party Integrations",
  },
  {
    icon: TestTube2,
    title: "Software Testing & QA",
    description: "Manual & Automated Testing, Performance & Security Testing, Continuous QA & Release Support",
  },
  {
    icon: Wrench,
    title: "IT Maintenance & Support",
    description:
      "Application Maintenance & Monitoring, Website & System Support, Bug Fixes & Optimization, 24/7 Technical Support",
  },
  {
    icon: TrendingUp,
    title: "IT Consulting & Strategy",
    description:
      "IT Roadmap & Digital Strategy, Healthcare Technology Consulting, System Audits & Optimization, Technology Upgrade Planning",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance mb-6">
            Comprehensive IT Services for Healthcare
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Enterprise-grade solutions designed specifically for healthcare organizations seeking digital transformation
            and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
