pipeline {
  agent any
  tools {
    nodejs '18.7.0'
  }
  stages {
    stage("npm i") {
      steps {
          sh "npm install"
      }
    }
  }
}