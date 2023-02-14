const axios = require("axios");

export default async (req, res) => {
  try {
    const baseURL = "https://newsapi.org/v2/everything?q=";
    const response = await axios.get(
      `${baseURL}${req.query.search}&sortBy=${req.query.sort}&page=${req.query.currentPage}&pageSize=${req.query.pageSize}&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
