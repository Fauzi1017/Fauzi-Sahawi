export const profile = {
  name: 'Fauzi Sahawi',
  role: 'UI/UX & Product Designer',
  intro: 'I bring clarity to complex products — from early ideas to thoughtful interfaces ready to build.',
  bio: 'I’m Fauzi, a UI/UX and Product Designer based in Indonesia. My work spans financial products, learning experiences, and services that people rely on every day.',
  philosophy: 'I connect user needs with product goals, then carry that thinking through flows, interfaces, and developer handoff. My web development background helps bridge the space between a design and a working product.',
  linkedin: 'https://www.linkedin.com/in/fauzi-sahawi-b42999184/',
  email: 'Fauzizee10@gmail.com',
  whatsapp: 'https://api.whatsapp.com/send/?phone=6282117897068',
  portrait: '/images/fauzi.webp',
};
export const projects = [
  { slug: 'donorun', name: 'Donorun', category: 'Product design · Social impact', type: 'Hackathon project', year: '2021', image: '/images/donorun.webp', imageAlt: 'Original Donorun website design with blood donation information and red interface elements', headline: 'Connecting people. Supporting a vital cause.', description: 'A digital experience connecting blood donors with people who need them.', role: 'Product Designer', tools: ['Figma', 'Maze'], context: 'Created for the Indigo Hackathon Festival, Donorun explores how a digital product can connect volunteer blood donors with people in need of blood.', contribution: 'In a team of five, I worked on product research, UX and UI design, wireframes, interactive prototypes, and usability testing.', decisions: ['Translate the donation journey into a structured interface.', 'Develop wireframes and high-fidelity screens for the product concept.', 'Use interactive prototypes and usability testing to inform iteration.'], outcome: 'The project produced a product concept and interface designs for the hackathon. The visual shown here is the original website design.', source: 'https://www.fauzisahawi.com/' },
  { slug: 'jna-express', name: 'JNA Express', category: 'UI/UX design · Logistics', type: 'Application redesign', year: '2022', image: '/images/jna.webp', imageAlt: 'Original JNA Express redesign showing blue and white delivery application screens', headline: 'A clearer journey for every delivery.', description: 'Rethinking the delivery app through information architecture, flows, and interface design.', role: 'UI/UX Designer', tools: ['Figma', 'Illustrator', 'Protopie'], context: 'A redesign of the JNA Express delivery application under PT Globalindo 21 Express, focused on the structure and experience of its digital service.', contribution: 'My work included competitor analysis, information architecture, system design, wireframes, and interface design.', decisions: ['Organize content and features through information architecture.', 'Map user flows before developing screen layouts.', 'Carry the JNA Express identity into the redesigned interface.'], outcome: 'The design work resulted in a set of redesigned application screens. The original interface overview is presented below.', source: 'https://www.fauzisahawi.com/' },
  { slug: 'trigo', name: 'Trigo', category: 'Product design · Travel', type: 'University thesis', year: '2021', image: '/images/trigo.webp', imageAlt: 'Original Trigo tourism application case study with mobile screens and travel illustrations', headline: 'Making room for local discovery.', description: 'A mobile tourism concept that helps people explore Banten.', role: 'UI/UX Designer', tools: ['Figma', 'Illustrator', 'Maze'], context: 'Trigo is my university final project: a mobile application concept for tourism in Banten, Indonesia.', contribution: 'I worked from needs analysis and market research through information architecture, wireframes, interface design, and usability testing.', decisions: ['Use competitor analysis to inform the product structure.', 'Organize tourism content into information architecture and user flows.', 'Develop high-fidelity interfaces and evaluate the experience through usability testing.'], outcome: 'The thesis produced a tourism application design and prototype. This project is presented as academic design work.', source: 'https://www.fauzisahawi.com/' },
];
export type Project = typeof projects[number];
export const experience = [
  { period: '2022 — Present', role: 'Analyst, UI/UX Designer', company: 'Maybank Securities Indonesia', text: 'Translate product requirements into user flows, wireframes, high-fidelity interfaces, and interactive prototypes for financial products. Prepare design documentation for developer handoff.', tags: ['Fintech', 'Product design', 'Developer handoff'] },
  { period: '2022 — Present', role: 'Labtek Indie Talent', company: 'Labtek Indie', text: 'Co-facilitate digital product training through the Knods platform, support research teams, and contribute UX design to Indonesia’s Online Single Submission (OSS) website.', tags: ['UX design', 'Research support', 'Facilitation'] },
];
export const expertise = [
  { title: 'Product & UX Design', text: 'Make complex journeys easier to follow through research, information architecture, and clear user flows.', skills: 'Research · User flows · Wireframes', icon: 'compass' },
  { title: 'Interface & Design Systems', text: 'Shape consistent, accessible interfaces with reusable patterns and considered visual hierarchy.', skills: 'UI design · Figma · Design systems', icon: 'panels' },
  { title: 'Prototyping & Developer Handoff', text: 'Make ideas tangible, gather feedback, and document the details developers need to build.', skills: 'Prototypes · Maze · Documentation', icon: 'mouse' },
  { title: 'Web Development', text: 'Bring design into the browser with responsive layouts and a practical understanding of implementation.', skills: 'React · Next.js · WordPress', icon: 'code' },
];
export const approach = [
 ['Understand', 'Listen to people and understand the product context.'],
 ['Define', 'Frame the problem and clarify what matters.'],
 ['Design', 'Explore flows, then shape the interface.'],
 ['Validate', 'Use feedback to challenge assumptions.'],
 ['Build & Iterate', 'Collaborate on implementation and keep refining.'],
];
