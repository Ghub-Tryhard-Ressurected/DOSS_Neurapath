
import {
  GitBranch,
  Workflow,
  Container,
  Boxes,
  Activity,
  ChartNoAxesCombined,
} from 'lucide-react';

export const tools = [
  {
    name: 'Git & GitHub',
    path: '/git-github',
    description:
      'Track code changes, manage branches, and collaborate with your team.',
    category: 'Version Control',
    icon: GitBranch,
    overview: 'Git records changes to files over time. GitHub hosts Git repositories online and adds tools for code review and team collaboration.',
    workflow: ['Create or clone a repository', 'Create a branch for a change', 'Commit the change with a clear message', 'Push the branch and open a pull request', 'Review, merge, and pull the latest changes'],
    example: 'git switch -c add-login\ngit add .\ngit commit -m "Add login page"\ngit push -u origin add-login',
  },
  {
    name: 'CI/CD',
    path: '/ci-cd',
    description:
      'Automate building, testing, and delivering application updates.',
    category: 'Automation',
    icon: Workflow,
    overview: 'CI/CD uses automated workflows to build and check code changes, then deliver approved changes to an environment. A pipeline can run on each push or pull request.',
    workflow: ['A developer pushes a change', 'The pipeline installs dependencies and builds the app', 'Automated checks report failures early', 'Approved changes are packaged and deployed', 'The team monitors the release'],
    example: 'A GitHub Actions workflow can run npm ci, npm run lint, and npm run build whenever a pull request is opened.',
  },
  {
    name: 'Docker',
    path: '/docker',
    description:
      'Package applications and dependencies into portable containers.',
    category: 'Containerization',
    icon: Container,
    overview: 'Docker packages an application and its runtime dependencies into an image. Running that image creates a container with a consistent environment across development and deployment.',
    workflow: ['Describe the image build in a Dockerfile', 'Build an image from the project', 'Run and inspect the container locally', 'Publish the image to a registry', 'Deploy the same image to another environment'],
    example: 'docker build -t learning-hub .\ndocker run --rm -p 5173:5173 learning-hub',
  },
  {
    name: 'Kubernetes',
    path: '/kubernetes',
    description:
      'Deploy, scale, and manage containerized applications.',
    category: 'Orchestration',
    icon: Boxes,
    overview: 'Kubernetes runs containerized workloads across a cluster. You describe the desired state, and Kubernetes works to keep the running application aligned with it.',
    workflow: ['Describe an application workload', 'Apply the configuration to a cluster', 'Kubernetes schedules containers onto nodes', 'Health checks and controllers replace failed instances', 'Scale replicas as demand changes'],
    example: 'A Deployment can request three replicas of an application. Kubernetes continually works to keep three healthy pods available.',
  },
  {
    name: 'Prometheus',
    path: '/prometheus',
    description:
      'Collect and query metrics to understand application health.',
    category: 'Monitoring',
    icon: Activity,
    overview: 'Prometheus collects time-series measurements from applications and infrastructure. It stores samples with timestamps and labels, then lets teams query them with PromQL.',
    workflow: ['Expose metrics from an application or exporter', 'Configure Prometheus to scrape the endpoint', 'Explore time-series data with PromQL', 'Define alert rules for important conditions', 'Use the measurements to investigate service health'],
    example: 'PromQL: rate(http_requests_total[5m]) estimates the per-second request rate over the last five minutes.',
  },
  {
    name: 'Grafana',
    path: '/grafana',
    description:
      'Visualize metrics through dashboards, panels, and alerts.',
    category: 'Visualization',
    icon: ChartNoAxesCombined,
    overview: 'Grafana turns data from sources such as Prometheus into dashboards, panels, and alerts. It helps teams spot trends and investigate changes in system behavior.',
    workflow: ['Connect a data source such as Prometheus', 'Build panels with queries and visualizations', 'Arrange panels into a dashboard', 'Share dashboards with the team', 'Set alert rules for conditions that need attention'],
    example: 'A service dashboard might show request rate, error rate, and response latency side by side.',
  },
];
