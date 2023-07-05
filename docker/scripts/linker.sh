S=0
echo "Waiting for initialization..."
while [ $S -ne 200 ]; do
    S=$(curl -s -o /dev/null -w "%{http_code}" http://host.docker.internal:5656/server/status/ready)
    sleep 3
done

edgedb instance link --dsn=edgedb://edgedb:Fitchle_DB!123!@host.docker.internal:5656/edgedb --trust-tls-cert db_remote
