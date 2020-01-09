const Booking = require("../models/Booking");

module.exports = {
  //create post
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    });

    //trazer os dados em vez do id do spot  e usuários
    await booking
      .populate("spot")
      .populate("user")
      .execPopulate();
    return res.json(booking);
  }
};
