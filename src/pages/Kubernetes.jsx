import ToolPage from '../components/ToolPage';
import { tools } from '../data/tools';

function Kubernetes() {
  return <ToolPage tool={tools[3]} />;
}

export default Kubernetes;
