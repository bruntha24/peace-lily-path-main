import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export default function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  const content = (
    <div className="group bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md hover:border-sage/30 transition-calm h-full">
      <div className="w-12 h-12 rounded-lg bg-sage/10 flex items-center justify-center mb-4 group-hover:bg-sage/20 transition-calm">
        <Icon className="w-6 h-6 text-sage" />
      </div>
      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
}
