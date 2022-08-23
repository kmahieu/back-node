pipeline {
  agent any
  tools {
    nodejs '18.7.0'
  }
  stages {

    stage("npm install") {
      steps {
          sh "npm install"
      }
    }

    stage("mocha") {
      steps {
        sh "npm uninstall mocha && npm i mocha"
      }
    }

    stage('npm test') {
      steps {
          sh "npm test"
        }
    }
    stage('git') {
      steps {
          sh "git checkout Prod"
          sh "git merge main"
        }
    }
}
    // stage("git") {
    //   steps {

    //   }
    // }
  }