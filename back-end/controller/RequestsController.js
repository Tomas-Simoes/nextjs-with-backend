class RequestsController {
  async create(req, res) {
    try {
      //const request = await Request.create({});
    } catch (error) {
      return res.status(500).send({ message: error });
    }
  }
}

export default new RequestsController();
