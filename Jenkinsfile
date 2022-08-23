pipeline {
  agent any

  stages {
    stage("npm i") {
      steps {
        withMaven(maven: "maven3") {
          sh "mvn clean install"
        }
      }
    }
  }
}