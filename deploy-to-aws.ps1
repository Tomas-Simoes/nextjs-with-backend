echo "`n"
echo "Deploying application to AWS ECS using Docker Cloud Integration."

echo "`n"
docker context use default
echo "Building and pushing containers."
Write-Host "Note: make sure to have your Docker Hub running" -ForegroundColor Red
echo "`n"
docker compose build
docker compose push


echo "`n"
echo "Image pushed to repository successfully."
echo "Change to docker context to 'ecscontext'" 
docker context use ecscontext # if you want to use your own docker context change 'ecscontext' to use your context name

echo "`n"
echo "Deploying to AWS"
docker compose up 
docker compose logs