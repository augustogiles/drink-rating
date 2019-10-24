This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Structure

### A typical top-level directory layout

    .
    ├── public                         # static files
    ├── src
    │    ├── components                # functional components that are reusable in the pages
    │    ├── pages                     # Dynamic files of pages components
    │    ├── store                     # Redux and middleware logic
    │    │   └── ducks                 # Each file in this folder corresponds to a set of (Types, middleware function, actions)
    │    ├── utils                     # some utils files
    │    ├── App.js                    
    │    ├── index.js                  
    │    └── routes.js                 # The page routes
    └── README.md


### Getting Started

to run this project you need to install all the dependencies and then start.

```sh
yarn install
yarn start
```