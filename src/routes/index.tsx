import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Palette,
  Phone,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import aboutWorkspaceAsset from "@/assets/about-workspace.jpg";
import portraitAsset from "@/assets/vaddi-ramatheertham.jpeg";
import uiuxWorkshopAsset from "@/assets/uiux-workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaddi Ramatheertham | Senior Angular Developer" },
      { name: "description", content: "Portfolio of Vaddi Ramatheertham, a Senior Angular Developer and UI/UX Engineer with 8+ years of experience." },
      { property: "og:title", content: "Vaddi Ramatheertham | Senior Angular Developer" },
      { property: "og:description", content: "Angular engineering and UI/UX expertise backed by 8+ years of frontend experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const navItems = ["About", "Skills", "Experience", "Projects", "UI/UX", "Education", "Contact"];

const experience = [
  {
    dates: "23 Jul 2024 — Present",
    role: "Sr Associates",
    company: "Cognizant · AVEVA Client",
    current: true,
    points: [
      "Developing and enhancing interactive web-based visualization solutions for the Connect Visualization Services project using Angular, HTML5 and SASS.",
      "Building scalable, high-performance UI components and integrating backend services for seamless 3D and document visualization experiences.",
      "Contributing to code reviews and sprint planning while maintaining coding and performance standards.",
      "Collaborating with cross-functional teams and using Azure DevOps for CI/CD, version control and agile project management.",
    ],
  },
  {
    dates: "06 Mar 2023 — 28 Jun 2024",
    role: "Software Engineer",
    company: "NEEV Systems · Hyderabad",
    points: [
      "Developed UI pages with Angular 8, HTML5, SCSS, JavaScript, Bootstrap, Ng-Bootstrap and Angular Material.",
      "Worked across SDLC phases and Agile/Scrum, including daily Scrum meetings.",
      "Used Git for version control and Jenkins for continuous integration builds.",
    ],
  },
  {
    dates: "11 Oct 2021 — 17 Feb 2023",
    role: "UI Developer",
    company: "IDC Technologies · TCS Client · Hyderabad",
    points: [
      "Developed UI pages using Angular 8, HTML5, SCSS, JavaScript, Bootstrap and Angular Material.",
      "Worked across SDLC phases in Agile/Scrum and tracked tasks with Trello.",
      "Used Git and Jenkins, and tested application UI across real devices with BrowserStack.",
    ],
  },
  {
    dates: "10 Aug 2018 — 06 Oct 2021",
    role: "Digital Media Specialist",
    company: "UNITI Tech · Hyderabad",
    points: [
      "Resolved issues, defects and bugs through troubleshooting, tracking and documentation.",
      "Developed UI pages with HTML, CSS, Bootstrap, jQuery and JavaScript, styling interfaces with SASS.",
      "Managed content and project schedules, supported web content standards and worked extensively with OpenText CMS.",
    ],
  },
  {
    dates: "11 Dec 2017 — 08 Aug 2018",
    role: "Web Designer",
    company: "S2S Soft Solutions · Hyderabad",
    points: [
      "Designed client mockups and demos, including sketches, wireframes, prototypes and visual mockups.",
      "Developed UI pages using HTML, CSS, JavaScript, Bootstrap and jQuery.",
      "Researched technologies including jQuery Mobile for development efforts.",
    ],
  },
];

const skillGroups = [
  { title: "Angular & Frontend", items: ["Angular 8, 15 & 20", "Angular CLI", "HTML5", "CSS3", "SCSS", "JavaScript", "jQuery"] },
  { title: "UI Frameworks", items: ["Angular Material", "Angular Syncfusion", "Ng-Bootstrap", "Bootstrap 4 & 5", "Responsive Design", "Cross-browser Compatibility"] },
  { title: "UI/UX & Design", items: ["Figma", "Adobe XD", "Adobe Photoshop", "Sketches", "Wireframes", "Prototypes", "Visual Mockups"] },
  { title: "Testing", items: ["Karma", "Jasmine", "Jest", "Cypress Component Testing", "Developer Tools", "BrowserStack Testing"] },
  { title: "DevOps & Workflow", items: ["Azure DevOps", "Jenkins", "Git", "GitHub", "GitLab", "Agile", "Scrum", "Trello"] },
  { title: "Backend, CMS & Tools", items: ["Node.js", "MongoDB", "RESTful Services", "CMC OpenText Tool", "Visual Studio Code", "Dreamweaver", "Notepad", "GitHub Copilot"] },
];

const projects = [
  { name: "AVEVA Connect Visualization", url: "https://dev.visualization.capdev-connect.aveva.com", note: "Connect Visualization Services · Angular, HTML5, SASS · 3D and document visualization" },
  { name: "Marriott", url: "https://www.marriott.com" },
  { name: "Inhabitr", url: "https://inhabitr.com" },
  { name: "MySLOC", url: "https://mysloc.sloc.co.uk" },
  { name: "Copes Tech", url: "https://www.copes-tech.com" },
  { name: "Malvi Systems", url: "https://www.malvisystems.com" },
];

function Portfolio() {
  const [light, setLight] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
    return () => document.documentElement.classList.remove("light");
  }, [light]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6">
          <a href="#home" className="min-w-0 font-display text-xl font-bold text-foreground" aria-label="Vaddi Ramatheertham home">VR<span className="text-primary">.</span></a>
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace("/", "")}`} className="text-xs font-semibold uppercase text-muted-foreground transition-colors hover:text-primary">{item}</a>)}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Button variant="icon" size="icon" onClick={() => setLight((value) => !value)} aria-label={light ? "Use dark theme" : "Use light theme"} title={light ? "Dark theme" : "Light theme"}>
              {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </Button>
            <Button asChild variant="secondary" className="hidden sm:inline-flex"><a href="/vaddi-ramatheertham-resume.doc" download="Vaddi-Ramatheertham-Resume.doc"><Download className="size-4" /> Resume</a></Button>
            <Button variant="icon" size="icon" className="lg:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation">{menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}</Button>
          </div>
        </div>
        {menuOpen && <nav className="border-t border-border bg-background px-4 py-4 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-2">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase().replace("/", "")}`} onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-primary">{item}</a>)}</div></nav>}
      </header>

      <section id="home" className="relative px-4 pb-18 pt-30 sm:px-6 lg:pb-24 lg:pt-36">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-18">
          <div className="reveal-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase text-primary"><span className="size-2 rounded-full bg-primary" />8+ years in frontend engineering</div>
            <p className="mb-3 font-display text-base font-bold text-accent light:text-primary">Senior Angular Developer · UI/UX Engineer</p>
            <h1 className="mb-6 font-display text-[2.25rem] font-bold leading-[1.05] text-foreground sm:text-[2.75rem] lg:text-[3.5rem]">Vaddi<br />Ramatheertham</h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">Results-driven frontend professional building responsive, user-centric web applications with Angular, modern UI frameworks and thoughtful interaction design.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><a href="#experience"><BriefcaseBusiness className="size-4" />View Experience</a></Button>
              <Button asChild variant="secondary" size="lg"><a href="#projects">View Projects</a></Button>
              <Button asChild variant="secondary" size="lg"><a href="/vaddi-ramatheertham-resume.doc" download="Vaddi-Ramatheertham-Resume.doc"><Download className="size-4" />Download Resume</a></Button>
              <Button asChild variant="ghost" size="lg"><a href="#contact">Contact Me<ArrowDown className="size-4" /></a></Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px] reveal-up [animation-delay:150ms]">
            <div className="absolute -inset-3 rounded-2xl border border-primary/20" />
            <img src={portraitAsset.url} alt="Vaddi Ramatheertham" className="relative aspect-square w-full rounded-xl border border-border object-cover object-top shadow-2xl" />
            <div className="absolute -bottom-5 left-4 right-4 rounded-lg border border-primary/25 bg-card/95 p-4 shadow-xl backdrop-blur sm:left-8 sm:right-auto sm:min-w-72">
              <p className="text-xs font-bold uppercase text-primary">Current role</p><p className="mt-1 font-display font-semibold text-card-foreground">Sr Associates · Cognizant</p><p className="text-sm text-muted-foreground">AVEVA Client · Hyderabad</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative overflow-hidden border-y border-border px-4 py-20 sm:px-6">
        <img src={aboutWorkspaceAsset.url} alt="Professional software development workspace" className="absolute inset-0 size-full object-cover opacity-75" loading="lazy" />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <SectionHeading kicker="Profile" title="Engineering clarity into every interface." />
          <div className="space-y-5 text-base leading-8 text-muted-foreground light:text-black">
            <p>With more than eight years of experience, I combine over six years in UI development with two years in UX design to create responsive, user-centric web applications.</p>
            <p>My work spans Angular front-end architecture, performance optimization, RESTful service integration, cross-browser compatibility and CMS-based development. I collaborate with cross-functional teams to translate business requirements into efficient, visually polished web solutions.</p>
            <div className="grid grid-cols-2 gap-4 pt-3 sm:grid-cols-3">
              <Metric value="8+" label="Years experience" /><Metric value="6+" label="Years UI development" /><Metric value="2" label="Years UX design" />
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-24 sm:px-6"><div className="mx-auto max-w-7xl"><SectionHeading kicker="Capabilities" title="Core expertise" centered /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map((group) => <article key={group.title} className="rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/35"><h3 className="mb-5 font-display text-lg font-semibold text-card-foreground">{group.title}</h3><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="rounded border border-border bg-secondary px-2.5 py-1.5 text-xs font-medium text-secondary-foreground">{item}</span>)}</div></article>)}</div></div></section>

      <section id="experience" className="bg-secondary/35 px-4 py-24 sm:px-6"><div className="mx-auto max-w-7xl"><SectionHeading kicker="Career" title="Professional experience" /><div className="mt-14 space-y-7">{experience.map((item) => <article key={item.company} className={`grid gap-5 rounded-lg border p-6 md:grid-cols-[190px_minmax(0,1fr)] md:p-8 ${item.current ? "border-primary/40 bg-primary/5 shadow-lg shadow-primary/5" : "border-border bg-card"}`}><div><p className={item.current ? "text-sm font-bold text-primary" : "text-sm font-bold text-muted-foreground"}>{item.dates}</p>{item.current && <span className="mt-3 inline-flex rounded-full bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">Current</span>}</div><div><h3 className="font-display text-2xl font-semibold text-card-foreground">{item.role}</h3><p className="mt-1 font-medium text-primary">{item.company}</p><ul className="mt-5 space-y-3">{item.points.map((point) => <li key={point} className="flex gap-3 text-sm leading-6 text-muted-foreground"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />{point}</li>)}</ul></div></article>)}</div></div></section>

      <section id="projects" className="px-4 py-24 sm:px-6"><div className="mx-auto max-w-7xl"><SectionHeading kicker="Selected work" title="Projects from my resume" /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{projects.map((project, index) => <a key={project.name} href={project.url} target="_blank" rel="noreferrer" className={`group rounded-lg border p-6 transition-all hover:-translate-y-1 hover:border-primary/45 ${index === 0 ? "border-primary/35 bg-primary/5 md:col-span-2 lg:col-span-2" : "border-border bg-card"}`}><div className="mb-8 flex items-start justify-between"><span className="font-mono text-xs text-muted-foreground">0{index + 1}</span><ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" /></div><h3 className="font-display text-xl font-semibold text-card-foreground">{project.name}</h3>{project.note && <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{project.note}</p>}<p className="mt-4 truncate text-xs text-primary">{project.url.replace("https://", "")}</p></a>)}</div></div></section>

      <section id="uiux" className="px-4 py-10 sm:px-6"><div className="dark-panel relative mx-auto max-w-7xl overflow-hidden rounded-xl border border-border p-8 sm:p-12 lg:p-16"><img src={uiuxWorkshopAsset.url} alt="Design thinking workshop with interface sketches" className="absolute inset-0 size-full object-cover opacity-40" loading="lazy" /><div className="absolute inset-0 bg-background/40" /><div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end"><div><Palette className="mb-7 size-9 text-primary" /><p className="mb-3 text-xs font-bold uppercase text-primary">UI/UX practice</p><h2 className="max-w-3xl font-display text-4xl font-bold text-foreground sm:text-5xl">From wireframe to production interface.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">Two years of UX design experience across sketches, wireframes, prototypes and visual mockups, supported by Figma, Adobe XD and Photoshop. My frontend background keeps design decisions grounded in responsive, buildable outcomes.</p></div><Button asChild variant="secondary" size="lg" className="justify-self-start lg:justify-self-end"><a href="https://www.behance.net/vramu0401a0b7" target="_blank" rel="noreferrer">View Behance<ArrowUpRight className="size-4" /></a></Button></div></div></section>

      <section id="education" className="px-4 py-24 sm:px-6"><div className="mx-auto max-w-7xl"><SectionHeading kicker="Foundation" title="Education" /><div className="mt-12 grid gap-5 md:grid-cols-3"><EducationCard year="2015" degree="B Tech" school="NOVA College of Engineering" board="JNTUH" score="74" /><EducationCard year="2012" degree="Diploma" school="Loyola Polytechnic College" board="SBTET" score="80" /><EducationCard year="2009" degree="SSC" school="P.R Govt High School" board="BSEAP" score="79" /></div><div className="mt-8 rounded-lg border border-border bg-card p-6"><p className="text-xs font-bold uppercase text-primary">Strengths & languages</p><p className="mt-3 text-sm leading-7 text-muted-foreground">Creative thinking · Strong work ethic · Customer focused · Elegant team player · Smart worker · Honesty</p><p className="mt-1 text-sm text-muted-foreground">English · Telugu · Hindi</p></div></div></section>

      <section id="contact" className="border-t border-border bg-card px-4 py-24 sm:px-6"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-end"><div><SectionHeading kicker="Contact" title="Let’s connect." /><p className="mt-6 max-w-xl text-muted-foreground">For professional opportunities and frontend or UI/UX conversations, reach me directly by email or phone.</p></div><div className="grid gap-4 sm:grid-cols-2"><a href="mailto:vramu11358@gmail.com" className="group rounded-lg border border-border bg-background p-5 hover:border-primary/45"><Mail className="mb-4 size-5 text-primary" /><span className="block text-xs uppercase text-muted-foreground">Email</span><span className="mt-1 block break-all font-medium text-foreground">vramu11358@gmail.com</span></a><a href="tel:+919492291130" className="group rounded-lg border border-border bg-background p-5 hover:border-primary/45"><Phone className="mb-4 size-5 text-primary" /><span className="block text-xs uppercase text-muted-foreground">Phone</span><span className="mt-1 block font-medium text-foreground">+91 94922 91130</span></a></div></div></section>

      <footer className="border-t border-border px-4 py-8 sm:px-6"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Vaddi Ramatheertham</p><div className="flex gap-5"><a href="/vaddi-ramatheertham-resume.doc" download="Vaddi-Ramatheertham-Resume.doc" className="hover:text-primary">Resume</a><a href="https://www.behance.net/vramu0401a0b7" target="_blank" rel="noreferrer" className="hover:text-primary">Behance</a><a href="#home" className="hover:text-primary">Back to top</a></div></div></footer>
    </main>
  );
}

function SectionHeading({ kicker, title, centered = false }: { kicker: string; title: string; centered?: boolean }) {
  return <div className={centered ? "text-center" : ""}><p className="mb-3 text-xs font-bold uppercase text-primary">{kicker}</p><h2 className="font-display text-3xl font-bold text-foreground sm:text-4xl">{title}</h2></div>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="border-l-2 border-primary pl-4"><p className="font-display text-2xl font-bold text-foreground">{value}</p><p className="text-xs text-muted-foreground light:text-black">{label}</p></div>;
}

function EducationCard({ year, degree, school, board, score }: { year: string; degree: string; school: string; board: string; score: string }) {
  return <article className="rounded-lg border border-border bg-card p-6"><div className="flex items-start justify-between"><GraduationCap className="size-6 text-primary" /><span className="text-sm font-bold text-muted-foreground">{year}</span></div><h3 className="mt-7 font-display text-xl font-semibold text-card-foreground">{degree}</h3><p className="mt-2 text-sm text-muted-foreground">{school}</p><p className="mt-1 text-xs text-primary">{board} · Aggregate {score}</p></article>;
}