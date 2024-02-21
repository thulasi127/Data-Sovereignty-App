# Data Sovereignty App

The legal idea of data sovereignty states that data must abide by the rules and laws of the nation where it is being gathered or maintained. It suggests that information should be safeguarded from unlawful access and use and should be governed by the laws of the nation that has sovereignty over it.

For companies that conduct international commerce, data sovereignty may have a big impact. For instance, a business that gathers data from clients across borders may have to abide by a number of data protection laws, which might differ greatly in terms of breadth and complexity.

For reasons of privacy and national security, data sovereignty is also crucial. To prevent sensitive data from being accessed by unauthorised parties, governments may try to control the data gathering and storage practises used by international corporations. Governments may occasionally try to keep control of sensitive data by limiting the flow of data outside of their borders.

Ultimately, the idea of "data sovereignty" is significant because it highlights the necessity for nations to be in charge of their own data and to make sure it is secured in line with national laws and regulations.


## Three Container App with Docker Compose

_this example was created by Anas shahwan and [originally posted on medium.com](https://medium.com/@Anas.shahwan/dockerizing-nodejs-react-js-and-mongodb-apps-be67a73c7a7b)_

## To Run

1. Ensure that you have docker installed
2. Clone repo
3. CD to repo and type `docker compose build --no-cache`
4. Wait for it to complete building successfully
5. Type `docker compose up`
6. Wait for it to start the backend server and frontend server
7. You'll see something like

```
 You can now view task_management in the browser.

          Local:            http://localhost:3000
          On Your Network:  http://172.28.0.4:3000
```

1. Point your web browser at localhost:3000
1. In another terminal `docker compose down` will shut everything down

## To develop/change/code

1. Ensure you have the Dev Containers and Remote SSH extension installed in VS Code and Docker Desktop running in the background
1. Open the repository folder in Visual Studio Code
1. Lower left corner click on the arrows and choose `Reopen in Container`
<!-- 1. choose from docker-compose.yaml
1. choose which service you want to work on (frontend, backend or mongo) -->
1. It should start up the mongo container the backend container and the frontend container.
1. The new VS Code window should open the frontend folder to make code changes. Any changes made inside the container should save it locally as well.
1. Wait for VS Code to build and start the containers.
1. I still have to figure out how to open the backend portion of the containers and develop it individually so stay tuned for that.

## Troubleshooting common issues:

When you pull the repository for the first time, the docker compose and build commands should definitely work. However, for subsequent builds if you face any issues, you can do the following:

1. From Docker Desktop, go under the Containers tab and delete the three_container_stack
2. Next go under Images tab, and delete the three_container_stack-frontend and three_container_stack-backend
3. Next go under the Volumes tab and delete **all** the volumes, especially the three_container_stack_data.
4. Go to VSCode where the project is and in the terminal run `docker compose build --no-cache`
5. Next `docker compose up`

If you face the issue:

> react-scripts not found

you may have modified the Dockerfile in the frontend folder. I know why this is happening - we have to set the path of the node_modules/.bin/ as our PATH inside the container. I haven't done that yet because I wanted to keep the Dockerfile simple for y'all but I will be adding this for a more stable build for Kubernetes.

Another issue is hot-reloading inside the docker container for the react application is not working. This is bug in react-scripts-v5 which is still open. I am looking into solutions for this. I have test some containers to see if it is safe to downgrade to v4 instead. So stay tuned for that
