pipeline {
  agent any
  tools {
    nodejs '17.3.1'
  }
  stages {
    stage("npm i") {
      steps {
          sh "npm version"
      }
    }
  }
}