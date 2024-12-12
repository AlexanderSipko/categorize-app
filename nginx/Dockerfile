FROM nginx:alpine

# Удалить любые существующие конфигурационные файлы
RUN rm /etc/nginx/conf.d/*

# Копировать конфигурационные файлы
COPY ./default.conf /etc/nginx/conf.d/

# Открыть порт
EXPOSE 80

# Запустить Nginx
CMD ["nginx", "-g", "daemon off;"]