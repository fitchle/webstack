module default {
  type FitchleNode {
    required property name -> str {
      constraint exclusive;
    }
  }
}