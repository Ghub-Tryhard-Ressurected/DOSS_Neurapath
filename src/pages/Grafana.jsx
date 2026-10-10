import ToolPage from '../components/ToolPage';
import { tools } from '../data/tools';

function Grafana() {
  return <ToolPage tool={tools[5]} />;
}

export default Grafana;
