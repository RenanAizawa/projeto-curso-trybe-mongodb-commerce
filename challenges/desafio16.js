db.produtos.updateOne(
  { name: "Big Mac" },
  { $currentDate: { ultimaModificacao: { $type: "timestamp" } } },
);

db.produtos.find(
  { ultimaModificacao: { $exist: true } },
  { _id: 0, nome: 1 },
);