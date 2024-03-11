import { AreaChart, Layers, AppWindow } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};
const links: NavLink[] = [
  {
    href: "/add-job",
    label: "Find a Noob",
    icon: <Layers />,
  },
  {
    href: "/jobs",
    label: "Vagas",
    icon: <AppWindow />,
  },
  {
    href: "/stats",
    label: "Estatística",
    icon: <AreaChart />,
  },
];


export default links;