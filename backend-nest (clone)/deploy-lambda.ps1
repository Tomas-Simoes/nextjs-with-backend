Write-Output "Building application."
# package.json build-new script -> nx build
npm run build

Write-Output "` n"
Write-Output "Deploying to AWS Lambda using Serverless Framework"
serverless deploy --aws-profile default 

.\watch-logs.ps1
