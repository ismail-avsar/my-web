import heroImg from "../assets/images/img1.png";
import project1Img from "../assets/images/Pro1.png";
import project2Img from "../assets/images/Pro2.png";
import project3Img from "../assets/images/Pro3.png";
import githubIcon from "../assets/icons/github.png";
import linkedinIcon from "../assets/icons/linkedin.png";

export const content = {
  tr: {
    header: {
      name: "İ",
      links: [
        { name: "Yetenekler", id: "skills" },
        { name: "Projeler", id: "projects" },
        { name: "Beni işe al", id: "hire-me" },
      ],
    },
    hero: {
      image: heroImg,
      subtitle: "İsmail Avşar",
      title: "Yaratıcı düşünür, Minimalizm aşığı",
      description:
        "Merhaba, ben İsmail. Ben bir full-stack geliştiriciyim. Harika kullanıcı deneyimlerine sahip, sağlam ve ölçeklenebilir frontend ürünleri hazırlayacak bir Geliştirici arıyorsanız, haydi el sıkışalım.",
      buttons: [
        { text: "Beni işe al", type: "primary" },
        { text: "Github", type: "secondary", icon: githubIcon, link: "https://github.com" },
        { text: "Linkedin", type: "secondary", icon: linkedinIcon, link: "https://linkedin.com" },
      ],
    },
    skills: {
      title: "Yetenekler",
      list: [
        { name: "Java Script", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "React.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Node.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      ],
    },
    profile: {
      title: "Profil",
      infoTitle: "Profil",
      details: [
        { label: "Doğum tarihi", value: "27.05.1987" },
        { label: "İkamet Şehri", value: "İstanbul" },
        { label: "Eğitim Durumu", value: "Anadolu Üniversitesi, Dış Ticaret - 2010" },
        { label: "Tercih Ettiği Rol", value: "Frontend, UI" },
      ],
      aboutMe: {
        title: "Hakkımda",
        content1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        content2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      },
    },
    projects: {
      title: "Projeler",
      list: [
        {
          title: "Workintech",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.",
          tags: ["react", "redux", "axios"],
          image: project1Img,
          github: "#",
          viewSite: "#",
        },
        {
          title: "Random Jokes",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.",
          tags: ["react", "redux", "axios"],
          image: project2Img,
          github: "#",
          viewSite: "#",
        },
        {
          title: "Journey",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.",
          tags: ["react", "redux", "axios"],
          image: project3Img,
          github: "#",
          viewSite: "#",
        },
      ],
    },
    footer: {
      title: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
      email: "i.avsar@outlook.com",
      links: ["Kişisel Blog", "Github", "Linkedin"],
    },
  },

  en: {
    header: {
      name: "İ",
      links: [
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Hire me", id: "hire-me" },
      ],
    },
    hero: {
      image: heroImg,
      subtitle: "İsmail Avşar",
      title: "Creative thinker, Minimalism lover",
      description:
        "Hi, I’m İsmail. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
      buttons: [
        { text: "Hire me", type: "primary" },
        { text: "Github", type: "secondary", icon: githubIcon, link: "https://github.com" },
        { text: "Linkedin", type: "secondary", icon: linkedinIcon, link: "https://linkedin.com" },
      ],
    },
    skills: {
      title: "Skills",
      list: [
        { name: "Java Script", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "React.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { name: "Node.Js", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
      ],
    },
    profile: {
      title: "Profile",
      infoTitle: "Profile",
      details: [
        { label: "Birthday", value: "27.05.1987" },
        { label: "City", value: "İstanbul" },
        { label: "Education", value: "Anadolu University, Foreign Trade - 2010" },
        { label: "Preferred Role", value: "Frontend, UI" },
      ],
      aboutMe: {
        title: "About Me",
        content1: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
        content2: "Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
      },
    },
    projects: {
      title: "Projects",
      list: [
        {
          title: "Workintech",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.",
          tags: ["react", "redux", "axios"],
          image: project1Img,
          github: "#",
          viewSite: "#",
        },
        {
          title: "Random Jokes",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.",
          tags: ["react", "redux", "axios"],
          image: project2Img,
          github: "#",
          viewSite: "#",
        },
        {
          title: "Journey",
          description: "A simple, customizable, minimal setup cookie plugin that allows your users to select which cookies to accept or decline.",
          tags: ["react", "redux", "axios"],
          image: project3Img,
          github: "#",
          viewSite: "#",
        },
      ],
    },
    footer: {
      title: "Let’s work together on your next product.",
      email: "i.avsar@outlook.com",
      links: ["Personal Blog", "Github", "Linkedin"],
    },
  },
};