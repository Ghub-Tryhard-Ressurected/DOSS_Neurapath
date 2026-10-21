import TopicPage from '../components/ToolPage';
import { topics } from '../data/topics';

export default function Breakthroughs() {
  return <TopicPage topic={topics[2]} />;
}
