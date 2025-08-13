import express from 'express';

const app = express();
const port = 3001;

app.use(express.json());

let products = [
    {id:1, name:'watch', price:2000, stock:"available"},
    {id:2, name:'trimmer', price:1500, stock:"unavailable"}
];

// GET all products
app.get('/products', (req, res) => {
    res.send(products);
});

// POST add product
app.post('/products', (req, res) => {
    const { name, price, stock } = req.body;
    const newProduct = { id: products.length + 1, name, price, stock };
    products.push(newProduct);
    res.status(201).send(`Product added: ${JSON.stringify(newProduct)}`);
});

// PUT update product
app.put('/products/:id', (req, res) => {
    const productid = parseInt(req.params.id);
    const { name, price, stock } = req.body;
    const product = products.find(u => u.id === productid);

    if (!product) {
        return res.status(404).send("Product not found");
    }

    product.name = name || product.name;
    product.price = price || product.price;
    product.stock = stock || product.stock;

    res.send(`Product updated: ${JSON.stringify(product)}`);
});

// DELETE product
app.delete('/products/:id', (req, res) => {
    const productid = parseInt(req.params.id);
    const index = products.findIndex(u => u.id === productid);

    if (index === -1) {
        return res.status(404).send("Product not found");
    }

    const deleteProduct = products.splice(index, 1);
    res.send(`Product deleted: ${JSON.stringify(deleteProduct[0])}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
