import { ReactNode } from "react";
import './cards.css';

type CardProps = {
  title: string;
  children: ReactNode;
};

export const Card = ({ title, children }: CardProps) => {
  return (
    <div className="card-container">
      <h2 className="card-title">{title}</h2>
      {children}
    </div>
  );
};
