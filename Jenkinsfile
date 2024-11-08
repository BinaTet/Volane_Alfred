pipeline {
    agent any 

    parameters {
        string(name: 'SPEC', defaultValue: "cypress/e2e/**", description: "Enter the script path to execute")
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: "Choose the browser to run test on")
    }

    stages {
        stage('Deploying') {
            steps {
                echo "Building the application"
            }
        }

        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${params.BROWSER} --spec ${params.SPEC}"
            }
        }

        stage('Deploying the build') {
            steps {
                echo "Deploying the application"
            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: false, 
                alwaysLinkToLastBuild: false, 
                keepAll: true, 
                reportDir: '', 
                reportFiles: 'index.html', 
                reportName: 'HTML Report', 
                reportTitles: '', 
                useWrapperFileDirectly: true
            ])
        }
    }
}
