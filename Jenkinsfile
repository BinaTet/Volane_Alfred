pipeline{
    agent any 

    parameters{

        string(name: 'SPEC', defaultValue: "cypress/e2e/**", description:"Enter the script path to execute" )
        choice(name: 'BROSWER', choices: ['chrome', 'edge','firefox'], description: "Choose the browser to run test on")
    }

    options {
        ansiColor('xterm')
    }

    stages{
        stage ('Deploying'){
            echo "Building the application"
        }

        stage ('Testing'){
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --SPEC ${SPEC}"
            }
        }
        stage ('Deploying the build'){
            echo "Deploy the applicatioon"
        }
    }

    post{
        always{
           publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: '', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }

    }

}