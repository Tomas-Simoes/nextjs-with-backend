cd ..

echo "Starting Redis and API services locally."
echo "`n"
echo "Stopping previous containers that were running."
docker context use default
docker compose down

echo "`n"
echo "Building and pushing containers."
docker compose build
docker compose push


echo "`n"
echo "Image pushed to repository successfully."
echo "Running docker-compose.yml"
docker compose up -d #this is running in depatch mode, take out -d if you want to attach the application to your terminal
docker compose logs