
# URL Shortener

A simple Node.js web application to shorten URLs, track visits, and view analytics.

## Features

- Generate short, shareable URLs
- Track the number of visits for each short URL
- View analytics for each shortened URL
- Simple web interface

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Templating:** EJS
- **Unique ID Generation:** nanoid

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start MongoDB (if not already running).

4. Start the application:
   ```sh
   npm start
   ```

5. Open your browser and go to [http://localhost:8002](http://localhost:8002)

## Project Structure

```
.
├── controllers/
│   └── url.js
├── models/
│   └── url.js
├── routes/
│   ├── staticRouter.js
│   └── url.js
├── views/
│   └── home.ejs
├── connection.js
├── index.js
├── package.json
└── README.md
```

## License

This project is licensed under the ISC License.
