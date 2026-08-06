import User from "../models/User.js";

export const updateLocation = async (req, res) => {
  try {
    const { latitude, longitude } = req.body;

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.location = {
      latitude,
      longitude,
    };

    await user.save();

    res.status(200).json({
      success: true,
      message: "Location updated successfully",
      user,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};