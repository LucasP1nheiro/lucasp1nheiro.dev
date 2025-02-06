import FormWizardMarkdown from '@/markdowns/form-wizard-markdown.mdx';
import CosmicusMarkdown from '@/markdowns/cosmicus-markdown.mdx';
import DoutoraAndressaMarkdown from '@/markdowns/doutora-andressa-markdown.mdx';

export interface Project {
  title: string;
  description: string;
  cardImage: string;
  banner: string;
  stack: string[];
  markdown?: React.ReactNode;
  key: string;
  projectUrl: string;
}

export const projects: Project[] = [
  {
    title: 'Form Wizard',
    description:
      'Form Wizard is a form builder designed to streamline the process of creating forms with ease. With a wide array of features including drag and drop functionality, analytics visualization, real-time preview, and secure user authentication, Form Wizard empowers you to create professional forms effortlessly.',
    stack: ['Next.js', 'React.js', 'Supabase'],
    key: 'form-wizard',
    markdown: <FormWizardMarkdown />,
    cardImage: '/projects/form-wizard-square.png',
    banner: '/projects/form-wizard-banner.svg',
    projectUrl: 'https://form-wizard-nine.vercel.app/',
  },
  {
    title: 'Cosmicus',
    description:
      'Cosmicus is a gamified application designed to teach computational thinking in a fun and engaging way. With a space-themed adventure, players learn core problem-solving skills through interactive challenges and missions.',
    stack: ['Next.js', 'React.js', 'Supabase'],
    key: 'cosmicus',
    markdown: <CosmicusMarkdown />,
    cardImage: '/projects/cosmicus-square.png',
    banner: '/projects/cosmicus-banner.svg',
    projectUrl: 'https://cosmicus.vercel.app/',
  },
  {
    title: 'Doutora Andressa',
    description:
      'This is a freelance project for Doutora Andressa, a skin doctor, designed to showcase her expertise, treatments, and patient testimonials in a visually appealing and user-friendly landing page.',
    stack: ['Next.js', 'React.js', 'Tailwind'],
    key: 'doutora-andressa',
    markdown: <DoutoraAndressaMarkdown />,
    cardImage: '/projects/doutora-andressa-square.png',
    banner: '/projects/doutora-andressa-banner.svg',
    projectUrl: 'https://www.athanasiodermatologia.com.br/',
  },
];
