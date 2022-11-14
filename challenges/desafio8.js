db.produtos.deleteMany(
  { curtidas: { $le: 50 } },
);

db.produtos.find(
  {},
  {
    _id: 0,
    nome: 1,
  },
);