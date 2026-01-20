import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Mail, MapPin, Shield, Lock, Cookie, Share2, Database, Clock, UserCheck, Heart, Link2, Globe, FileText, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy | Imperial Healthcare Systems",
  description: "Learn how Imperial Healthcare Systems collects, uses, and protects your personal information. Read our privacy policy for details on data security, cookies, and your rights.",
  keywords: "privacy policy, data protection, HIPAA, healthcare privacy, data security, Imperial Healthcare Systems",
}

const sections = [
  { id: "information-we-collect", title: "1. Information We Collect", icon: Database },
  { id: "how-we-use", title: "2. How We Use Your Information", icon: FileText },
  { id: "cookies", title: "3. Cookies and Tracking", icon: Cookie },
  { id: "data-sharing", title: "4. Data Sharing", icon: Share2 },
  { id: "data-security", title: "5. Data Security", icon: Lock },
  { id: "data-retention", title: "6. Data Retention", icon: Clock },
  { id: "privacy-rights", title: "7. Your Privacy Rights", icon: UserCheck },
  { id: "hipaa", title: "8. HIPAA Notice", icon: Heart },
  { id: "third-party", title: "9. Third-Party Links", icon: Link2 },
  { id: "international", title: "10. International Transfers", icon: Globe },
  { id: "changes", title: "11. Policy Changes", icon: FileText },
  { id: "contact", title: "12. Contact Information", icon: Phone },
]

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0B5ED7]/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0B5ED7]/10 mb-6">
              <Shield className="h-8 w-8 text-[#0B5ED7]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Your privacy matters to us. Learn how we protect your information.
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium">Effective Date:</span> January 1, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Navigation */}
            <aside className="lg:w-72 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h3 className="font-semibold text-foreground mb-4">Quick Navigation</h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-[#0B5ED7]/5 rounded-lg transition-colors"
                    >
                      <section.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="truncate">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              <div className="prose prose-slate max-w-none">
                {/* Introduction */}
                <div className="bg-[#0B5ED7]/5 border border-[#0B5ED7]/20 rounded-xl p-6 mb-8">
                  <p className="text-foreground leading-relaxed m-0">
                    Imperial Healthcare Systems LLC ("Imperial," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website{" "}
                    <a href="https://www.imperialhealthcaresystems.com" className="text-[#0B5ED7] hover:underline">
                      https://www.imperialhealthcaresystems.com
                    </a>{" "}
                    (the "Site") or interact with our services.
                  </p>
                  <p className="text-foreground leading-relaxed mt-4 mb-0">
                    <strong>By using the Site, you consent to the practices described in this Privacy Policy.</strong>
                  </p>
                </div>

                {/* Section 1: Information We Collect */}
                <section id="information-we-collect" className="scroll-mt-24 mb-12">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <Database className="h-6 w-6 text-[#0B5ED7]" />
                    1. Information We Collect
                  </h2>
                  <p className="text-muted-foreground mb-4">We may collect the following categories of information:</p>
                  
                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">a. Personal Information</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Name</li>
                    <li>Company name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Inquiry or message content</li>
                    <li>Any information voluntarily submitted through forms or communications</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">b. Technical & Usage Data</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Device type and operating system</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring URLs</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                {/* Section 2: How We Use Your Information */}
                <section id="how-we-use" className="scroll-mt-24 mb-12">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <FileText className="h-6 w-6 text-[#0B5ED7]" />
                    2. How We Use Your Information
                  </h2>
                  <p className="text-muted-foreground mb-4">We use collected information to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Respond to inquiries and requests</li>
                    <li>Provide services and customer support</li>
                    <li>Improve website performance and user experience</li>
                    <li>Send business communications (if opted-in)</li>
                    <li>Maintain security and prevent fraud</li>
                    <li>Comply with legal and regulatory obligations</li>
                  </ul>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-6">
                    <p className="text-green-800 font-medium m-0">
                      We do not sell personal data to third parties.
                    </p>
                  </div>
                </section>

                {/* Section 3: Cookies */}
                <section id="cookies" className="scroll-mt-24 mb-12">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <Cookie className="h-6 w-6 text-[#0B5ED7]" />
                    3. Cookies and Tracking Technologies
                  </h2>
                  <p className="text-muted-foreground mb-4">We use cookies and similar technologies to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Enable essential site functionality</li>
                    <li>Analyze traffic and usage patterns</li>
                    <li>Improve performance and content relevance</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    You may control cookies through your browser settings. Disabling cookies may impact certain site features.
                  </p>
                </section>

                {/* Section 4: Data Sharing */}
                <section id="data-sharing" className="scroll-mt-24 mb-12">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <Share2 className="h-6 w-6 text-[#0B5ED7]" />
                    4. Data Sharing and Disclosure
                  </h2>
                  <p className="text-muted-foreground mb-4">We may share information only with:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Trusted service providers who assist in website hosting, analytics, and communications</li>
                    <li>Legal authorities if required by law or to protect our rights</li>
                    <li>Business partners solely for service fulfillment</li>
                  </ul>
                  <p className="text-muted-foreground mt-4 font-medium">
                    All third parties are required to protect your information.
                  </p>
                </section>

                {/* Section 5: Data Security */}
                <section id="data-security" className="scroll-mt-24 mb-12">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <Lock className="h-6 w-6 text-[#0B5ED7]" />
                    5. Data Security
                  </h2>
                  <p className="text-muted-foreground">
                    We implement reasonable administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, or misuse. However, no transmission method over the Internet is completely secure.
                  </p>
                </section>

                {/* Section 6: Data Retention */}
                <section id="data-retention" className="scroll-mt-24 mb-12">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <Clock className="h-6 w-6 text-[#0B5ED7]" />
                    6. Data Retention
                  </h2>
                  <p className="text-muted-foreground">
                    We retain personal data only for as long as necessary to fulfill business purposes, comply with legal requirements, or resolve disputes.
                  </p>
                </section>

                {/* Section 7: Privacy Rights */}
                <section id="privacy-rights" className="scroll-mt-24 mb-12">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <UserCheck className="h-6 w-6 text-[#0B5ED7]" />
                    7. Your Privacy Rights
                  </h2>
                  <p className="text-muted-foreground mb-4">Depending on your jurisdiction, you may have the right to:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Access your personal data</li>
                    <li>Request correction or deletion</li>
                    <li>Withdraw consent</li>
                    <li>Restrict processing</li>
                    <li>Request data portability</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">
                    To exercise these rights, contact us using the information below.
                  </p>
                </section>

                {/* Section 8: HIPAA */}
                <section id="hipaa" className="scroll-mt-24 mb-12">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <Heart className="h-6 w-6 text-[#0B5ED7]" />
                    8. HIPAA & Healthcare Data Notice
                  </h2>
                  <div className="bg-[#FF7A00]/10 border border-[#FF7A00]/30 rounded-lg p-4">
                    <p className="text-foreground m-0">
                      Imperial Healthcare Systems provides healthcare technology services but does not directly collect or store Protected Health Information (PHI) through this website unless explicitly disclosed. Any healthcare data processing follows applicable HIPAA and regulatory standards when contractually applicable.
                    </p>
                  </div>
                </section>

                {/* Section 9: Third-Party Links */}
                <section id="third-party" className="scroll-mt-24 mb-12">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <Link2 className="h-6 w-6 text-[#0B5ED7]" />
                    9. Third-Party Links
                  </h2>
                  <p className="text-muted-foreground">
                    Our Site may contain links to external websites. We are not responsible for the privacy practices or content of third-party sites.
                  </p>
                </section>

                {/* Section 10: International Transfers */}
                <section id="international" className="scroll-mt-24 mb-12">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <Globe className="h-6 w-6 text-[#0B5ED7]" />
                    10. International Data Transfers
                  </h2>
                  <p className="text-muted-foreground">
                    If you access our Site outside the United States, your information may be transferred and processed in the United States in accordance with applicable laws.
                  </p>
                </section>

                {/* Section 11: Changes */}
                <section id="changes" className="scroll-mt-24 mb-12">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <FileText className="h-6 w-6 text-[#0B5ED7]" />
                    11. Changes to This Privacy Policy
                  </h2>
                  <p className="text-muted-foreground">
                    We may update this Privacy Policy periodically. Updates will be posted on this page with a revised effective date.
                  </p>
                </section>

                {/* Section 12: Contact */}
                <section id="contact" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-foreground flex items-center gap-3 mb-4">
                    <Phone className="h-6 w-6 text-[#0B5ED7]" />
                    12. Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    If you have questions about this Privacy Policy or your data rights, contact us at:
                  </p>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h3 className="font-bold text-foreground text-lg mb-4">Imperial Healthcare Systems LLC</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-[#0B5ED7] flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          212 N. 2nd St. STE 100<br />
                          Richmond, KY 40475<br />
                          United States
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-[#0B5ED7] flex-shrink-0" />
                        <a
                          href="mailto:info@imperialhealthsystems.com"
                          className="text-[#0B5ED7] hover:underline"
                        >
                          info@imperialhealthsystems.com
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
