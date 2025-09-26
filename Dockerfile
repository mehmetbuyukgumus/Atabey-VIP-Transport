# 1. Aşama: Build
FROM node:18-alpine AS builder

# Çalışma dizini
WORKDIR /app

# Paket dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm projeyi kopyala
COPY . .

# Next.js production build
RUN npm run build

# 2. Aşama: Production
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Sadece gerekli dosyaları kopyala
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/locales ./locales

# Next.js varsayılan portu
EXPOSE 3000

# Container çalıştırma komutu
CMD ["npm", "start"]
