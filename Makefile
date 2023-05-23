build:
	docker build --platform linux/amd64 -t rokokos97/ethic:amd64 .

run:
	docker run -d -p 8080:8080 --name tfc --rm rokokos97/ethic
