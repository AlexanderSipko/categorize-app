FROM nginx:alpine

# Удалить стандартный конфигурационный файл, если он есть
RUN rm -f /etc/nginx/conf.d/default.conf

# Копировать конфигурационный файл
COPY ./default.conf /etc/nginx/conf.d/

# Открыть порт
EXPOSE 80

# Запустить Nginx
CMD ["nginx", "-g", "daemon off;"]
