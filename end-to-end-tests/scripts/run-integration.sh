sudo docker-compose up -d
echo ' - Waiting for the database to be ready'
./scripts/wait-for-it.sh "postgresql://postgres:admin@localhost:5430/postgres" -- echo ' -- Database is ready! '
yarn prisma migrate dev --name init
yarn run test
sudo docker-compose down