import TopicPage from '../components/ToolPage';
import { topics } from '../data/topics';

export default function Future() {
  return <TopicPage topic={topics[4]} />;
}
