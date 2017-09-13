FROM node:6

MAINTAINER gsoertsz@thoughtworks.com

# install awsclient (for deploy)

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        libc6 \
        libcurl3 \
        libgcc1 \
        libgssapi-krb5-2 \
        libicu52 \
        liblttng-ust0 \
        libssl1.0.0 \
        libstdc++6 \
        libunwind8 \
        libuuid1 \
        zlib1g \
        python-dev \
        python-pip \
    && rm -rf /var/lib/apt/lists/*

RUN pip install awscli --upgrade

WORKDIR /work

ADD . /work

RUN npm install
RUN npm run build

CMD ["npm", "run", "test"]