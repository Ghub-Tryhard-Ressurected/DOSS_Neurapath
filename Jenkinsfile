pipeline {
    agent any

    tools {
        nodejs 'NodeJS-20'
    }

    environment {
        IMAGE_NAME = 'neuralpath'
        IMAGE_TAG  = "1.0.${env.BUILD_NUMBER}"
    }

    stages {

        stage('Checkout') {
            steps {
                echo '📥 Checking out source code...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing npm dependencies...'
                bat 'npm install'
            }
        }

        stage('Lint') {
            steps {
                echo '🔍 Running ESLint...'
                bat 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                echo '🏗️  Building production bundle...'
                bat 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                echo '🐳 Building Docker image...'
                bat "docker build -t %IMAGE_NAME%:%IMAGE_TAG% ."
                bat "docker tag %IMAGE_NAME%:%IMAGE_TAG% %IMAGE_NAME%:latest"
            }
        }

        stage('Docker Run (Smoke Test)') {
            steps {
                echo '🚀 Starting container for smoke test...'
                bat "docker run -d --name neuralpath-test -p 8181:80 %IMAGE_NAME%:latest"
                bat "timeout /t 3"
                bat "docker stop neuralpath-test && docker rm neuralpath-test"
                echo '✅ Smoke test passed — container started and stopped cleanly.'
            }
        }

    }

    post {
        success {
            echo '✅ SUCCESS: NeuralPath pipeline completed — image ready for Kubernetes deployment.'
        }
        failure {
            echo '❌ FAILED: Check the stage that failed above for details.'
        }
        always {
            echo "📊 Build #${env.BUILD_NUMBER} finished with status: ${currentBuild.currentResult}"
        }
    }
}
