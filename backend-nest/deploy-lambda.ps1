echo "Building application."
npm run build

echo "`n"
echo "Deploying to AWS Lambda using Serverless Framework"
serverless deploy
