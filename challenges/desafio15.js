db.produtos.updateMany(
  {},
  {
    $set: { avaliacao: NumberInt(0) },
  },
);

db.produtos.updateMany( // 2 query
{ tags: { $all: ["bovino"] } },
{ $inc: { avaliacao: 5 } },
);

db.produtos.updateMany( // 3 query
{ tags: { $all: ["ave"] } },
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