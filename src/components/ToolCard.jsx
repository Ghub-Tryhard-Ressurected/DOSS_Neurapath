
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

function ToolCard({ tool }) {
  const Icon = tool.icon;

  return (
    <Link to={tool.path} className="card tool-card">
      <div className="tool-card-top">
        <div className="tool-icon">
          <Icon size={25} />
        </div>

        <ArrowUpRight size={20} className="card-arrow" />
      </div>

      <h3>{tool.name}</h3>

      <p>{tool.description}</p>

      <span className="tool-category">{tool.category}</span>
    </Link>
  );
}

export default ToolCard;
