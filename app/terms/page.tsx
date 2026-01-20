import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms and Conditions | Imperial Healthcare Systems",
  description:
    "Terms and Conditions for Imperial Healthcare Systems LLC. Read our policies regarding website use, intellectual property, liability, and more.",
  keywords: [
    "terms and conditions",
    "legal",
    "Imperial Healthcare Systems",
    "website policy",
    "user agreement",
  ],
}

const sections = [
  { id: "use-of-site", title: "Use of the Site" },
  { id: "user-accounts", title: "User Accounts" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "third-party-links", title: "Third-Party Links" },
  { id: "disclaimer", title: "Disclaimer of Warranties" },
  { id: "limitation", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact Us" },
]

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms and Conditions
            </h1>
            <p className="text-background/70 text-lg">
              Effective Date: January 1, 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Table of Contents - Sticky Sidebar */}
              <aside className="lg:col-span-1">
                <div className="lg:sticky lg:top-24">
                  <h2 className="font-semibold text-foreground mb-4">
                    Quick Navigation
                  </h2>
                  <nav className="space-y-2">
                    {sections.map((section) => (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      >
                        {section.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3 prose prose-slate max-w-none">
                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to Imperial Healthcare Systems ("we," "us," or
                    "our"). These Terms and Conditions ("Terms") govern your
                    access to and use of the website
                    https://www.imperialhealthcaresystems.com (the "Site"),
                    services, content, and any digital or interactive tools
                    provided by Imperial Healthcare Systems.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    By accessing or using the Site in any manner, you agree to
                    be bound by these Terms. If you do not agree with any part
                    of these Terms, you may not access or use the Site.
                  </p>
                </div>

                {/* Section 1 */}
                <section id="use-of-site" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    1. Use of the Site
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree to use the Site only for lawful purposes and in
                    accordance with these Terms. You may not use the Site in any
                    way that:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>
                      Violates applicable laws, regulations, or third-party
                      rights;
                    </li>
                    <li>Interferes with or disrupts the Site or servers;</li>
                    <li>
                      Attempts to gain unauthorized access to any portion of the
                      Site.
                    </li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section id="user-accounts" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    2. User Accounts
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Some features may require registration. You are responsible
                    for:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Providing accurate, complete information;</li>
                    <li>
                      Maintaining the confidentiality of your login credentials;
                    </li>
                    <li>All activities under your account.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Imperial Healthcare Systems reserves the right to terminate
                    accounts or refuse service without notice.
                  </p>
                </section>

                {/* Section 3 */}
                <section
                  id="intellectual-property"
                  className="mb-12 scroll-mt-24"
                >
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    3. Intellectual Property
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All content on this Site, including text, graphics, logos,
                    icons, images, and software ("Content"), is the property of
                    Imperial Healthcare Systems or its licensors and is
                    protected by copyright, trademark, and other intellectual
                    property laws.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    You may not modify, copy, reproduce, republish, upload,
                    transmit, distribute, or create derivative works from the
                    Content without written permission.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="third-party-links" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    4. Third-Party Links
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Site may contain links to other websites maintained by
                    third parties. These links are provided for convenience
                    only. Imperial Healthcare Systems does not endorse and is
                    not responsible for the content, privacy practices, or
                    availability of such third-party websites.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="disclaimer" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    5. Disclaimer of Warranties
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Site and all Content are provided "as is" and "as
                    available" without any warranties of any kind, express or
                    implied, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Warranties of merchantability;</li>
                    <li>Fitness for a particular purpose;</li>
                    <li>Non-infringement.</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Imperial Healthcare Systems does not guarantee that the Site
                    will be uninterrupted, error-free, or free from harmful
                    components.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="limitation" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    6. Limitation of Liability
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    To the fullest extent permitted by law, Imperial Healthcare
                    Systems and its officers, directors, employees, and agents
                    are not liable for:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>
                      Any direct, indirect, incidental, special, or
                      consequential damages;
                    </li>
                    <li>Loss of data, income, profits;</li>
                    <li>
                      Any claim arising from your use of or inability to use the
                      Site.
                    </li>
                  </ul>
                </section>

                {/* Section 7 */}
                <section id="indemnification" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    7. Indemnification
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    You agree to indemnify and hold harmless Imperial Healthcare
                    Systems and its affiliates against any claims, liabilities,
                    losses, damages, costs, or expenses arising from:
                  </p>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                    <li>Your use of the Site;</li>
                    <li>Violation of these Terms;</li>
                    <li>
                      Any breach of your representations and warranties.
                    </li>
                  </ul>
                </section>

                {/* Section 8 */}
                <section id="governing-law" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    8. Governing Law
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These Terms are governed by the laws of the State of
                    Kentucky, United States, without regard to conflict of law
                    principles. Any legal actions will be resolved in applicable
                    courts in Kentucky.
                  </p>
                </section>

                {/* Section 9 */}
                <section id="changes" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    9. Changes to Terms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Imperial Healthcare Systems may revise these Terms at any
                    time without prior notice. The revised Terms become
                    effective when posted on the Site. Your continued use after
                    posting constitutes acceptance of the updated Terms.
                  </p>
                </section>

                {/* Section 10 */}
                <section id="contact" className="mb-12 scroll-mt-24">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    10. Contact Us
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you have any questions about these Terms, please contact
                    us at:
                  </p>
                  <address className="not-italic text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">
                      Imperial Healthcare Systems LLC
                    </strong>
                    <br />
                    212 N. 2nd St. STE 100
                    <br />
                    Richmond, KY 40475, United States
                    <br />
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:info@imperialhealthsystems.com"
                      className="text-primary hover:underline"
                    >
                      info@imperialhealthsystems.com
                    </a>
                  </address>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
