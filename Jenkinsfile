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
}
    // stage("git") {
    //   steps {

    //   }
    // }
  }