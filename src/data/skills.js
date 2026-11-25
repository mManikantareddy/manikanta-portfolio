import {
  Braces,
  Cloud,
  Code2,
  Database,
  Wrench,
} from 'lucide-react';

export const skillGroups = [
  {
    title: 'Frontend',
    icon: Code2,
    color: 'violet',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Vite', 'Bootstrap', 'WordPress', 'Elementor', 'WooCommerce'],
  },
  {
    title: 'Backend',
    icon: Database,
    color: 'blue',
    skills: ['PHP', 'MySQL', 'REST API fundamentals', 'CRUD operations', 'Authentication', 'Role-Based Access Control (RBAC)'],
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    color: 'cyan',
    skills: ['Linux (Ubuntu)', 'Git', 'GitHub', 'Docker', 'Jenkins', 'Ansible', 'Terraform', 'Microsoft Azure', 'CI/CD fundamentals', 'Azure Virtual Machines'],
  },
  {
    title: 'Development tools',
    icon: Wrench,
    color: 'orange',
    skills: ['VS Code', 'Git Bash', 'PowerShell', 'XAMPP', 'phpMyAdmin', 'Azure CLI', 'AWS CLI'],
  },
];
