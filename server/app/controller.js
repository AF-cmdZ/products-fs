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
  update(name, payload) {
    // https://docs.mongodb.com/manual/reference/method/db.collection.updateOne/#definition
    return conn.updateOne({ name }, { $inc: { [`tech${payload}Votes`]: 1 } });
  },
  delete(name) {
    // https://docs.mongodb.com/manual/reference/method/db.collection.deleteOne/#definition
    return conn.deleteOne({ name });
  },
};
