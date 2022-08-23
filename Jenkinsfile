pipeline {
  agent any

  stages {
    stage("npm") {
      steps {
        withMaven(maven: "maven3") {
          sh "npm install"
        }
      }
    }
  }
}