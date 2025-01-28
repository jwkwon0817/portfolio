FROM node:23-alpine AS builder

COPY . /app
WORKDIR /app

ENV time_zone=Asia/Seoul
ENV NODE_ENV=production

RUN corepack enable
RUN corepack prepare pnpm@latest --activate


RUN pnpm install --frozen-lockfile

RUN pnpm run build

CMD ["pnpm", "run", "start"]