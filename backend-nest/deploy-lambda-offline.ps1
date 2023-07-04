echo "Building application."
npm run build

echo "`n"
echo "Running application offline using Serverless Framework"
serverless offline
