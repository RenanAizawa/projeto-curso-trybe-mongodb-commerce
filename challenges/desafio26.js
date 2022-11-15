db.produtos.updateMany(
    {
      "valoresNutricionais.2.percentual": { $gte: 20, $lt: 40 },
    },
    {
      $addToSet: { tags: "contém sódio" },
    },
  );
  
  db.produtos.find(
    {},
    {
      _id: 0,
      nome: 1,
      tags: 1,
    },
  );