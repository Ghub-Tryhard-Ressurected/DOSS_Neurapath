import {
  GitBranch, Workflow, Container,
  Boxes, Activity, ChartNoAxesCombined,
} from 'lucide-react';

export const tools = [
  {
    key: 'git',
    name: 'Git & GitHub',
    path: '/git-github',
    description:
      'Track every change in your codebase, work across branches, and collaborate with pull requests.',
    category: 'Version Control',
    icon: GitBranch,
    overview:
      'Git is a distributed version control system that records every change to your project as a snapshot. GitHub layers collaboration features on top — issues, pull requests, and code review — so teams can work on the same codebase without stepping on each other.',
    workflow: [
      { title: 'Initialise or clone a repository',
        detail: 'Run git init to start fresh, or git clone to get a copy of an existing remote repo.' },
      { title: 'Create a feature branch',
        detail: 'Isolate your changes with git switch -c feature/my-feature so main stays clean.' },
      { title: 'Stage and commit changes',
        detail: 'Use git add . and git commit -m "clear message" to snapshot your work with intent.' },
      { title: 'Push and open a pull request',
        detail: 'Push the branch to GitHub and open a PR so teammates can review before merging.' },
      { title: 'Merge and sync',
        detail: 'After approval, merge the PR and pull the latest main to stay up to date.' },
    ],
    example: `# Start a new feature
git switch -c feature/user-auth

# Stage all changes
git add .

# Commit with a clear message
git commit -m "feat: add JWT authentication"

# Push to remote
git push -u origin feature/user-auth

# On GitHub — open a pull request for review`,
    facts: [
      { title: 'Distributed by design',
        detail: 'Every developer has a full copy of the repo history — no single point of failure.' },
      { title: 'Branching is cheap',
        detail: 'Creating a branch takes milliseconds and uses almost no disk space.' },
      { title: '90 %+ adoption',
        detail: 'Git is the dominant VCS in industry — virtually every DevOps pipeline starts here.' },
      { title: 'Immutable history',
        detail: 'Each commit is identified by a SHA-1 hash, making the history tamper-evident.' },
    ],
  },

  {
    key: 'cicd',
    name: 'CI/CD',
    path: '/ci-cd',
    description:
      'Automate building, testing, and releasing software with Jenkins pipelines so humans focus on code.',
    category: 'Automation',
    icon: Workflow,
    overview:
      'Continuous Integration merges code changes frequently and validates them automatically. Continuous Delivery extends that by automating the path all the way to a deployable artifact. Jenkins orchestrates these pipelines with a declarative Jenkinsfile checked into the repository.',
    workflow: [
      { title: 'Developer pushes code',
        detail: 'A commit or pull request to GitHub triggers the Jenkins pipeline via a webhook.' },
      { title: 'Install & build',
        detail: 'Jenkins runs npm ci and npm run build inside a clean workspace.' },
      { title: 'Automated tests',
        detail: 'Lint checks and unit tests run; any failure breaks the build and notifies the team.' },
      { title: 'Build Docker image',
        detail: 'On success, docker build packages the app and pushes the image to a registry.' },
      { title: 'Deploy & notify',
        detail: 'Jenkins applies updated K8s manifests or rolls out a new container version.' },
    ],
    example: `pipeline {
  agent any

  stages {
    stage('Install') {
      steps { sh 'npm ci' }
    }

    stage('Lint') {
      steps { sh 'npm run lint' }
    }

    stage('Build') {
      steps { sh 'npm run build' }
    }

    stage('Docker Build & Push') {
      steps {
        sh 'docker build -t devflow-academy:latest .'
        sh 'docker push registry/devflow-academy:latest'
      }
    }
  }

  post {
    failure { echo 'Pipeline failed — check the logs!' }
    success { echo 'Deployed successfully.' }
  }
}`,
    facts: [
      { title: 'Fail fast',
        detail: 'CI catches bugs within minutes of a commit, when the fix is cheapest.' },
      { title: 'Jenkins is free & open source',
        detail: 'With 1 800+ plugins it integrates with virtually every tool in the DevOps ecosystem.' },
      { title: 'Parallel stages',
        detail: 'Jenkins can run multiple stages simultaneously, dramatically cutting pipeline time.' },
      { title: 'Pipeline as code',
        detail: 'A Jenkinsfile lives in the repo — it is versioned, reviewed, and auditable like any code.' },
    ],
  },

  {
    key: 'docker',
    name: 'Docker',
    path: '/docker',
    description:
      'Package your application and every dependency into a portable, reproducible container image.',
    category: 'Containerization',
    icon: Container,
    overview:
      'Docker packages an application with its runtime, libraries, and configuration into a self-contained image. Running that image produces a container with a consistent environment on any machine — eliminating "works on my machine" forever.',
    workflow: [
      { title: 'Write a Dockerfile',
        detail: 'Describe the base image, copy source code, install dependencies, and set the start command.' },
      { title: 'Build an image',
        detail: 'docker build -t app-name:tag . creates a layered image from the Dockerfile.' },
      { title: 'Run locally',
        detail: 'docker run -p 8080:80 app-name:tag spins up the container and maps a port to the host.' },
      { title: 'Push to a registry',
        detail: 'docker push sends the image to Docker Hub or a private registry for use elsewhere.' },
      { title: 'Deploy the same image',
        detail: 'Kubernetes or any container runtime pulls the exact same image — no drift.' },
    ],
    example: `# ── Dockerfile ────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# ── Build & run ────────────────────────────────
# docker build -t devflow-academy:1.0 .
# docker run -d -p 8080:80 devflow-academy:1.0`,
    facts: [
      { title: 'Images are layered',
        detail: 'Each instruction in a Dockerfile creates a read-only layer — unchanged layers are cached.' },
      { title: 'Multi-stage builds',
        detail: 'Build in one stage, copy only the artifact to a tiny runtime image to minimise size.' },
      { title: 'Containers share the kernel',
        detail: 'Unlike VMs, containers share the host OS kernel — startup is measured in milliseconds.' },
      { title: 'Used everywhere',
        detail: 'Docker is the de-facto container format. Every cloud provider supports it natively.' },
    ],
  },

  {
    key: 'kubernetes',
    name: 'Kubernetes',
    path: '/kubernetes',
    description:
      'Orchestrate containers at scale — self-healing deployments, load balancing, and zero-downtime rollouts.',
    category: 'Orchestration',
    icon: Boxes,
    overview:
      'Kubernetes (K8s) runs containerised workloads across a cluster of nodes. You declare the desired state — number of replicas, resource limits, health checks — and the control plane continuously works to match reality to that specification.',
    workflow: [
      { title: 'Write a Deployment manifest',
        detail: 'A YAML file describes the container image, replica count, resource requests, and probes.' },
      { title: 'Apply to the cluster',
        detail: 'kubectl apply -f deployment.yaml submits the desired state to the API server.' },
      { title: 'Kubernetes schedules pods',
        detail: 'The scheduler picks healthy nodes and starts containers according to the spec.' },
      { title: 'Health checks & self-healing',
        detail: 'Liveness and readiness probes restart unhealthy pods automatically.' },
      { title: 'Scale with one command',
        detail: 'kubectl scale deployment app --replicas=5 adds pods with no downtime.' },
    ],
    example: `# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: devflow-academy
spec:
  replicas: 3
  selector:
    matchLabels:
      app: devflow-academy
  template:
    metadata:
      labels:
        app: devflow-academy
    spec:
      containers:
        - name: app
          image: registry/devflow-academy:latest
          ports:
            - containerPort: 80
          readinessProbe:
            httpGet:
              path: /
              port: 80

# Apply & verify
# kubectl apply -f deployment.yaml
# kubectl get pods
# kubectl rollout status deployment/devflow-academy`,
    facts: [
      { title: 'Declarative model',
        detail: 'You describe "what" not "how" — Kubernetes figures out the steps to get there.' },
      { title: 'Rolling updates',
        detail: 'New versions are rolled out pod-by-pod so users see zero downtime.' },
      { title: 'Horizontal Pod Autoscaler',
        detail: 'K8s can automatically add or remove pods based on CPU or custom metrics.' },
      { title: 'Open source & vendor-neutral',
        detail: 'Originally from Google, now governed by the CNCF and supported by every major cloud.' },
    ],
  },

  {
    key: 'prometheus',
    name: 'Prometheus',
    path: '/prometheus',
    description:
      'Collect time-series metrics from every part of your stack and write powerful PromQL queries.',
    category: 'Monitoring',
    icon: Activity,
    overview:
      'Prometheus scrapes metrics endpoints on a schedule, stores them as time-series data, and makes them queryable with its purpose-built PromQL language. Alert rules fire when conditions are met, triggering notifications before users notice a problem.',
    workflow: [
      { title: 'Expose a metrics endpoint',
        detail: 'Applications expose /metrics in the Prometheus text format, or use an exporter.' },
      { title: 'Configure scrape targets',
        detail: 'prometheus.yml lists the hosts and intervals Prometheus should poll.' },
      { title: 'Explore data with PromQL',
        detail: 'Query the built-in expression browser to understand metric behaviour over time.' },
      { title: 'Define alert rules',
        detail: 'Rules evaluate PromQL expressions and fire when thresholds are crossed.' },
      { title: 'Connect to Grafana',
        detail: 'Add Prometheus as a data source in Grafana for rich dashboard visualisation.' },
    ],
    example: `# prometheus.yml
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: "nginx"
    static_configs:
      - targets: ["host.docker.internal:9113"]

  - job_name: "prometheus"
    static_configs:
      - targets: ["localhost:9090"]

# Useful PromQL expressions
# Request rate (last 5 min):
# rate(nginx_http_requests_total[5m])

# Active connections:
# nginx_connections_active

# CPU usage:
# rate(process_cpu_seconds_total[5m])`,
    facts: [
      { title: 'Pull model',
        detail: 'Prometheus scrapes targets — this simplifies firewall rules and centralises config.' },
      { title: 'Time-series storage',
        detail: 'Data is stored as (timestamp, value) pairs with attached key-value labels.' },
      { title: 'Highly dimensional',
        detail: 'Labels let you slice metrics by instance, region, endpoint, or any custom tag.' },
      { title: 'Alertmanager integration',
        detail: 'Prometheus ships alerts to Alertmanager which handles routing, grouping, and silencing.' },
    ],
  },

  {
    key: 'grafana',
    name: 'Grafana',
    path: '/grafana',
    description:
      'Turn raw Prometheus metrics into beautiful dashboards, panels, and actionable alerts.',
    category: 'Visualization',
    icon: ChartNoAxesCombined,
    overview:
      'Grafana connects to data sources like Prometheus and renders their data as interactive dashboards. Teams use it to spot trends, investigate incidents, and share a live view of system health with stakeholders — all in a browser.',
    workflow: [
      { title: 'Add a data source',
        detail: 'In Settings → Data Sources, point Grafana at your Prometheus URL.' },
      { title: 'Create a dashboard',
        detail: 'Click New Dashboard and add panels driven by PromQL queries.' },
      { title: 'Choose a visualisation',
        detail: 'Time series, bar charts, gauges, and stat panels each suit different metric types.' },
      { title: 'Import ready-made dashboards',
        detail: 'Upload a JSON file or use grafana.com/dashboards for community dashboards.' },
      { title: 'Set alert rules',
        detail: 'Grafana can evaluate queries and trigger alerts via email, Slack, or a webhook.' },
    ],
    example: `# Active connections panel query
nginx_connections_active

# HTTP request rate (per second, 5-min window)
rate(nginx_http_requests_total[5m])

# CPU usage of the Prometheus process
rate(process_cpu_seconds_total[5m])

# Dashboard JSON is stored in:
# monitoring/grafana/devops-monitoring-dashboard.json
# monitoring/grafana/cpu-usage-dashboard.json`,
    facts: [
      { title: 'Multi-source',
        detail: 'Grafana supports 50+ data sources — Prometheus, Loki, InfluxDB, MySQL, and more.' },
      { title: 'Dashboard as code',
        detail: 'Dashboards are stored as JSON and can be version-controlled alongside the app.' },
      { title: 'Alerting built-in',
        detail: 'Grafana 8+ ships a unified alerting engine that can replace Alertmanager.' },
      { title: 'Used at scale',
        detail: 'Netflix, Uber, and PayPal rely on Grafana to monitor petabyte-scale systems.' },
    ],
  },
];
