import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function TopicCard({ topic }) {
  const Icon = topic.icon;

  return (
    <Link
      to={topic.path}
      className="topic-card"
      data-topic={topic.key}
      aria-label={`Explore ${topic.name}`}
    >
      <div className="topic-card-header">
        <div className="topic-icon">
          <Icon size={24} />
        </div>
        <div className="topic-card-arrow">
          <ArrowUpRight size={16} />
        </div>
      </div>

      <h3>{topic.name}</h3>
      <p>{topic.description}</p>
      <span className="topic-tag">{topic.category}</span>
    </Link>
  );
}
