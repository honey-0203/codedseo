import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/legal-page";
import { Important, Cards, Alert } from "@/components/legal/blocks";
import { poppins } from "@/components/legal/font";

const URL = "https://codedseo.com/terms-and-conditions";
const TITLE = "Terms & Conditions | CodedSEO";
const DESC =
  "The terms that govern use of the CodedSEO website and our SEO and digital marketing services, including payments, ownership, liability and governing law.";
const UPDATED = "September 29, 2026";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: TITLE, description: DESC, url: URL, siteName: "CodedSEO", type: "website" },
  robots: { index: true, follow: true },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${URL}#webpage`, url: URL, name: TITLE, description: DESC, inLanguage: "en-US", dateModified: "2026-09-29", publisher: { "@type": "Organization", name: "CodedSEO", url: "https://codedseo.com", email: "sales@codedseo.com", founder: { "@type": "Person", name: "Balbir Singh" }, address: { "@type": "PostalAddress", addressLocality: "Mohali", addressRegion: "Punjab", addressCountry: "IN" } } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://codedseo.com" },
      { "@type": "ListItem", position: 2, name: "Terms & Conditions", item: URL },
    ] },
  ],
};

const sections: LegalSection[] = [
  {
    id: "agreement", label: "Agreement to Terms", eyebrow: "Agreement", title: "Agreement to Terms",
    content: (
      <>
        <p>These Terms &amp; Conditions are an agreement between you (&quot;you&quot; or &quot;client&quot;) and CodedSEO (&quot;CodedSEO,&quot; &quot;we,&quot; &quot;us&quot; or &quot;our&quot;), an SEO and digital marketing agency founded by Balbir Singh and operated from Mohali, Punjab, India.</p>
        <p>They apply to your use of codedseo.com and to the services you buy from us. By using the website or engaging our services, you agree to these terms and to the policies they reference, including our <Link href="/privacy-policy">Privacy Policy</Link>, <Link href="/cancellation-refund-policy">Cancellation &amp; Refund Policy</Link> and <Link href="/legal-disclaimer">Legal Disclaimer</Link>. If you do not agree, please do not use the website or our services.</p>
      </>
    ),
  },
  {
    id: "services", label: "Our Services", eyebrow: "Services", title: "Our Services",
    content: (
      <>
        <p>CodedSEO provides SEO, AI search optimization and <Link href="/digital-marketing">digital marketing</Link> services for businesses in the United States and other countries, including:</p>
        <Cards items={[
          { icon: "01", title: "Organic & AI SEO", text: <p>Search strategy for Google and AI answers. See <Link href="/services/organic-seo">organic SEO</Link>.</p> },
          { icon: "02", title: "Technical SEO", text: <p>Crawlability, speed, structure and indexing work, starting with a <Link href="/free-audit">free audit</Link>.</p> },
          { icon: "03", title: "Content Strategy", text: <p>Keyword research, content planning and SEO writing.</p> },
          { icon: "04", title: "Local SEO", text: <p>Google Business Profile and local search visibility.</p> },
          { icon: "05", title: "Link Building", text: <p>Ethical outreach, digital PR and guest posting.</p> },
          { icon: "06", title: "Analytics & Reporting", text: <p>Tracking and reports tied to traffic, leads and revenue.</p> },
        ]} />
        <p>The exact scope, deliverables, timelines and price of each engagement are set out in your proposal, plan or statement of work. If that document conflicts with these terms, the signed document takes priority for that engagement.</p>
      </>
    ),
  },
  {
    id: "eligibility", label: "Eligibility", eyebrow: "Eligibility", title: "Eligibility",
    content: (
      <>
        <p>You must be at least 18 years old and legally able to enter a binding contract to buy our services. If you act for a business, you confirm you have authority to bind that business to these terms.</p>
        <p>You agree that the information you give us, including business details and contact information, is accurate and kept up to date.</p>
      </>
    ),
  },
  {
    id: "payments", label: "Fees & Payments", eyebrow: "Payments", title: "Fees, Billing and Payments",
    content: (
      <>
        <p>Prices are shown in U.S. dollars unless stated otherwise. Monthly plans, such as our <Link href="/seo-agency-usa">SEO packages</Link>, are billed in advance for each billing period and continue month to month until cancelled. One-time projects are billed as agreed in the proposal, which may include a deposit or milestone payments.</p>
        <p>Invoices are due on the date shown on the invoice. If a payment is late, we may pause work until the account is brought up to date. You are responsible for any bank or transfer fees charged by your own payment provider and for any sales or similar taxes that apply to you.</p>
        <Important title="Cancellations and refunds">
          <p>How to cancel and when refunds apply is explained in our <Link href="/cancellation-refund-policy">Cancellation &amp; Refund Policy</Link>, which forms part of these terms.</p>
        </Important>
      </>
    ),
  },
  {
    id: "client-duties", label: "Your Responsibilities", eyebrow: "Client responsibilities", title: "Your Responsibilities as a Client",
    content: (
      <>
        <p>To deliver results, we rely on you to:</p>
        <ul>
          <li>Give timely access to your website, CMS, Google Search Console, Google Analytics and other tools needed for the work.</li>
          <li>Provide accurate information, content and approvals when requested.</li>
          <li>Make sure content, images and materials you give us do not infringe anyone&apos;s rights.</li>
          <li>Keep your own backups of your website and data.</li>
        </ul>
        <p>Delays caused by missing access, content or approvals may extend timelines and do not by themselves entitle you to a refund.</p>
      </>
    ),
  },
  {
    id: "results", label: "No Guaranteed Rankings", eyebrow: "Results", title: "Results and Guarantees",
    content: (
      <>
        <p>Search engines and AI platforms are controlled by third parties and change often. We use industry best practices, but we do not guarantee any specific ranking, traffic, AI citation, lead or revenue outcome unless it is written into your agreement.</p>
        <p>Where we offer our 90-day results guarantee, it means we continue working at no extra cost until you see measurable ranking improvements, as described on our pricing and in your plan. It is not a cash refund.</p>
      </>
    ),
  },
  {
    id: "intellectual-property", label: "Intellectual Property", eyebrow: "Intellectual property", title: "Intellectual Property",
    content: (
      <>
        <p>The CodedSEO website and its content, including text, graphics, logos, designs, tools and code, are owned by or licensed to CodedSEO and protected by copyright, trademark and other laws.</p>
        <p>You may not copy, republish, sell or commercially use our content without our written permission, except where the law allows it. Third-party names and trademarks belong to their owners.</p>
      </>
    ),
  },
  {
    id: "deliverables", label: "Ownership of Deliverables", eyebrow: "Deliverables", title: "Ownership of Work We Create for You",
    content: (
      <>
        <p>Once you have paid for them in full, content, pages and other deliverables we create specifically for you belong to you. Accounts and profiles set up in your name (such as Google Business Profile) are always yours.</p>
        <p>We keep ownership of our own methods, templates, tools, internal documents and know-how, and we may use general knowledge gained from our work to serve other clients, without sharing your confidential information.</p>
      </>
    ),
  },
    {
    id: "license", label: "Website License", eyebrow: "Limited license", title: "Limited License to Use the Website",
    content: (
      <>
        <p>We give you a limited, non-exclusive, non-transferable right to access and use the website for lawful personal or business purposes, such as learning about SEO or evaluating our services. You may print or save reasonable parts of public pages for your own reference, as long as copyright notices remain.</p>
      </>
    ),
  },
  {
    id: "acceptable-use", label: "Acceptable Use", eyebrow: "Acceptable use", title: "Acceptable Use",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the website or our services for anything unlawful, fraudulent or abusive.</li>
          <li>Try to gain unauthorized access to our systems or other users&apos; data.</li>
          <li>Upload malware or interfere with the website&apos;s performance or security.</li>
          <li>Scrape or systematically copy website content without permission.</li>
          <li>Impersonate CodedSEO, our team or anyone else.</li>
          <li>Ask us to use spam, link schemes or other tactics that break search engine guidelines.</li>
        </ul>
      </>
    ),
  },
  {
    id: "confidentiality", label: "Confidentiality", eyebrow: "Confidentiality", title: "Confidentiality",
    content: (
      <>
        <p>We keep your non-public business information, logins, data and results confidential and use them only to deliver your services. You agree to keep our proposals, pricing and internal methods confidential in the same way.</p>
        <p>This does not apply to information that is already public, that the law requires us to disclose, or that you allow us to share, for example with your permission in a case study.</p>
      </>
    ),
  },
  {
    id: "data", label: "Data & Privacy", eyebrow: "Data", title: "Data and Privacy",
    content: (
      <>
        <p>How we collect, use and protect personal information is explained in our <Link href="/privacy-policy">Privacy Policy</Link>. When you give us access to your analytics or website, we use that data only for your project and remove our access when the engagement ends.</p>
      </>
    ),
  },
  {
    id: "third-party", label: "Third-Party Services", eyebrow: "Third parties", title: "Third-Party Websites and Services",
    content: (
      <>
        <p>Our website and services may link to or rely on third-party tools and platforms such as Google, Calendly and SEO software. We do not control them, and their own terms and privacy policies apply. We are not responsible for their availability, content or changes.</p>
      </>
    ),
  },
  {
    id: "availability", label: "Website Availability", eyebrow: "Availability", title: "Website Availability",
    content: (
      <>
        <p>We aim to keep the website available, but it may sometimes be unavailable because of maintenance, hosting issues or events outside our control. We may change, suspend or remove any part of the website at any time.</p>
        <Alert>
          <p>CodedSEO is not responsible for losses or inconvenience caused only by temporary website outages or interruptions.</p>
        </Alert>
      </>
    ),
  },
  {
    id: "warranties", label: "Warranties", eyebrow: "Warranties", title: "Disclaimer of Warranties",
    content: (
      <>
        <p>To the maximum extent permitted by law, the website and its content are provided &quot;as is&quot; and &quot;as available,&quot; without warranties of any kind. Website information is general and may contain errors, as explained in our <Link href="/legal-disclaimer">Legal Disclaimer</Link>.</p>
      </>
    ),
  },
  {
    id: "liability", label: "Limitation of Liability", eyebrow: "Liability", title: "Limitation of Liability",
    content: (
      <>
        <p>To the maximum extent permitted by law, CodedSEO will not be liable for indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue, data or business opportunities.</p>
        <p>Our total liability for any claim related to the website or our services is limited to the amount you paid CodedSEO for the services in the three months before the claim arose. Nothing in these terms limits liability that cannot legally be limited.</p>
      </>
    ),
  },
  {
    id: "indemnification", label: "Indemnification", eyebrow: "Indemnification", title: "Indemnification",
    content: (
      <>
        <p>You agree to protect CodedSEO from claims, losses and costs (including reasonable legal fees) arising from your breach of these terms, your misuse of the website, or content and materials you supply that infringe someone else&apos;s rights.</p>
      </>
    ),
  },
  {
    id: "termination", label: "Termination", eyebrow: "Termination", title: "Suspension and Termination",
    content: (
      <>
        <p>You may stop using the website at any time and cancel services as described in our <Link href="/cancellation-refund-policy">Cancellation &amp; Refund Policy</Link>. We may suspend or end access to the website or our services if you breach these terms, do not pay invoices, or ask us to do something unlawful or against search engine guidelines.</p>
        <p>Sections about payments owed, ownership, confidentiality, liability and governing law continue after termination.</p>
      </>
    ),
  },
  {
    id: "changes", label: "Changes to Terms", eyebrow: "Updates", title: "Changes to These Terms",
    content: (
      <>
        <p>We may update these terms from time to time. The latest version will always be on this page with its &quot;Last Updated&quot; date. For active clients, significant changes will be shared by email before they apply to an ongoing engagement.</p>
      </>
    ),
  },
  {
    id: "governing-law", label: "Governing Law", eyebrow: "Governing law", title: "Governing Law and Disputes",
    content: (
      <>
        <p>These terms are governed by the laws of India. Any dispute will be subject to the exclusive jurisdiction of the courts in Mohali, Punjab, unless your signed agreement says otherwise.</p>
        <p>Before starting any formal proceeding, both sides agree to try to resolve the issue in good faith by contacting each other in writing. Nothing here removes consumer rights that cannot be waived under the laws where you live.</p>
      </>
    ),
  },
  {
    id: "contact", label: "Contact", eyebrow: "Contact", title: "Contact CodedSEO",
    content: (
      <>
        <p>Questions about these Terms &amp; Conditions? We are happy to explain anything before you start working with us.</p>
        <Cards items={[
          { icon: "C", title: "Company", text: <p>CodedSEO, founded by Balbir Singh</p> },
          { icon: "@", title: "Email", text: <p><a href="mailto:sales@codedseo.com">sales@codedseo.com</a></p> },
          { icon: "L", title: "Location", text: <p>Mohali, Punjab, India. Serving clients across the USA.</p> },
          { icon: "?", title: "Contact Page", text: <p><Link href="/contact">codedseo.com/contact</Link></p> },
        ]} />
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LegalPage
        kicker="Legal / Terms"
        title="Terms"
        accent="& Conditions."
        intro="These Terms & Conditions explain the rules for using the CodedSEO website and working with us on SEO and digital marketing services. Please read them carefully before using our website or starting a project."
        updated={UPDATED}
        shieldLabel="Terms of Use"
        sidebarTitle="On this page"
        notice={{
          title: "Please Read Carefully",
          text: <p>By accessing or using the CodedSEO website or our services, you confirm that you have read and agree to these Terms &amp; Conditions. If you do not agree, please stop using the website and our services.</p>,
        }}
        sections={sections}
        cta={{
          title: "Ready to work together?",
          text: "Have a question about these terms, or want to see what we would do for your website first? Start with a free SEO audit.",
          href: "/free-audit",
          label: "Get a Free SEO Audit",
        }}
      />
    </div>
  );
}