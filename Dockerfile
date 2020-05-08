FROM node:12.15.0

#Creating a dir on the container 
WORKDIR /usr/src/placeviewer-server

#Copying all the files in the current dir to the container
COPY ./ ./

#installing all dep. in the ccntainer
RUN npm install

CMD [ "/bin/bash" ]