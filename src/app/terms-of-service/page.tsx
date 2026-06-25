import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import { contactConfig } from "@/lib/contact";

const EFFECTIVE_DATE = "25 June 2026";

export default function TermsOfServicePage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Terms of Service"
        description={`Effective ${EFFECTIVE_DATE}`}
      />

      <section className="bg-white py-14 sm:py-18">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-blue max-w-none text-brand-muted">

            <p className="lead text-lg leading-relaxed">
              These Terms of Service govern your use of the Aspire Nursing Agency website
              (<strong>aspirenursing.com.au</strong>) and the staffing services we provide.
              By using our website or engaging our services, you agree to these terms.
            </p>

            <TermsSection title="1. About Aspire Nursing Agency">
              <p>
                Aspire Nursing Agency is a specialist aged care nursing agency based in
                Melbourne, Victoria, Australia. We connect aged care facilities and home care
                providers with qualified nursing and care professionals.
              </p>
            </TermsSection>

            <TermsSection title="2. Use of our website">
              <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
              <ul>
                <li>Infringe the rights of others</li>
                <li>Transmit any unsolicited or unauthorised advertising material</li>
                <li>Knowingly introduce viruses or harmful data</li>
                <li>Attempt to gain unauthorised access to our systems</li>
              </ul>
            </TermsSection>

            <TermsSection title="3. Staffing services">
              <p>
                All staffing placements arranged through Aspire Nursing Agency are subject to
                a separate services agreement. By submitting a staffing request, you acknowledge
                that:
              </p>
              <ul>
                <li>You are authorised to engage staffing services on behalf of your organisation</li>
                <li>All staff supplied are engaged as agency professionals and are not employees of your facility</li>
                <li>You are responsible for providing a safe working environment in accordance with applicable laws</li>
                <li>Shift details provided must be accurate and complete</li>
              </ul>
            </TermsSection>

            <TermsSection title="4. Professional standards">
              <p>
                All nursing and care professionals supplied by Aspire Nursing Agency are
                required to maintain current AHPRA registration (where applicable), relevant
                qualifications, and compliance with aged care standards. We undertake reasonable
                verification, but the facility remains responsible for ensuring all regulatory
                requirements are met on-site.
              </p>
            </TermsSection>

            <TermsSection title="5. Pricing and payment">
              <p>
                Indicative rates are displayed on our website for reference only. Final pricing
                is confirmed in your service agreement and may vary based on shift type, time,
                duration, and applicable loadings. Payment terms are as set out in your
                individual service agreement.
              </p>
            </TermsSection>

            <TermsSection title="6. Intellectual property">
              <p>
                All content on this website — including text, images, logos, and code — is
                owned by or licensed to Aspire Nursing Agency. You may not reproduce, distribute,
                or modify any content without our prior written consent.
              </p>
            </TermsSection>

            <TermsSection title="7. Limitation of liability">
              <p>
                To the extent permitted by Australian law, Aspire Nursing Agency is not liable
                for any indirect, incidental, or consequential damages arising from your use of
                our website or services. Our liability is limited to the value of the specific
                services provided.
              </p>
            </TermsSection>

            <TermsSection title="8. Third-party links">
              <p>
                Our website may contain links to third-party websites. These are provided for
                convenience only. We do not endorse or take responsibility for the content or
                practices of any third-party site.
              </p>
            </TermsSection>

            <TermsSection title="9. Governing law">
              <p>
                These Terms are governed by the laws of Victoria, Australia. Any disputes will
                be subject to the exclusive jurisdiction of the courts of Victoria.
              </p>
            </TermsSection>

            <TermsSection title="10. Contact us">
              <p>For any questions about these Terms, please contact:</p>
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
            </TermsSection>

            <TermsSection title="11. Changes to these terms">
              <p>
                We may update these Terms from time to time. Continued use of our website or
                services after any changes constitutes your acceptance of the updated terms.
                The effective date at the top of this page reflects the most recent revision.
              </p>
            </TermsSection>

          </div>

          <div className="mt-10 flex gap-4 border-t border-brand-border pt-8">
            <Link
              href="/privacy-policy"
              className="text-sm font-semibold text-brand-blue hover:text-brand-blue-dark"
            >
              Privacy Policy →
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

function TermsSection({
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
