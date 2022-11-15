db.produtos.updateMany( // 1 query
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);

db.produtos.updateOne( // 2 query
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);

db.produtos.updateMany( // 3 query
  { tags: "bovino" },
  { $inc: { "vendasPorDia.6": 120 } },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
    vendasPorDia: 1,
  },
);