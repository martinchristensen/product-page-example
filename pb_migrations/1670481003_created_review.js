migrate((db) => {
  const collection = new Collection({
    "id": "0qe5l0xxicn4ju9",
    "created": "2022-12-08 06:30:03.011Z",
    "updated": "2022-12-08 06:30:03.011Z",
    "name": "review",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jbofue4b",
        "name": "author",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "yhmqtzuh",
        "name": "description",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "lejjzc2i",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fzolckte",
        "name": "stars",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 5
        }
      },
      {
        "system": false,
        "id": "1musaj12",
        "name": "helpful",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("0qe5l0xxicn4ju9");

  return dao.deleteCollection(collection);
})
