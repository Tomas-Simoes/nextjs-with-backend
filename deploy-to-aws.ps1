Write-Output "`n"
Write-Output "Deploying application to AWS ECS using Docker Cloud Integration."

Write-Output "`n"
docker context use default
Write-Output "Building and pushing containers."
Write-Host "Note: make sure to have your Docker Hub running" -ForegroundColor Red
Write-Output "`n"
docker compose build
docker compose push


Write-Output "`n"
Write-Output "Image pushed to repository successfully."
Write-Output "Change to docker context to 'ecscontext'" 
docker context use ecscontext # if you want to use your own docker context change 'ecscontext' to use your context name

Write-Output "`n"
Write-Output "Deploying to AWS"
docker compose up 
docker compose logs