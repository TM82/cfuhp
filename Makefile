up:
	docker-compose up -d

exec:
	docker exec -it vue /bin/ash

log:
	docker-compose logs -f vue

down:
	docker-compose down