# JSON SERVER MOCK API
This mock api was created using [json-server](https://github.com/typicode/json-server)

## Getting Started

Clone the project
```
git clone https://github.com/ImagineDesignDevelop/json-servder-mock-api.git
```

Install dependencies
```
npnm install
```

Start the mock api
```
npm Start
```

## How it works
Create your mock data in `tools/mockData.js` using CommonJS style export to make it consumable via Node (without using Babel-node).

Everytime you run the mock api via `npm start` the **mockData.js** will be coppied into `tools/db.json` with a fresh copy of your data to use.


