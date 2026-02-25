export default function handler(req, res) {
  res.status(200).json({
    CLIENT_ID: process.env.CLIENT_ID,
    API_KEY: process.env.API_KEY,
  });
}
