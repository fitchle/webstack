import * as edgedb from "edgedb";
import e from "./dbschema/edgeql-js";

import config from "./config/credentials.json"

const client = edgedb.createClient({
    database: config.database,
    port: config.port,
    password: config.password,
    user: config.user,
    tlsCA: config.tls_ca,
    tlsSecurity: "default",
});

export {
    e, client, edgedb
}