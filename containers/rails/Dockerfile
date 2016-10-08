FROM ruby:2.3.1

RUN apt-get update && apt-get install -y --force-yes nodejs-legacy npm postgresql-client

ENV RAILS_ENV production
ENV SECRET_KEY_BASE 755d577d83c8a60551efa14742e3330d3ade8e270a49184c97bb2b4ee8f42353a3c9a62100eddf23736493c0501f051a14051e50ad11fc5bdd4da7c364d79a98

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app


ADD Gemfile /usr/src/app
ADD Gemfile.lock /usr/src/app
RUN bundle install -j4 --without development test

ADD client/package.json /usr/src/app/client/package.json
ADD client/webpack.config.js /usr/src/app/client/webpack.config.js
RUN cd client && npm install

COPY . /usr/src/app

EXPOSE 3000
CMD ["bundle", "exec", "puma", "-C", "config/puma.rb"]
