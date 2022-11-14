db.produtos.find(
    {
     $or: [{ curtidas: 36 }, { curtidas: 85 }],
    },
    {
      _id: 0,
      nome: 1,
      curtidas: 1,
      vendidos: 1,
    },
  ).sort({ vendidos: 1 });