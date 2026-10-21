import TopicPage from '../components/ToolPage';
import { topics } from '../data/topics';

export default function Fundamentals() {
  return <TopicPage topic={topics[0]} />;
}
