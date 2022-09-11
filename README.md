# ICT202 User (ict202-user)

User management for my project ict202-app in a simple CQRS design pattern

## Install the dependencies on each
```bash
npm install
```

## Copy the `.env.template` into the original environment file (Do this on root and sub directories)
```bash
cp .env.template .env
```

## You can also copy `.env.template` into other environments (Do this on root and sub directories)
```bash
cp .env.template .env.test
```

```bash
cp .env.template .env.development
```

## On the root directory, start the docker container for the local database
```bash
npm run db:up && npm run db:down
```

## On the `command/` directory, run the following commands to migrate the database
```bash
npm run db:up && npm run db:down
```

or just simply:
```bash
npm run db:reset
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
npm run start:dev
```

### Start application for production
```bash
npm run start
```