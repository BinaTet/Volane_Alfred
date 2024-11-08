pipeline {
    agent any

    environment {
        // Setting Node.js installation
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Pull latest code from GitHub repo
                git branch: 'main', url: 'https://github.com/BinaTet/Volane_Alfred.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install project dependencies (including Cypress)
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                // Run Cypress tests
                sh 'npx cypress run --reporter mochawesome --reporter-options reportDir=cypress/results,reportFilename=index,overwrite=true'
            }
        }

        stage('Publish HTML Report') {
            steps {
                // Publishing Cypress HTML report
                archiveArtifacts artifacts: 'cypress/results/*.html', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Build completed. Cleaning up...'
        }
    }
}
