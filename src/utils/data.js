export const id = () => Math.random().toString(36).substring(2, 10);

export const data = {
  "boards": [
    {
      id: id(),
      name: "Template de tableau",
      columns: [
        {
          id: id(),
          name: "Maintenant",
          tasks: [
            {
              id: id(),
              title: "Lancer la version un",
              status: "Maintenant"
            },
            {
              id: id(),
              title: "Examiner les premiers retours et planifier les prochaines étapes de la feuille de route",
              status: "Maintenant"
            }
          ]
        },
        {
          id: id(),
          name: "Prochain",
          tasks: []
        },
        {
          id: id(),
          name: "Plus tard",
          tasks: []
        }
      ]
    }
  ]
}