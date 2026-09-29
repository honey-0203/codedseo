import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/legal-page";
import { Important, Cards, Flow, Matrix, Alert } from "@/components/legal/blocks";
import { poppins } from "@/components/legal/font";

const URL = "https://codedseo.com/cancellation-refund-policy";
const TITLE = "Cancellation & Refund Policy | CodedSEO";
const DESC =
  "How CodedSEO handles cancellations, refunds, monthly SEO plans, one-time projects and payment disputes for clients in the USA and worldwide.";
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
      { "@type": "ListItem", position: 2, name: "Cancellation & Refund Policy", item: URL },
    ] },
  ],
};

const sections: LegalSection[] = [
  {
    id: "general", label: "General Policy", eyebrow: "General policy", title: "How Cancellations and Refunds Are Handled",
    content: (
      <>
        <p>CodedSEO wants payment and cancellation terms to be clear before any work begins. Every request is reviewed based on the service purchased, the agreed scope, the payment stage, the work already completed and any resources already committed.</p>
        <Cards items={[
          { icon: "01", title: "Service Type", text: <p>Monthly SEO plans, audits, consulting and one-time projects can have different cancellation conditions.</p> },
          { icon: "02", title: "Work Completed", text: <p>Completed research, strategy, optimization, content or development work is taken into account.</p> },
          { icon: "03", title: "Resources Used", text: <p>Specialist time, paid tools and approved third-party costs can affect the amount eligible for a refund.</p> },
          { icon: "04", title: "Agreement Terms", text: <p>A signed proposal, quote or contract can include additional service-specific payment terms.</p> },
        ]} />
      </>
    ),
  },
  {
    id: "monthly", label: "Monthly Plans", eyebrow: "Monthly services", title: "Monthly SEO and Marketing Plans",
    content: (
      <>
        <p>Our monthly plans, including the Starter and Growth <Link href="/seo-agency-usa">SEO packages</Link>, cover work such as technical SEO, keyword research, content optimization, <Link href="/blog/what-is-ai-seo">AI search optimization</Link>, link building, local SEO, reporting and strategy calls. Plans are billed in U.S. dollars, month to month, with no long-term contract.</p>
        <p>Each monthly payment covers the work and resources assigned to that billing period. Once the work for a billing period has started or its report has been delivered, that period is generally not refundable.</p>
        <Important title="Cancelling stops future billing, not completed work.">
          <p>You can cancel at any time before your next billing date to avoid the next charge. Work already completed in the current period, and everything we built for you, stays yours.</p>
        </Important>
      </>
    ),
  },
  {
    id: "cancellation", label: "How to Cancel", eyebrow: "Cancellation", title: "How to Cancel a Service",
    content: (
      <>
        <p>Please send cancellation requests in writing to <a href="mailto:sales@codedseo.com">sales@codedseo.com</a>, through your project communication channel, or through our <Link href="/contact">contact page</Link>. Include your business name and the service you want to cancel.</p>
        <Flow steps={[
          { title: "Send your cancellation request", text: <p>Tell us which service or project you want to cancel and from which date.</p> },
          { title: "We review the project status", text: <p>We check completed work, pending work, deliverables and committed resources.</p> },
          { title: "We confirm the payment position", text: <p>Any refund or outstanding amount is calculated under your agreement and this policy.</p> },
          { title: "Future billing is stopped", text: <p>Recurring charges are cancelled and we confirm the final date of service in writing.</p> },
        ]} />
      </>
    ),
  },
  {
    id: "projects", label: "One-Time Projects", eyebrow: "One-time projects", title: "Website, Audit and Other Project Work",
    content: (
      <>
        <p>One-time projects include website development, paid SEO audits, technical audits, landing pages, content projects, consulting and other fixed deliverables. Our <Link href="/free-audit">free SEO audit</Link> costs nothing, so no refund applies to it.</p>
        <p>If a paid project is cancelled before work begins, the payment can be reviewed for a refund. Once work has started, we consider the work completed, milestones reached, resources used and any approved third-party expenses.</p>
        <Matrix head={["Project stage", "General approach"]} rows={[
          ["Before work begins", "May be reviewed for refund"],
          ["Planning or research started", "Completed work is deducted"],
          ["Development or execution started", "Completed work is deducted"],
          ["Milestone delivered or approved", "Generally non-refundable"],
        ]} />
      </>
    ),
  },
  {
    id: "nonrefund", label: "Non-Refundable Work", eyebrow: "Non-refundable work", title: "Services That Use Dedicated Resources",
    content: (
      <>
        <p>Once work has started, the following <Link href="/services">services</Link> are generally non-refundable to the extent work, resources or deliverables have already been provided:</p>
        <ul>
          <li>SEO and technical SEO services</li>
          <li>AI SEO, AEO and generative search optimization</li>
          <li>Local SEO and Google Business Profile work</li>
          <li>Content strategy and content writing</li>
          <li>Link building, digital PR and outreach</li>
          <li>SEO audits and consulting</li>
          <li>Website design and development</li>
          <li>Analytics, reporting and strategy work</li>
        </ul>
        <p>This does not limit any refund you are entitled to under applicable law or a specific written agreement.</p>
      </>
    ),
  },
    {
    id: "responsibilities", label: "Your Responsibilities", eyebrow: "Client responsibilities", title: "Your Cooperation Affects Timelines",
    content: (
      <>
        <p>Good results depend on timely access, information and feedback. Delays caused by missing access, late content or delayed approvals do not by themselves create a right to a refund.</p>
        <ul>
          <li>Provide access to your website, Google Search Console, Google Analytics and other platforms.</li>
          <li>Share accurate information about your business, services and locations.</li>
          <li>Supply agreed content, images or materials on time.</li>
          <li>Review deliverables and send feedback within a reasonable time.</li>
          <li>Give approvals when a project step needs them.</li>
        </ul>
      </>
    ),
  },
  {
    id: "results", label: "SEO Results", eyebrow: "SEO results", title: "SEO Takes Time and Has No Fixed Outcome",
    content: (
      <>
        <p>We use proven technical, content and AI search strategies to improve organic visibility, but search performance depends on factors outside our control, such as algorithm updates, competitor activity and market changes. Read more in our <Link href="/legal-disclaimer">Legal Disclaimer</Link>.</p>
        <p>Our 90-day results guarantee means that if you do not see measurable ranking improvements, we keep working at no extra cost until you do. It is a commitment to continue the work, not a cash refund.</p>
        <Alert>
          <p>A refund cannot be requested only because a specific ranking, traffic target or revenue goal was not reached within a certain period, unless your written agreement says otherwise.</p>
        </Alert>
      </>
    ),
  },
  {
    id: "eligibility", label: "Refund Eligibility", eyebrow: "Refund eligibility", title: "When a Refund Can Be Considered",
    content: (
      <>
        <p>Every refund request is reviewed individually. A refund may be considered in situations such as:</p>
        <Cards items={[
          { icon: "✓", title: "Duplicate Payment", text: <p>A payment made twice for the same invoice will be corrected or refunded.</p> },
          { icon: "✓", title: "Work Not Started", text: <p>If no work has begun and no resources are committed, the payment can be reviewed.</p> },
          { icon: "✓", title: "Billing Error", text: <p>If you were charged the wrong amount or after a confirmed cancellation, we will fix it.</p> },
          { icon: "!", title: "Completed Work", text: <p>Payments for completed work, delivered milestones or used resources are generally not refundable.</p> },
        ]} />
      </>
    ),
  },
  {
    id: "process", label: "Refund Process", eyebrow: "Refund process", title: "How Approved Refunds Are Paid",
    content: (
      <>
        <p>We aim to respond to refund requests within 5 business days. Approved refunds are returned to the original payment method, usually within 10 business days of approval. Your bank or card provider may take extra time to show the credit.</p>
        <p>Refunds are made in the currency of the original payment. Bank charges, currency conversion fees and payment processor fees charged by third parties may not be recoverable.</p>
      </>
    ),
  },
  {
    id: "disputes", label: "Payment Disputes", eyebrow: "Payment disputes", title: "Payment Disputes and Chargebacks",
    content: (
      <>
        <p>If a chargeback or payment dispute is opened after services have been delivered, CodedSEO may share relevant records with the payment provider, such as proposals, invoices, emails, reports, deliverables and work logs.</p>
        <Important title="Please contact us before opening a dispute.">
          <p>Most billing questions can be resolved quickly by email. Reach out to <a href="mailto:sales@codedseo.com">sales@codedseo.com</a> first so we can review and fix the issue.</p>
        </Important>
      </>
    ),
  },
  {
    id: "governing-law", label: "Governing Law", eyebrow: "Governing law", title: "Governing Law",
    content: (
      <>
        <p>CodedSEO is operated from Mohali, Punjab, India, and serves clients in the United States and other countries. This policy is governed by the laws of India, and disputes will be subject to the courts in Mohali, Punjab, unless your written agreement states otherwise.</p>
        <p>Nothing in this policy removes rights you may have under consumer protection laws that apply to you and cannot be waived.</p>
      </>
    ),
  },
  {
    id: "contact", label: "Contact", eyebrow: "Contact", title: "Questions About a Cancellation or Refund?",
    content: (
      <>
        <p>If you are not sure whether a service can be cancelled or a payment qualifies for a refund, contact us with your invoice number and service name. We are happy to explain before you decide.</p>
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

export default function RefundPolicyPage() {
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LegalPage
        kicker="CodedSEO Legal"
        title="Cancellation"
        accent="& Refund Policy"
        intro="Clear terms for cancelling services, requesting refunds, managing payments and understanding what happens when SEO or digital marketing work has already started."
        updated={UPDATED}
        shieldLabel="Fair Billing"
        sidebarTitle="On this page"
        notice={{
          title: "Before You Read",
          text: <p>CodedSEO provides SEO, AI SEO, technical SEO, content, local SEO, link building and related digital marketing services. Because these services involve research, strategy, specialist time and completed deliverables, cancellation and refund decisions depend on the stage and type of work involved.</p>,
        }}
        sections={sections}
        cta={{
          title: "Not sure how this applies to you?",
          text: "Talk to the CodedSEO team about your service, project stage, cancellation or payment question before you take the next step.",
          href: "/contact",
          label: "Contact CodedSEO",
        }}
      />
    </div>
  );
}