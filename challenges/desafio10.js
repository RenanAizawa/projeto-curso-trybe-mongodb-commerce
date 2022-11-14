db.produtos.find(
    { $and: [
        { "valoresNutricionais.0.quantidade": { $gte: 30 } },
        { "valoresNutricionais.0.quantidade": { $lte: 40 } }] },
    {
      _id: 0,
      nome: 1,
    },
  );