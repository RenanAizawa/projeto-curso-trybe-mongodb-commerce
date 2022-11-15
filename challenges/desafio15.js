db.produtos.updateMany(
  {},
  {
    $set: { avaliacao: NumberInt(0) },
  },
);

db.produtos.updateMany( // 2 query
{ tags: "bovino" },
{ $inc: { avaliacao: 5 } },
);

db.produtos.updateMany( // 3 query
{ tags: "ave" },
{ $inc: { avaliacao: 3 } },
);

db.produtos.find( // 4 query
  {},
  {
    _id: 0,
    nome: 1,
    avaliacao: 1,
  },
);