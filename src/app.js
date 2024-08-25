const subscriberModel = require("./models/subscribers.js");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// jsdoc comments for api documentation

// for defining schema of the api
/**
 * @swagger
 * components:
 *    schemas:
 *      Subscribers:
 *        type: object
 *        properties:
 *          id:
 *            type: string
 *            description: Auto generated object id
 *          name:
 *            type: string
 *            description: Person name
 *          subscribedChannel:
 *            type: string
 *            description: Channels Person has Subscribed to
 *          subscribedDate:
 *            type: string
 *            description: Date the channel was subscribed on
 *        example:
 *          id: 65e9e1236abe03d47f6ee051
 *          name: John Doe
 *          subscribedChannel: freeCodeCamp.org
 *          subscribedDate: 2024-03-07T15:45:39.895Z
 */

// for adding a tag of Subscribers
/**
 * @swagger
 * tags:
 *  name: Subscribers
 *  description: Get Subscribers API
 */

// to make documentation of /subscribers route
/**
 * @swagger
 * /subscribers:
 *  get:
 *    summary: Return a list of subcribers
 *    tags: [Subscribers]
 *    responses:
 *      200:
 *        description: The list of the subscribers
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Subscribers'
 *      404:
 *        description: No Subscribers found
 */
// Route to get all the subscribers
app.get("/subscribers", async (req, res) => {
  try {
    const subscribers = await subscriberModel.find({}, { __v: 0 });
    res.status(200).json(subscribers);
  } catch (ex) {
    res.status(404), json({ error: ex.message });
  }
});

// to make documentation of /subscribers/names route
/**
 * @swagger
 * /subscribers/names:
 *  get:
 *    summary: Return a list of subcribers with just names and subscribedChannels
 *    tags: [Subscribers]
 *    responses:
 *      200:
 *        description: The list of the subscribers
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Subscribers'
 *      404:
 *        description: No Subscribers found
 */

// Route to get all the subscribers but only their names and their subscribed channels
app.get("/subscribers/names", async (req, res) => {
  try {
    const subscribers = await subscriberModel
      .find({})
      .select({ name: 1, subscribedChannel: 1, _id: 0 });
    res.status(200).json(subscribers);
  } catch (ex) {
    res.status(404), json({ error: ex.message });
  }
});

// to make documentation of /subscribers/:id route
/**
 * @swagger
 * /subscribers/{id}:
 *  get:
 *    summary: Get subscribers list from given id
 *    tags: [Subscribers]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: id to get subscribers list
 *    responses:
 *      200:
 *        description: The list of the subscribers
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Subscribers'
 *      404:
 *        description: Given id not found
 */

// route to get subscribers using an id
app.get("/subscribers/:id", async (req, res) => {
  // to get id from request parameters
  const idToGet = req.params.id;
  try {
    const subscribers = await subscriberModel.findById(idToGet, { __v: 0 });
    if (!subscribers) res.sendStatus(404);
    res.status(200).json(subscribers);
  } catch (ex) {
    res.status(404), json({ error: "Given id not found" });
  }
});

module.exports = app;