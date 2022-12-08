migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0qe5l0xxicn4ju9")

  collection.name = "reviews"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0qe5l0xxicn4ju9")

  collection.name = "review"

  return dao.saveCollection(collection)
})
