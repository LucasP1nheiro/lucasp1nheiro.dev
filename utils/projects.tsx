import DoutoraAndressaMarkdown from '@/markdowns/doutora-andressa-markdown.mdx';

export interface Project {
  title: string;
  description: string;
  logoImage: string;
  banner: string;
  stack: string[];
  markdown?: React.ReactNode;
  key: string;
  projectUrl: string;
  type: 'freelancing' | 'side project';
}

export const projects: Project[] = [
  {
    title: 'Doutora Andressa',
    description:
      'This is a freelance project for Doutora Andressa, dermatologist, designed to showcase her expertise, treatments, and patient testimonials in a visually appealing and user-friendly landing page.',
    stack: ['Next.js', 'React.js', 'Tailwind'],
    key: 'doutora-andressa',
    markdown: <DoutoraAndressaMarkdown />,
    logoImage: '/projects/doutora-andressa-square.png',
    banner: '/projects/doutora-andressa-banner.svg',
    projectUrl: 'https://www.athanasiodermatologia.com.br/',
    type: 'freelancing',
  },
];
