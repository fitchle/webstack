import credentials from "@stackfitch/db-config/credentials.json"
import exec from 'shell-exec'

const DSN = `edgedb://${credentials.user}:${credentials.password}@localhost:${credentials.port}/${credentials.database}`;

const startWorker = async () => {
    await exec(`edgedb instance link --dsn=${DSN} --trust-tls-cert db_remote`).then((r) => console.log("[INIT/STACKFITCH-WORKER] " + r.stderr)).catch(console.log);
}

startWorker();