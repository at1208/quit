import View from "../models/viewSchema";
import { errorHandler } from "../utils/dbErrorHandler";

export async function createView(req, res) {
  let { url, userAgent } = req.body;
  try {
    await View({
      url,
      userAgent,
    }).save();
    return res.json({
      message: "View created successfuly",
    });
  } catch (error) {
    res.status(400).json({
      error: errorHandler(error),
    });
  }
}
