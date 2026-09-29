import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, { type LegalSection } from "@/components/legal/legal-page";
import { Important, Panel, Cards } from "@/components/legal/blocks";
import { poppins } from "@/components/legal/font";

const URL = "https://codedseo.com/legal-disclaimer";
const TITLE = "Legal Disclaimer | CodedSEO";
const DESC =
  "Read the CodedSEO Legal Disclaimer covering website information, SEO and AI search results, case studies, third-party tools, pricing, liability and governing law.";
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
      { "@type": "ListItem", position: 2, name: "Legal Disclaimer", item: URL },
    ] },
  ],
};

const sections: LegalSection[] = [
  {
    id: "website-information", label: "Website Information", eyebrow: "Website information", title: "Use of Website Information",
    content: (
      <>
        <p>The information on the CodedSEO website, including our <Link href="/blog">blog</Link>, <Link href="/learn">learning hub</Link>, guides and service pages, is provided for general informational and educational purposes about SEO, AI search, digital marketing and website optimization.</p>
        <p>We work to keep this information useful and current, but CodedSEO does not represent or warrant that every piece of information is complete, accurate, up to date or suitable for your specific situation.</p>
        <p>Any action you take based on information found on this website is taken at your own discretion and risk.</p>
      </>
    ),
  },
  {
    id: "reliance", label: "Reliance on Information", eyebrow: "Reliance", title: "Reliance on Information",
    content: (
      <>
        <p>Please evaluate information carefully before using it to make business, technical, marketing or financial decisions. SEO recommendations, statistics, search trends, examples and strategies published by CodedSEO may not produce the same outcome for every website, industry or market.</p>
        <Important title="Make Your Own Assessment">
          <p>Consider your own website, competitors, budget, resources and goals before implementing any recommendation. If you would like advice specific to your business, request a <Link href="/free-audit">free SEO audit</Link> instead of relying on general content.</p>
        </Important>
      </>
    ),
  },
  {
    id: "seo-results", label: "SEO Results", eyebrow: "SEO results", title: "SEO Results Are Not Guaranteed",
    content: (
      <>
        <p>Search engine optimization depends on many factors outside the direct control of any SEO agency, including search engine algorithms, competitor activity, market demand, website changes, content quality, technical implementation and user behavior.</p>
        <p>For this reason, CodedSEO does not guarantee any specific ranking position, traffic level, conversion rate, revenue or lead volume. Any results-based commitment, such as our 90-day results guarantee, applies only under the terms stated in your written agreement or on our <Link href="/#pricing">pricing section</Link>.</p>
        <Panel label="Search performance" title="Many Variables Influence Results">
          <p>SEO campaigns need ongoing testing, monitoring and optimization. Results vary with the website&apos;s starting position, competition, industry, target location in the United States or elsewhere, and how quickly recommendations are implemented.</p>
        </Panel>
        <Cards items={[
          { icon: "01", title: "Algorithms Change", text: <p>Google and other search engines update their ranking systems many times each year.</p> },
          { icon: "02", title: "Competition Changes", text: <p>Competitors can change their content, links, websites and marketing at any time.</p> },
          { icon: "03", title: "Markets Change", text: <p>Search demand and customer behavior shift with seasons, trends and the economy.</p> },
          { icon: "04", title: "Websites Change", text: <p>Technical changes to your site can affect performance even during an active campaign.</p> },
        ]} />
      </>
    ),
  },
  {
    id: "case-studies", label: "Case Studies & Reviews", eyebrow: "Case studies & testimonials", title: "Case Studies, Reviews and Testimonials",
    content: (
      <>
        <p>Results shown in our <Link href="/case-studies">case studies</Link>, <Link href="/reviews">client reviews</Link> and <Link href="/video-testimonials">video testimonials</Link> reflect the experience of specific clients under specific conditions. They are not a promise or typical expectation of the results you will achieve.</p>
        <p>Testimonials represent the honest opinions of the people who gave them. In line with U.S. Federal Trade Commission (FTC) guidance on endorsements, we will clearly disclose any testimonial where a material connection, such as payment or a free service, exists between CodedSEO and the reviewer.</p>
      </>
    ),
  },
  {
    id: "ai-search", label: "AI Search & AI Tools", eyebrow: "AI search", title: "AI Search Visibility and AI-Assisted Content",
    content: (
      <>
        <p>Our <Link href="/blog/what-is-ai-seo">AI SEO</Link> services aim to improve how often your brand appears in AI-generated answers such as Google AI Overviews, ChatGPT, Gemini and Perplexity. These platforms are owned and controlled by third parties and change how they select sources without notice, so CodedSEO cannot guarantee that any brand will be mentioned, cited or linked.</p>
        <p>We may use AI tools to support research and drafting. All content we publish for clients is reviewed and edited by people, but you remain responsible for confirming that content about your products, services and claims is accurate before it is published on your website.</p>
      </>
    ),
  },
  {
    id: "third-party", label: "Third-Party Resources", eyebrow: "Third-party resources", title: "Third-Party Websites, Tools and Resources",
    content: (
      <>
        <p>Our website may link to or mention external websites, tools, platforms and publications, such as Google Search Console, Google Analytics, Semrush or Ahrefs. These are included for convenience or reference only.</p>
        <p>CodedSEO does not control and is not responsible for the accuracy, availability, security or practices of third-party content. Your use of third-party websites and services is governed by their own terms and privacy policies.</p>
      </>
    ),
  },
  {
    id: "accuracy", label: "Accuracy & Updates", eyebrow: "Accuracy", title: "Accuracy and Website Updates",
    content: (
      <>
        <p>Search engines, platforms, regulations, pricing and market conditions change quickly, so some information on this website may become outdated. We may update, correct or remove content at any time without prior notice.</p>
        <p>Historical statistics, screenshots, examples and industry observations should not be treated as a guarantee of current or future performance.</p>
      </>
    ),
  },
    {
    id: "pricing", label: "Pricing & Offers", eyebrow: "Pricing", title: "Pricing, Offers and Service Information",
    content: (
      <>
        <p>Service descriptions, packages, prices (shown in U.S. dollars unless stated otherwise), promotions and features on our website, including our <Link href="/services">services</Link> and <Link href="/seo-agency-usa">SEO packages</Link>, may change without prior notice.</p>
        <p>A price or package shown on the website is not by itself a binding service agreement. Final pricing and deliverables depend on your project scope and the written agreement between you and CodedSEO.</p>
        <Important title="Your Written Agreement Takes Priority">
          <p>Where a signed proposal, contract or statement of work exists, its terms govern your engagement with CodedSEO, together with our Terms and Conditions.</p>
        </Important>
      </>
    ),
  },
  {
    id: "intellectual", label: "Intellectual Property", eyebrow: "Intellectual property", title: "Copyrights, Trademarks and Ownership",
    content: (
      <>
        <p>Unless otherwise stated, the content on this website, including text, graphics, logos, designs, videos and tools, is owned by or licensed to CodedSEO and protected by copyright, trademark and other intellectual property laws.</p>
        <p>You may not copy, reproduce, distribute or commercially use CodedSEO materials without our written permission. Third-party names, logos and trademarks remain the property of their respective owners, and their mention does not imply endorsement.</p>
      </>
    ),
  },
  {
    id: "warranties", label: "Warranties", eyebrow: "Warranties", title: "Disclaimer of Warranties",
    content: (
      <>
        <p>To the maximum extent permitted by applicable law, this website and its materials are provided on an &quot;as is&quot; and &quot;as available&quot; basis, without warranties of any kind, whether express or implied.</p>
        <p>CodedSEO does not warrant that the website will be uninterrupted, secure, error-free or free from harmful components, or that its information is complete, reliable or fit for a particular purpose.</p>
      </>
    ),
  },
  {
    id: "liability", label: "Limitation of Liability", eyebrow: "Liability", title: "Limitation of Liability",
    content: (
      <>
        <p>To the maximum extent permitted by applicable law, CodedSEO, its founder, employees, contractors and partners will not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of this website or reliance on its information.</p>
        <p>This includes loss of profits, revenue, data, customers, business opportunities or goodwill. Nothing in this disclaimer excludes liability that cannot legally be excluded or limited.</p>
      </>
    ),
  },
  {
    id: "professional", label: "Professional Advice", eyebrow: "Professional judgment", title: "No Substitute for Professional Advice",
    content: (
      <>
        <p>Information on this website is not legal, financial, tax, accounting or other professional advice. For decisions with significant legal, financial or technical consequences, please consult a qualified professional in your state or country.</p>
        <p>SEO and digital marketing information should always be considered in the context of your own business goals and circumstances.</p>
      </>
    ),
  },
  {
    id: "governing-law", label: "Governing Law", eyebrow: "Governing law", title: "Governing Law and Jurisdiction",
    content: (
      <>
        <p>CodedSEO is operated from Mohali, Punjab, India, and serves clients in the United States and other countries. This disclaimer is governed by the laws of India, and any disputes relating to it will be subject to the jurisdiction of the courts in Mohali, Punjab, unless your written agreement with us states otherwise.</p>
        <p>If you access this website from the United States or elsewhere, you are responsible for complying with the laws that apply in your location.</p>
      </>
    ),
  },
  {
    id: "changes", label: "Changes to Disclaimer", eyebrow: "Updates", title: "Changes to This Disclaimer",
    content: (
      <>
        <p>We may revise this Legal Disclaimer to reflect changes in our services, website, business practices, technology or legal requirements. The updated version will be posted on this page with a new &quot;Last Updated&quot; date.</p>
        <p>Please review this page from time to time if you regularly use information or resources from the CodedSEO website.</p>
      </>
    ),
  },
  {
    id: "contact", label: "Contact", eyebrow: "Contact", title: "Questions About This Disclaimer?",
    content: (
      <>
        <p>If you have questions about this Legal Disclaimer or the information on our website, please get in touch with our team through the <Link href="/contact">contact page</Link> or by email.</p>
        <Cards items={[
          { icon: "C", title: "Company", text: <p>CodedSEO, founded by Balbir Singh</p> },
          { icon: "@", title: "Email", text: <p><a href="mailto:sales@codedseo.com">sales@codedseo.com</a></p> },
          { icon: "L", title: "Location", text: <p>Mohali, Punjab, India. Serving clients across the USA.</p> },
          { icon: "W", title: "Website", text: <p><Link href="/">codedseo.com</Link></p> },
        ]} />
      </>
    ),
  },
];

export default function LegalDisclaimerPage() {
  return (
    <div className={poppins.variable}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LegalPage
        kicker="Legal / Disclaimer"
        title="Legal"
        accent="Disclaimer."
        intro="The information on the CodedSEO website is provided for general informational and educational purposes. This disclaimer explains the limits of our website content, SEO and AI search results, case studies, third-party resources and the business decisions you make using our content."
        updated={UPDATED}
        shieldLabel="Information Notice"
        sidebarTitle="Disclaimer"
        notice={{
          title: "Important Information",
          text: <p>Please read this Legal Disclaimer before relying on information published on the CodedSEO website. By using our website, you acknowledge that its content is provided for general information and may not apply to your specific business circumstances.</p>,
        }}
        sections={sections}
        cta={{
          title: "Want clarity before you start?",
          text: "If you have questions about our services, SEO expectations, deliverables or pricing, talk to the CodedSEO team before you make a decision.",
          href: "/contact",
          label: "Talk to CodedSEO",
        }}
      />
    </div>
  );
}