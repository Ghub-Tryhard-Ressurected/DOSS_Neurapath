import TopicPage from '../components/ToolPage';
import { topics } from '../data/topics';

export default function Landscape() {
  return <TopicPage topic={topics[1]} />;
}
