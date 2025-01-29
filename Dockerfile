# 빌드 스테이지
FROM node:23-bookworm-slim AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

ENV time_zone=Asia/Seoul

ENV NODE_ENV=development

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

RUN apt-get update && \
    apt-get install -y python3 make g++ && \
    rm -rf /var/lib/apt/lists/*

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM node:23-bookworm-slim AS runner

WORKDIR /app

ENV time_zone=Asia/Seoul
ENV NODE_ENV=production

RUN corepack enable
RUN corepack prepare pnpm@latest --activate

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

RUN pnpm install --frozen-lockfile --prod

CMD ["pnpm", "run", "start"]