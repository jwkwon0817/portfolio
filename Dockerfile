FROM node:23-bookworm-slim AS builder

COPY . /app
WORKDIR /app

ENV time_zone=Asia/Seoul

RUN corepack enable
RUN corepack prepare pnpm --activate
RUN pnpm install --frozen-lockfile

FROM builder AS runner

ENV NODE_ENV=production

WORKDIR /app

RUN pnpm run build

CMD ["pnpm", "run", "start"]