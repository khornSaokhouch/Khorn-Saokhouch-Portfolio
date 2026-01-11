import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html'
})
export class SkillsComponent {
  categorizedSkills = [
    {
      category: "Languages",
      icon: "💻",
      list: [
        { name: "JavaScript", image: "assets/skills/javascript.svg" },
        { name: "HTML5", image: "assets/skills/html.svg" },
        { name: "PHP", image: "assets/skills/php.svg" },
        { name: "Python", image: "assets/skills/python.svg" },
        { name: "Typescript", image: "assets/skills/typescript.svg" },
        { name: "Tailwind CSS", image: "assets/skills/tailwind.svg" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      icon: "✨",
      list: [
        { name: "React.js", image: "assets/skills/reactjs.svg" },
        { name: "Next.js", image: "assets/skills/nextjs.svg" },
        { name: "Vue.js", image: "assets/skills/vue.js.svg" },
        { name: "Laravel", image: "assets/skills/laravel.svg" },
        { name: "Vite", image: "assets/skills/vite.svg" },
        { name: "node.js", image: "assets/skills/nodejs.svg" },
      ],
    },
    {
      category: "Databases",
      icon: "🎨",
      list: [
        { name: "MySQL", image: "assets/skills/mysql.svg" },
        { name: "MongooseDB", image: "assets/skills/mongodb.svg" },
        { name: "Supabase", image: "assets/skills/supabase.svg" },
        { name: "Firebase", image: "assets/skills/firebase.svg" },
      ],
    },
    {
      category: "Tools & Deployment",
      icon: "🛠️",
      list: [
        { name: "Git / GitHub", image: "assets/skills/github.svg" },
        { name: "Vercel", image: "assets/skills/vercel.svg" },
        { name: "Insomnia", image: "assets/skills/insomnia.svg" },
        { name: "Figma", image: "assets/skills/figma.svg" },
      ],
    },
  ];
}