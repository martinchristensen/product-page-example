migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0qe5l0xxicn4ju9")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""
  collection.deleteRule = null

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0qe5l0xxicn4ju9")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = ""

  return dao.saveCollection(collection)
})
