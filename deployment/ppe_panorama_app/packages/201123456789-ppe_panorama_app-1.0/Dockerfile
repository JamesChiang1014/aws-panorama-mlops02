# Use the pre-built docker image attached in this example by doing ```docker load --input panoramasdk_gpu_access_base_image.tar.gz``` or build the base image yourself using the dockerfile provided under /docker/Dockerfile
# FROM 201125699002.dkr.ecr.ap-southeast-1.amazonaws.com/trtpt36_opengpu:latest
FROM public.ecr.aws/x7t7l1d6/trtpt36opengpu:latest
RUN apt-get update && apt-get install -y libglib2.0-0
RUN python3.6 -m pip install boto3
RUN python3.6 -m pip install sympy
RUN python3.6 -m pip install pyzmq
COPY src /panorama

# To build the docker file
# docker run --rm --privileged multiarch/qemu-user-static --reset -p yes
# panorama-cli build \
#  --container-asset-name ppe_panorama_app \
#  --package-path packages/201125699002-ppe_panorama_app-1.0/
