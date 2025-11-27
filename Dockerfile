# Usar imagen base de Node.js
FROM node:20-alpine AS builder

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar todas las dependencias
RUN npm ci

# Copiar el código fuente
COPY . .

# Construir la aplicación (Client and Preview/SSR)
RUN npm run build
RUN npm run build.preview

# Etapa de producción
FROM node:20-alpine AS runner

# Instalar dumb-init para manejo de señales
RUN apk add --no-cache dumb-init

# Crear usuario no-root (opcional pero recomendado)
# RUN addgroup --system --gid 1001 nodejs
# RUN adduser --system --uid 1001 qwik
# USER qwik

# Establecer directorio de trabajo
WORKDIR /app

# Copiar archivos necesarios desde el builder
# Nota: Copiamos node_modules completos porque 'vite preview' necesita dependencias de desarrollo (vite)
# Si se configurara un adaptador de Node.js nativo, podríamos podar las dependencias.
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/vite.config.ts ./vite.config.ts
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Exponer puerto
EXPOSE 3340

# Variables de entorno
ENV PORT=3340
ENV HOST=0.0.0.0
ENV NODE_ENV=production

# Comando de inicio
# Usamos vite preview ya que no hay un adaptador de Node.js explícito configurado
ENTRYPOINT ["dumb-init", "--"]
CMD ["sh", "-c", "npx vite preview --host 0.0.0.0 --port ${PORT:-3340}"]
