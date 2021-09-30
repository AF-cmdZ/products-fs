import { ObjectId } from "mongodb";
import config from "./config.js";
import client from "./db/conns/client.js";

const conn = client.db(config.dbName).collection(config.dbCollection);

export default {
  create(payload) {
    // https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/#definition
    return conn.insertOne(payload);
  },
  index() {
    // https://docs.mongodb.com/manual/reference/method/db.collection.find/#definition
    return conn.find().toArray();
  },
  update(id, payload) {
    return conn.updateOne({ _id: ObjectId(id) }, { $set: payload });
  },
  async delete(id) {
    await conn.deleteOne({ _id: ObjectId(id) });
    return id;
  },
};
