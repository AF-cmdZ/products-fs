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
  show(_id) {
    // https://docs.mongodb.com/manual/reference/method/db.collection.find/#definition
    return conn.findOne({ _id: ObjectId(_id) });
  },
  update({ _id, ...payload }) {
    return conn.updateOne({ _id: ObjectId(_id) }, { $set: payload });
  },
  async delete(_id) {
    await conn.deleteOne({ _id: ObjectId(_id) });
    return _id;
  },
};
