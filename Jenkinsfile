pipeline {
  agent any
  tools {
    nodejs '18.7.0'
  }
  stages {
    stage("gitgit") {
      steps{
        url : "https://aa4870bb-6023-423c-8e90-b5cc27045edd@https://github.com/kmahieu/back-node.git"
      }
    }
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
          sh "git push origin Prod"
        }
    }
}
    // stage("git") {
    //   steps {

    //   }
    // }
  }