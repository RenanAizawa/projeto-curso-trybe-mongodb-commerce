db.produtos.find(
    { $and: [
        { "valoresNutricionais.3.quantidade": { $gte: 30 } },
        { "valoresNutricionais.3.quantidade": { $lte: 40 } }] },
    {
      _id: 0,
      nome: 1,
    },
  );