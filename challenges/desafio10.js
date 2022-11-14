db.produtos.find(
    { $or: [{ $gte: 30 }, { $lte: 40 }] },
    {
      _id: 0,
      nome: 1,
    },
  );