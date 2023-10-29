# URL Metadata Scraper API

## Description

The URL Metadata Scraper API is a simple web service built with NestJS that accepts a URL and scrapes the web page for metadata like title, description, and image thumbnail. Users can utilize this data to generate previews of web links.

The live version of the API is hosted at [URL Metadata Scraper](https://url-metadata-scraper.onrender.com).

## Installation

To get started, install the project dependencies using npm:

```bash
$ npm install
```

## Running the App

You can run the application in different modes:

- Development Mode:

```bash
$ npm run start:dev
```

- Production Mode:

```bash
$ npm run start:prod
```

## Usage

To use the API, make a GET request to the `/scraper/scrape` endpoint with a URL as a query parameter:

```
http://localhost:3000/scraper/scrape?url=https://example.com
```

This will return JSON data containing the title, description, and image URL for the specified URL.

## Swagger Documentation

For detailed documentation on how to use the URL Metadata Scraper API and its endpoints, you can access the Swagger documentation at:

[Swagger Documentation](https://url-metadata-scraper.onrender.com/docs)

The Swagger documentation provides information on available endpoints, request parameters, and response structures, making it easier to interact with the API.

## Contributing

Contributions to the URL Metadata Scraper API are welcome! If you'd like to contribute:

1. Fork the project on GitHub.

2. Create a new branch for your changes.

3. Make your improvements or additions.

4. Thoroughly test your changes.

5. Create a pull request with a clear description of your changes.
