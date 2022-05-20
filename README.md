# Exercise: Build a Products API

You are working on a team of developers and another team member has developed a "Service" that will interact with a "database" and get back products.

## Getting Started

1. Fork this repo using the button on this page
2. Clone it onto your computer (after changing into your projects folder)
3. Change into the directory
4. Install the node dependencies by running `npm install`

### Initial Solution

The service has been imported into the `server.js` file for you. Your job is to create a RESTful API while implementing the service. You should have the following APIs:

* Get All Products
  * `/api/v1/products`
  * It should return all products

* Get Product By Id
  * `/api/v1/products/10`
  * It should return a single product
  * It should respond with an error and a 404 status code if the product does not exists

### Implement Sorting

The product owner has decided that it would be good to implement sorting for the API. Implement sorting on the Get All Products route. It should be sortable using a property and a direction:
* Example request URL: `/api/v1/products?sort=title&direction=DESC`
* The sort query should be one of the properties on products
* The direction query should be `'ASC'` or `'DESC'`

### Implement Search

After implementing sorting, the product owner has requested that you implement search. Fortunately, your team has already implemented a search method on the products service as well.

Add a the ability to search products to your API:
* Example request URL: `/api/v1/products/search?key=name&value=iPhone`
* Both the `key` and `value` properties are required. If either is missing the server should respond with an error.

## Products Service Documentation

### `productsService.findAll(orderBy, direction)`

> **Returns:** Array of `Product`s (see example Product object below)
>
> **Parameter: `orderBy`** *Optional.* Defaults to `'id'`. Set this to a property from the Product to sort by that property. i.e. 'name' to sort by name
>
> **Parameter: `direction`:** *Optional.* Defaults to `'ASC'`. Set to `'DESC'` to sort in descending order.
> **Example:**
> ```js
> // returns all products
> productsService.findAll()
> 
> // returns all products ordered by name descending
> productsService.findAll('name', 'DESC')

### `productsService.findOneById(id)`

> **Returns:** Single `Product` or `null` if no product was found (see example Product object below)
> 
> **Parameter: `id`** *Required.* The id of the product to look for.
> 
> **Example:**
> ```js
> // returns product with id of 10
> productsService.findOneById(10)
> 
> // error: id is required
> productsService.findOneById()
> ```

### `productsService.search(key, value, orderBy, direction)`

> **Returns:** Single `Product` or `null` if no product was found (see example Product object below)
> 
> **Parameter: `key`** *Required.* The property of the product to search under.
> 
> **Parameter: `value`** *Required.* The value to search for.
> 
> **Parameter: `orderBy`** *Optional.* Defaults to `'id'`. Set this to a property from the Product to sort by that > property. i.e. 'name' to sort by name
> 
> **Parameter: `direction`** *Optional.* Defaults to `'ASC'`. Set to `'DESC'` to sort in descending order.
>
> **Example:**
> ```js
> // error: key and value are required
> productsService.search()
> 
> // returns all products that have "iPhone" in the name
> productsService.search('name', 'iPhone')
> 
> // as above, but also sort by price descending
> productsService.search('name', 'iPhone', 'price', 'DESC')
> ```

### Example Product
```json
{
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
    "images": [
        "https://dummyjson.com/image/i/products/1/1.jpg",
        "https://dummyjson.com/image/i/products/1/2.jpg",
        "https://dummyjson.com/image/i/products/1/3.jpg",
        "https://dummyjson.com/image/i/products/1/4.jpg",
        "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
    ]
}
```
