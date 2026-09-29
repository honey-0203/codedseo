import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/legal-page";
import { Important, Cards, Alert } from "@/components/legal/blocks";
import { poppins } from "@/components/legal/font";

const URL = "https://codedseo.com/privacy-policy";
const TITLE = "Privacy Policy | CodedSEO";
const DESC =
  "How CodedSEO collects, uses, shares and protects personal information, including your rights under US state privacy laws and India's DPDP Act.";
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
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: URL },
    ] },
  ],
};

const sections: LegalSection[] = [
  {
    id: "privacy-note", label: "Privacy Note", eyebrow: "Privacy note", title: "Privacy Note",
    content: (
      <>
        <p>This Privacy Policy explains how CodedSEO (&quot;CodedSEO,&quot; &quot;we,&quot; &quot;our&quot; or &quot;us&quot;) collects, uses, shares and protects personal information when you visit codedseo.com, contact us or use our services.</p>
        <p>It applies to information collected through our website, forms, emails, calls and other interactions where this policy is referenced. By using our website or sharing information with us, you acknowledge the practices described here.</p>
      </>
    ),
  },
  {
    id: "who-we-are", label: "Who We Are", eyebrow: "Who we are", title: "Who We Are",
    content: (
      <>
        <p>CodedSEO is an SEO and digital marketing agency founded by Balbir Singh and operated from Mohali, Punjab, India. We work with businesses in the United States and other countries on <Link href="/services">SEO services</Link>, AI SEO, technical SEO, content, local SEO, link building and <Link href="/digital-marketing">digital marketing</Link>.</p>
        <p>For the personal information described in this policy, CodedSEO is the business responsible for deciding how and why it is used. You can reach us at <a href="mailto:sales@codedseo.com">sales@codedseo.com</a>.</p>
      </>
    ),
  },
  {
    id: "information", label: "Information We Collect", eyebrow: "Information", title: "What Information We Collect",
    content: (
      <>
        <p>We mainly collect information you choose to give us, for example when you request a <Link href="/free-audit">free SEO audit</Link>, fill in a form, book a call, email us or become a client. Depending on the interaction, this can include:</p>
        <Cards items={[
          { icon: "01", title: "Contact Information", text: <p>Name, email address, phone number and similar details you provide.</p> },
          { icon: "02", title: "Business Information", text: <p>Company name, website URL, industry, location and your SEO or marketing goals.</p> },
          { icon: "03", title: "Project and Account Access", text: <p>Access you grant us to tools such as Google Search Console, Google Analytics or your website, and the data inside them needed for the work.</p> },
          { icon: "04", title: "Communications and Billing", text: <p>Messages, call notes, feedback, invoices and payment records. Card details are handled by payment providers, not stored by us.</p> },
        ]} />
        <p>We only ask for information that is reasonably needed for the purpose you share it for.</p>
      </>
    ),
  },
  {
    id: "automatic", label: "Automatic Information", eyebrow: "Automatic data", title: "Information Collected Automatically",
    content: (
      <>
        <p>When you visit our website, some technical information is collected automatically by our hosting and analytics tools. This can include:</p>
        <ul>
          <li>IP address and approximate location (city or country level).</li>
          <li>Browser, device type and operating system.</li>
          <li>Pages visited, time on page and the website that referred you.</li>
          <li>General interaction data such as clicks and scrolls.</li>
        </ul>
        <p>We currently use <strong>Google Analytics 4</strong> and <strong>Vercel Analytics</strong> to understand how visitors use the site, and <strong>Calendly</strong> when you book a call. Each of these providers processes data under its own privacy policy.</p>
      </>
    ),
  },
  {
    id: "cookies", label: "Cookies", eyebrow: "Cookies", title: "Cookies and Similar Technologies",
    content: (
      <>
        <p>Cookies are small files stored on your device. We use necessary cookies to run the website and analytics cookies (for example from Google Analytics) to measure traffic and improve our content.</p>
        <p>You can block or delete cookies in your browser settings, and you can opt out of Google Analytics with Google&apos;s <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">opt-out browser add-on</a>. Blocking some cookies may affect how parts of the site work.</p>
      </>
    ),
  },
  {
    id: "indirect", label: "Indirect Information", eyebrow: "Indirect information", title: "Information From Other Sources",
    content: (
      <>
        <p>We may receive information about you from referral partners, advertising platforms, public business directories or when you contact us through a third-party platform. What we receive depends on that platform and the permissions you have given it.</p>
        <p>If you follow, message or mention CodedSEO on social media, we can see the information that platform makes visible to us. Your use of those platforms is governed by their own privacy policies.</p>
      </>
    ),
  },
  {
    id: "use", label: "How We Use Information", eyebrow: "Purpose", title: "How We Use Your Information",
    content: (
      <>
        <p>We use personal information to:</p>
        <ul>
          <li>Respond to your questions, audit requests and booking requests.</li>
          <li>Prepare proposals, audits, recommendations and reports.</li>
          <li>Deliver, manage and bill for the services you buy.</li>
          <li>Operate, secure and improve our website and content.</li>
          <li>Send service updates and, where permitted, marketing emails.</li>
          <li>Detect and prevent fraud, spam and misuse.</li>
          <li>Comply with legal, tax and accounting obligations.</li>
        </ul>
        <Important title="We do not sell your personal information.">
          <p>CodedSEO does not sell personal information for money and does not share it with third parties for their own independent marketing.</p>
        </Important>
      </>
    ),
  },
  {
    id: "legal-bases", label: "Legal Bases", eyebrow: "Processing", title: "Why We Are Allowed to Use Your Information",
    content: (
      <>
        <p>Depending on where you are, we process personal information because you gave consent (for example when you submit a form), because we need it to provide services under a contract, because we have a legitimate business interest such as keeping the website secure, or because the law requires it.</p>
        <p>Under India&apos;s Digital Personal Data Protection Act, 2023, we rely on your consent or other lawful uses permitted by the Act, and you can withdraw consent at any time by emailing us.</p>
      </>
    ),
  },
    {
    id: "sharing", label: "Sharing & Service Providers", eyebrow: "Sharing", title: "Who We Share Information With",
    content: (
      <>
        <p>We share personal information only with trusted service providers that help us run our business, such as website hosting (Vercel), analytics (Google), scheduling (Calendly), email and file storage, payment processors and accounting tools. They may only use it to provide services to us.</p>
        <p>We may also disclose information if required by law, to protect our rights or users&apos; safety, or as part of a business transfer such as a merger. We will never share access to your Google Search Console, Analytics or website with anyone who is not working on your project.</p>
      </>
    ),
  },
  {
    id: "transfers", label: "International Transfers", eyebrow: "International transfers", title: "International Data Transfers",
    content: (
      <>
        <p>CodedSEO is based in India, and our service providers may store data in the United States or other countries. By using our website or services, your information may be transferred to and processed in India, the United States and other locations where these providers operate.</p>
        <p>We take reasonable steps to make sure your information stays protected wherever it is processed.</p>
      </>
    ),
  },
  {
    id: "security", label: "Data Security", eyebrow: "Protection", title: "How We Protect Personal Information",
    content: (
      <>
        <p>We use reasonable administrative, technical and organizational safeguards, such as encrypted connections (HTTPS), access controls, strong passwords and limited staff access, to protect personal information from unauthorized access, loss or misuse.</p>
        <Alert>
          <p>No website, email or storage system is completely secure. We cannot guarantee absolute security, but we will notify you and the relevant authorities of a data breach where the law requires it.</p>
        </Alert>
      </>
    ),
  },
  {
    id: "retention", label: "Data Retention", eyebrow: "Retention", title: "How Long We Keep Information",
    content: (
      <>
        <p>We keep personal information only for as long as needed for the purpose it was collected: enquiry details while we discuss your request, client records for the length of the engagement, and invoices and tax records for as long as the law requires.</p>
        <p>When information is no longer needed, we delete or anonymize it. Access you granted to your tools is removed when a project ends.</p>
      </>
    ),
  },
  {
    id: "rights", label: "Your Privacy Rights", eyebrow: "Your rights", title: "Your Privacy Rights",
    content: (
      <>
        <p>Depending on where you live, you may have the right to:</p>
        <ul>
          <li>Know what personal information we hold about you and get a copy.</li>
          <li>Correct inaccurate information.</li>
          <li>Delete your personal information.</li>
          <li>Opt out of the sale or sharing of personal information and of targeted advertising.</li>
          <li>Withdraw consent and unsubscribe from marketing.</li>
          <li>Appeal our decision on your request, and not be treated differently for using these rights.</li>
        </ul>
        <p><strong>US residents:</strong> California (CCPA/CPRA) and other state privacy laws give residents rights like these where the law applies to us. <strong>India:</strong> under the DPDP Act you can request access, correction and erasure, raise a grievance and nominate someone to act for you.</p>
        <p>To use any of these rights, email <a href="mailto:sales@codedseo.com">sales@codedseo.com</a>. We may need to verify your identity and will respond within the time required by applicable law.</p>
      </>
    ),
  },
  {
    id: "email-marketing", label: "Email Marketing", eyebrow: "Email", title: "Email Communications",
    content: (
      <>
        <p>If we send you marketing emails, each one will include a clear way to unsubscribe, in line with the U.S. CAN-SPAM Act. You will still receive service and billing emails while you are a client.</p>
      </>
    ),
  },
  {
    id: "children", label: "Children's Privacy", eyebrow: "Children", title: "Children's Privacy",
    content: (
      <>
        <p>Our website and services are meant for businesses and are not directed to children. We do not knowingly collect personal information from children under 13 (as defined by the U.S. COPPA) or from anyone under 18 without verifiable parental consent as required by Indian law. If you believe a child has sent us information, contact us and we will delete it.</p>
      </>
    ),
  },
  {
    id: "third-party", label: "Third-Party Links", eyebrow: "Third parties", title: "Third-Party Websites and Links",
    content: (
      <>
        <p>Our website, <Link href="/blog">blog</Link> and resources may link to other websites and tools. Those sites have their own privacy practices, and CodedSEO is not responsible for them. Please read their privacy policies before sharing information.</p>
      </>
    ),
  },
  {
    id: "updates", label: "Policy Updates", eyebrow: "Updates", title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>We may update this Privacy Policy when our practices, tools or legal requirements change. The new version will be posted here with an updated &quot;Last Updated&quot; date, and for significant changes we may also notify clients by email.</p>
        <p>You can also read our <Link href="/legal-disclaimer">Legal Disclaimer</Link> and <Link href="/cancellation-refund-policy">Cancellation &amp; Refund Policy</Link>.</p>
      </>
    ),
  },
  {
    id: "contact", label: "Contact & Grievances", eyebrow: "Contact", title: "Contact Us and Grievances",
    content: (
      <>
        <p>For privacy questions, requests or complaints, including grievances under India&apos;s DPDP Act, please contact us. If you are not satisfied with our response, you may complain to the data protection authority where you live.</p>
        <Cards items={[
          { icon: "C", title: "Company", text: <p>CodedSEO, Mohali, Punjab, India</p> },
          { icon: "G", title: "Grievance Contact", text: <p>Balbir Singh, Founder</p> },
          { icon: "@", title: "Email", text: <p><a href="mailto:sales@codedseo.com">sales@codedseo.com</a></p> },
          { icon: "?", title: "Contact Page", text: <p><Link href="/contact">codedseo.com/contact</Link></p> },
        ]} />
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LegalPage
        kicker="Legal / Privacy"
        title="Privacy"
        accent="Policy."
        intro="At CodedSEO, we respect your privacy. This policy explains how information shared with us is collected, used, stored and protected when you visit our website or work with us, and the rights you have over it."
        updated={UPDATED}
        shieldLabel="Privacy First"
        sidebarTitle="On this page"
        notice={{
          title: "Privacy First",
          text: <p>CodedSEO collects only the information reasonably needed to run our website, answer your enquiries, understand how the site is used and deliver our services. We do not sell your personal information.</p>,
        }}
        sections={sections}
        cta={{
          title: "Questions about your data?",
          text: "Ask us what we hold, request a copy, or have it deleted. Email sales@codedseo.com or use our contact page and we will help.",
          href: "/contact",
          label: "Contact CodedSEO",
        }}
      />
    </div>
  );
}