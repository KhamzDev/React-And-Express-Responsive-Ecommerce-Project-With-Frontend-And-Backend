import { Router } from "express";
import mockProducts from "../data/products.mjs";

const router = Router();

router.get("/api/products", (req, res) => {

  return res.status(200).send(mockProducts);
  
})

router.get("/api/search/products", (req, res) => {
  const research = req.query.name

  if(!research) return res.send([]);

  const matchProduct = mockProducts.filter((p) => p.name.toLowerCase().startsWith(research.toLowerCase().trim()));
  if(matchProduct.length === 0) return res.send([]);

  return res.status(200).send(matchProduct);
  
})

router.get("/api/search/res/products", (req, res) => {
  const research = req.query.name;

  if(!research) return res.send([]);

  const matchProduct = mockProducts.filter((p) => p.name.toLowerCase().includes(research.toLowerCase().trim()));
  if(matchProduct.length === 0) return res.send([]);

  return res.status(200).send(matchProduct);
  
})

router.get("/api/products/:id", (req, res) => {
  const {
    params: { id },
  } = req;

  const parsedId = parseInt(id);
  if(!parsedId) return res.status(400).send("Invalid id");
  
  const productIndex = mockProducts.findIndex((p) => p.id === parsedId);
  if (productIndex === -1) return res.status(400).send("User Not Found");

  return res.status(200).send(mockProducts[productIndex]);
})

router.patch("/api/products/:id", (req, res) => {
  const {
    params: { id },
    body
  } = req;

  const parsedId = parseInt(id);
  if(!parsedId) return res.status(400).send("Invalid id");
  
  const productIndex = mockProducts.findIndex((p) => p.id === parsedId);
  if (productIndex === -1) return res.status(400).send("User Not Found");

  mockProducts[productIndex] = {...mockProducts[productIndex], ...body}

  return res.status(200).send(mockProducts[productIndex]);
})

export default router