FROM python:3.11

# Set the working directory in the Docker container
WORKDIR /app


# Copy the dependencies file to the working directory
COPY requirements.txt .

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt
#Upgrade flask server
RUN pip install gunicorn
CMD exec gunicorn --bind :$PORT pennapp:app

# Copy the content of the local src directory to the working directory
COPY . .

# Specify the command to run on container start
CMD [ "python", "pennapp" ]

#penn image name