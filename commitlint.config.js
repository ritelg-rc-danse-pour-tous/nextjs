module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 🌟 Nouvelles fonctionnalités
        "fix", // 🐛 Corrections de bugs
        "docs", // 📚 Modifications de la documentation
        "style", // 💅 Changements qui n'affectent pas le fonctionnement du code
        "refactor", // 🔨 Modification du code qui ne corrige aucun bug ni n'ajoute de fonctionnalité
        "perf", // 🚀 Améliorations de performance
        "test", // 🚨 Ajout ou correction de tests
        "build", // 🛠 Modifications affectant le système de build ou les dépendances externes
        "ci", // 📦 Modifications de la configuration ou des scripts CI
        "chore", // 🗃 Autres mises à jour ne modifiant ni le src, ni les tests
        "revert", // ⏪ Reverts de commits précédents
        "wip", // 🚧 Travaux en cours
        "api", // 🌐 API changes or updates
        "data", // 📊 Data changes or updates"
      ],
    ],
  },
};
