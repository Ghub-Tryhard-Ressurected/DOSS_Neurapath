# NeuralPath — Demo Command Cheatsheet
## Group CIE-01 · 8–10 minute presentation

---

## ⚡ Pre-Demo Setup (do this BEFORE the demo)

```bash
# 1. Start Minikube
minikube start

# 2. Point Docker CLI at Minikube's daemon (so images are available to K8s)
# Linux/Mac:
eval $(minikube docker-env)
# Windows PowerShell:
# & minikube -p minikube docker-env --shell powershell | Invoke-Expression

# 3. Build the app image inside Minikube
docker build -t neuralpath:latest .

# 4. Start monitoring stack (separate terminal)
cd monitoring && docker compose up -d && cd ..
```

---

## 🔵 1. GIT & GITHUB (~1.5 min)

```bash
git log --oneline               # show commit history
git branch -a                   # show branches
git show HEAD --name-only       # files in latest commit
git diff HEAD~1 HEAD --stat     # what changed
```

**Talking point:** Every feature developed on a branch, merged via PR.
The history shows real team collaboration — no one worked directly on main.

---

## 🟣 2. CI/CD — JENKINS (~1.5 min)

```bash
cat Jenkinsfile                 # walk through 6 stages live
```

Stages: Checkout → Install → Lint → Build → Docker Build → Smoke Test

If Jenkins is running → show Stage View at `http://localhost:8080`

**Talking point:** Every git push triggers this automatically.
Code is linted, built, and packaged into a Docker image without
any manual steps — that is Continuous Integration.

---

## 🔵 3. DOCKER (~1.5 min)

```bash
docker build -t neuralpath:latest .
docker images | grep neuralpath
docker run -d --name np-demo -p 8080:80 neuralpath:latest
docker ps
# Open http://localhost:8080 — show the live app
docker logs np-demo
docker stop np-demo && docker rm np-demo
```

**Talking point:** Multi-stage Dockerfile — Node builds the app,
nginx serves only the static files. Same image runs in dev, CI, and K8s.

---

## 🟦 4. KUBERNETES (~2 min)

```bash
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods -w                               # watch 2 pods start

minikube service neuralpath-service --url         # open in browser

# Scaling demo
kubectl scale deployment neuralpath --replicas=4
kubectl get pods                                  # 4 running

kubectl scale deployment neuralpath --replicas=2  # scale back

# Self-healing demo
kubectl delete pod $(kubectl get pods -l app=neuralpath -o jsonpath='{.items[0].metadata.name}')
kubectl get pods -w                               # respawns automatically

# CrashLoopBackOff troubleshooting demo
kubectl apply -f troubleshooting-pod.yaml
kubectl get pods                                  # shows CrashLoopBackOff
kubectl describe pod troubleshooting-demo         # Events show why
kubectl logs troubleshooting-demo                 # "Simulated failure"
kubectl delete pod troubleshooting-demo
```

**Talking point:** K8s maintains desired state — delete a pod,
it comes back. The troubleshooting pod shows CrashLoopBackOff
which you diagnose with describe and logs.

---

## 🟠 5. PROMETHEUS (~1 min)

Open: `http://localhost:9090/targets` — show both targets UP

PromQL queries to run live:
```promql
nginx_connections_active
rate(nginx_http_requests_total[5m])
rate(process_cpu_seconds_total[5m])
```

**Talking point:** Prometheus pulls metrics every 15 seconds.
PromQL lets us calculate rates and aggregations over time.

---

## 🟡 6. GRAFANA (~1 min)

Open: `http://localhost:3000` (admin / admin)
Dashboards → Import → upload `monitoring/grafana/devops-monitoring-dashboard.json`

Show panels: Active Connections, HTTP Request Rate.

**Talking point:** Each panel is a PromQL query visualised in real time.
Teams use this to set alerts and monitor SLAs across services.

---

## 🛠️ Troubleshooting Quick Reference

| Symptom | Command |
|---|---|
| CrashLoopBackOff | `kubectl describe pod <name>` then `kubectl logs <name>` |
| App not reachable | `kubectl get svc` + `minikube service neuralpath-service --url` |
| Prometheus target DOWN | `docker ps` — check exporter container is running |
| Wrong image version | `kubectl describe pod` — check Image field + imagePullPolicy |
| K8s pod stuck Pending | `kubectl describe pod` — check Events for resource/node issues |

---

## ✅ 3-Sentence Group Closing

> "We built NeuralPath, an AI education platform, and deployed it through
> a complete DevOps pipeline. The code is version-controlled with Git, built
> automatically by Jenkins, containerised with Docker, orchestrated by
> Kubernetes, and monitored with Prometheus and Grafana.
> Every tool has a clear role — together they form the modern standard
> for shipping software reliably."
