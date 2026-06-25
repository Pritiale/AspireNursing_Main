import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { contactConfig } from "@/lib/contact";

const EFFECTIVE_DATE = "25 June 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Effective ${EFFECTIVE_DATE}`}
      />

      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-blue max-w-none text-brand-muted">

            <p className="lead text-lg leading-relaxed">
              Aspire Nursing Agency (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your
              privacy in accordance with the <strong>Australian Privacy Act 1988 (Cth)</strong> and
              the Australian Privacy Principles (APPs).
            </p>

            <PolicySection title="1. What information we collect">
              <p>We may collect the following types of personal information:</p>
              <ul>
                <li>Name, contact details (phone, email, address)</li>
                <li>Professional qualifications, AHPRA registration numbers, and employment history (for care professionals)</li>
                <li>Facility name, contact person, and shift requirements (for service providers)</li>
                <li>Payment and billing information where applicable</li>
                <li>Website usage data collected via cookies and analytics tools</li>
              </ul>
            </PolicySection>

            <PolicySection title="2. How we collect information">
              <p>We collect personal information directly from you when you:</p>
              <ul>
                <li>Submit a staffing request or enquiry through our website or by phone</li>
                <li>Apply for a role with Aspire Nursing Agency</li>
                <li>Contact us by email, phone, or social media</li>
                <li>Browse our website (via cookies and analytics)</li>
              </ul>
            </PolicySection>

            <PolicySection title="3. Why we collect information">
              <p>We use your personal information to:</p>
              <ul>
                <li>Match qualified nursing and care professionals with aged care facilities and providers</li>
                <li>Process staffing requests and manage shift bookings</li>
                <li>Communicate with you about your enquiry, booking, or application</li>
                <li>Comply with legal and regulatory obligations (including aged care compliance)</li>
                <li>Improve our services and website</li>
              </ul>
            </PolicySection>

            <PolicySection title="4. Disclosure of information">
              <p>
                We do not sell your personal information. We may share it with:
              </p>
              <ul>
                <li>Aged care facilities and home care providers (for the purpose of fulfilling a staffing request)</li>
                <li>Nursing and care professionals (to facilitate a placement)</li>
                <li>Third-party service providers who assist us in operating our business (e.g. IT systems, payroll), under strict confidentiality obligations</li>
                <li>Regulatory bodies where required by law</li>
              </ul>
            </PolicySection>

            <PolicySection title="5. Data security">
              <p>
                We take reasonable steps to protect your personal information from misuse,
                interference, loss, and unauthorised access. Information is stored securely and
                access is limited to authorised personnel only.
              </p>
            </PolicySection>

            <PolicySection title="6. Cookies & analytics">
              <p>
                Our website may use cookies and analytics tools (such as Google Analytics) to
                understand how visitors use the site. You can disable cookies in your browser
                settings, though this may affect some site functionality.
              </p>
            </PolicySection>

            <PolicySection title="7. Accessing or correcting your information">
              <p>
                You have the right to request access to, or correction of, the personal
                information we hold about you. To make a request, please contact us using the
                details below.
              </p>
            </PolicySection>

            <PolicySection title="8. Complaints">
              <p>
                If you believe we have breached the Australian Privacy Principles, you may
                lodge a complaint with us first. If you are not satisfied with our response,
                you may contact the{" "}
                <a
                  href="https://www.oaic.gov.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:text-brand-blue-dark"
                >
                  Office of the Australian Information Commissioner (OAIC)
                </a>.
              </p>
            </PolicySection>

            <PolicySection title="9. Contact us">
              <p>For privacy-related enquiries, please contact:</p>
              <p>
                <strong>Aspire Nursing Agency</strong><br />
                Email:{" "}
                <a href={contactConfig.emailHref} className="text-brand-blue hover:text-brand-blue-dark">
                  {contactConfig.email}
                </a>
                <br />
                Phone:{" "}
                <a href={contactConfig.phoneHref} className="text-brand-blue hover:text-brand-blue-dark">
                  {contactConfig.phone}
                </a>
              </p>
            </PolicySection>

            <PolicySection title="10. Changes to this policy">
              <p>
                We may update this Privacy Policy from time to time. The effective date at the
                top of this page will reflect the most recent revision. Continued use of our
                website or services after any changes constitutes your acceptance of the
                updated policy.
              </p>
            </PolicySection>

          </div>

          <div className="mt-10 flex gap-4 border-t border-brand-border pt-8">
            <Link
              href="/terms-of-service"
              className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Terms of Service →
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-brand-blue-dark">{title}</h2>
      <div className="mt-3 space-y-3 text-[0.95rem] leading-relaxed text-brand-muted">
        {children}
      </div>
    </div>
  );
}
