# Vue Twitter Clone - Backend

> A Twitter clone built with Express.js that allows users to create accounts, post tweets, follow other users, and interact with posts through likes and comments. This project aims to replicate the core functionalities of Twitter.

## Table of Contents

- [Vue Twitter Clone - Backend](#vue-twitter-clone---backend)
  - [Table of Contents](#table-of-contents)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Seeding the Database](#seeding-the-database)
  - [Built With](#built-with)
  - [Contributing](#contributing)
  - [Authors](#authors)
  - [License](#license)


### Prerequisites

What you need to install the software and how to install them.

- [Node.js](https://nodejs.org/) (developed with v21.4.0)
- [pnpm](https://pnpm.io/) (reccomended) or npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)


### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/fadamakis/vue-twitter-clone-backend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd vue-twitter-clone-backend
   ```

3. Install dependencies:

   ```bash
   pnpm install
   ```

4. Set up environment variables:

   - Copy the `.env.example` file to `.env`:

     ```bash
     cp .env.example .env
     ```

   - Fill in the required environment variables in the `.env` file.

## Usage

To run the project locally, use the following command:

```bash
pnpm dev
```

Visit `http://localhost:3000` in your browser to see the application.

## Seeding the Database

If you need to seed the database with initial data, you can use the following command:

```bash
pnpm seed
```

## Built With

- [Express.js](https://expressjs.com/) - The web framework used
- [MongoDB](https://www.mongodb.com/) - Database

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.


## Authors

- **Fotis Adamakis** - *Initial work* - [fadamakis](https://github.com/fadamakis)

See also the list of [contributors](https://github.com/fadamakis/vue-twitter-clone-backend/contributors) who participated in this project.

## License

This project is licensed under the [MIT License](https://opensource.org/license/MIT).