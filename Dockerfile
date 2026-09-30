FROM node:22-bookworm-slim AS base

ENV NODE_ENV=production
WORKDIR /app

FROM base AS deps

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
  && rm -rf /var/lib/apt/lists/*

ENV NODE_ENV=development
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Add debugging to see what's happening
RUN npm run build 2>&1

FROM base AS runner

ENV PORT=8080

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 8080

CMD ["node", "server.js"]
