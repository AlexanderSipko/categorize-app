FROM node:alpine

# Установить рабочую директорию
WORKDIR /usr/app

# Копировать package.json и package-lock.json
COPY ./package*.json ./

# Установить зависимости
RUN npm install --legacy-peer-deps

# Удалить ненужные пакеты
# RUN npm uninstall punycode

# Копировать все файлы
COPY ./ ./

# Построить приложение
RUN npm run build

# Открыть порт
EXPOSE 3005

# Запустить контейнер от имени непривилегированного пользователя
USER node

# Запустить скрипт npm start при старте контейнера
CMD ["sh", "-c", "PORT=3005 npm start"]