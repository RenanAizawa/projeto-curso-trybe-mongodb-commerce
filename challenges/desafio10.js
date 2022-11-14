db.produtos.find(
    { $and: [
        { "valoresNutricionais.3.porcentual": { $gte: 30 } },
        { "valoresNutricionais.3.porcentual": { $lte: 40 } }] },
    {
      _id: 0,
      nome: 1,
    },
  );