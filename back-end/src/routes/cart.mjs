import { Router } from "express";
import usercart from "../data/cart.mjs";

const router = Router();

router.get("/api/cart", (req, res) => {
    res.status(200).send(usercart);
});

router.get("/api/cart/:id", (req, res) => {
    const {
        params: { id }
    } = req;

    const parsedId = parseInt(id);
    if(!parsedId) return res.status(400).send("Invalid id");
    
    const cartIndex = usercart.findIndex((p) => p.id === parsedId);
    if (cartIndex === -1) return res.status(400).send("Cart Product Not Found");

    return res.status(200).send(usercart[cartIndex]);
})

router.post("/api/cart", (req, res) => {
    const {
        body
    } = req;

    const matchCart = usercart.find((p) => p.id === Number(body.id));
    if(matchCart !== undefined){
        if(matchCart.quantity >= 3){
            return res.status(400).send({msg: "The maximum quantity allowed inside the cart is 3"});
        }
        matchCart.quantity += 1;
        return res.status(200).send(usercart);
    }
    usercart.push({...body, quantity: 1});

    res.status(200).send(usercart);
});

router.patch("/api/cart/:id", (req, res) => {
    const {
        body,
        params: {id}
    } = req;

    const parsedId = parseInt(id);
    if(!parsedId) return res.status(400).send("Invalid id");
    
    const cartIndex = usercart.findIndex((p) => p.id === parsedId);
    if (cartIndex === -1) return res.status(400).send("Cart Product Not Found");

    usercart[cartIndex] = {...usercart[cartIndex], ...body};

    return res.status(200).send(usercart);
})

router.delete("/api/cart/:id", (req, res) => {
    const {
        params: {id}
    } = req;

    const parsedId = parseInt(id);
    if(!parsedId) return res.status(400).send("Invalid id");
    
    const cartIndex = usercart.findIndex((p) => p.id === parsedId);
    if (cartIndex === -1) return res.status(400).send("Cart Product Not Found");

    usercart.splice(cartIndex, 1);

    return res.status(200).send(usercart);
})

export default router;
