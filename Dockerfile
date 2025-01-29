FROM node:23-bookworm-slim AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./


ENV time_zone=Asia/Seoul
ENV NODE_ENV=production

RUN corepack enable
RUN corepack prepare pnpm@latest --activate


RUN pnpm install --frozen-lockfile

COPY . .

RUN ls -la

RUN pnpm run build

CMD ["pnpm", "run", "start"]