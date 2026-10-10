# 🚀 DevOps Learning Hub

A beginner-friendly web platform designed to help students learn and understand essential DevOps tools through structured learning resources and practical demonstrations.

## 📌 About the Project

**DevOps Learning Hub** is an educational web application that introduces users to the tools and practices used in modern software development and deployment.

The project covers important DevOps technologies, including Git and GitHub, Jenkins, Docker, Kubernetes, Prometheus, and Grafana. It provides a centralized platform where students can explore these tools, understand their roles, and learn how they work together in a real-world DevOps workflow.

The frontend is built using React and Vite, providing a fast and interactive user interface.

## 🎯 Purpose

The main objectives of this project are to:

- Provide a centralized platform for learning essential DevOps tools.
- Explain the purpose and functionality of each technology.
- Demonstrate the software development and deployment lifecycle.
- Understand how automation, containerization, orchestration, and monitoring work together.
- Help students gain practical knowledge of real-world DevOps workflows.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| React | Building the user interface |
| Vite | Development server and build tool |
| JavaScript | Application logic |
| HTML & CSS | Structure and styling |
| Git & GitHub | Version control and collaboration |
| Jenkins | Continuous Integration and Continuous Delivery (CI/CD) |
| Docker | Application containerization |
| Kubernetes | Container orchestration and deployment |
| Prometheus | Metrics collection and monitoring |
| Grafana | Metrics visualization and dashboards |

*Note: The React frontend is the main application. Integration with DevOps tools is implemented and demonstrated as part of the project workflow.*

## ✨ Key Features

- **Centralized Learning:** Explore essential DevOps technologies in one place.
- **Tool-Based Sections:** Learn about Git, Jenkins, Docker, Kubernetes, Prometheus, and Grafana.
- **Modern Interface:** A responsive and user-friendly web interface.
- **CI/CD Learning:** Understand how application builds and deployment can be automated.
- **Containerization:** Learn how Docker packages applications and their dependencies.
- **Orchestration:** Explore how Kubernetes manages containerized applications.
- **Monitoring and Visualization:** Understand how Prometheus and Grafana help monitor application performance.

## ⚙️ Prerequisites

Before running the project, make sure you have installed:

- [Node.js](https://nodejs.org/) — preferably an LTS version.
- npm — included with Node.js.
- [Git](https://git-scm.com/) — required to clone the repository.

Docker, Jenkins, Kubernetes, Prometheus, and Grafana are not required just to run the React frontend. They are needed when setting up or demonstrating the corresponding DevOps integrations.

## 🚀 Getting Started

Follow these steps to run the project on your local machine.

### 1. Clone the repository

Open a terminal or command prompt and run:

```bash
git clone https://github.com/omraj2006/devops-learning-hub.git
```

### 2. Navigate to the project directory

```bash
cd devops-learning-hub
```

### 3. Install dependencies

```bash
npm install
```

If the repository contains a `package-lock.json` file, you can alternatively use `npm ci` for a clean, lockfile-based installation.

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Vite will display a local URL in the terminal, usually:

```text
http://localhost:5173/
```

Open this URL in your browser to explore the DevOps Learning Hub.

### 6. Build for production

To create an optimized production build, run:

```bash
npm run build
```

The generated files will be available in the `dist/` directory.

To preview the production build locally, run:

```bash
npm run preview
```

## 🔄 DevOps Workflow

The project aims to demonstrate how different DevOps tools work together in a typical software delivery pipeline:

1. **Git & GitHub:** Manage source code and collaborate on changes.
2. **Jenkins:** Automate the build and testing process.
3. **Docker:** Package the application into a container image.
4. **Kubernetes:** Deploy and manage the containerized application.
5. **Prometheus:** Collect relevant monitoring metrics.
6. **Grafana:** Visualize metrics through dashboards.

This workflow illustrates how automation, deployment, and monitoring contribute to a more reliable software delivery process.

## 👥 Team Project

This project is developed collaboratively as part of a college DevOps learning initiative. Team members work on different tools and integrate their contributions into a common workflow.

## 📚 Learning Outcomes

Through this project, students gain an understanding of:

- Version control and collaborative development.
- CI/CD pipelines and build automation.
- Docker images, containers, and registries.
- Kubernetes deployments, services, and scaling.
- Metrics collection, monitoring, and dashboard creation.
- Integration and troubleshooting across a DevOps pipeline.

## 🤝 Contributing

Contributions and improvements are welcome.

1. Fork the repository or create a new branch.
2. Make your changes.
3. Test your changes locally.
4. Commit and push your updates.
5. Open a pull request for review.

## 📄 License

This project is intended for educational purposes. Add a license to the repository if you wish to define permissions for reuse and distribution.
