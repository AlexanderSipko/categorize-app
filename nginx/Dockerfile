FROM nginx:alpine

# Удалить стандартный конфигурационный файл, если он есть
RUN rm -f /etc/nginx/conf.d/default.conf

# Копировать конфигурационные файлы
COPY ./default.conf /etc/nginx/conf.d/
# Новый файл конфигурации для основного Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Открыть порт
EXPOSE 80

# Запустить Nginx
CMD ["nginx", "-g", "daemon off;"]
