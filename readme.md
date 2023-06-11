# Web Training Project

This project developed using `node 18.12.1`, `npm 8.19.2`.

To start running this project locally, you must follow these steps:

First, clone these repository to the your folder.

```
> git clone https://github.com/riansyh/web-training-fe.git
```

Then, open the folder and **install** all packages.

```
> npm install
```

Then, copy `.env.example` to `.env`

```
> cp .env.example .env
```

Then, adjust the two variables inside .env based on deployment URL and API URL

`VITE_BASE_URL` : fill with deployment URL or keep it default if run locally

`VITE_API_URL` : fill with API URL

Start the server using this command

```
> npm run dev
```
