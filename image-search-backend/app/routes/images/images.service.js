const { createClient } = require("pexels");

require("dotenv/config");

module.exports = {
  search,
};

async function search(req) {
  const { query = null, page = null, per_page = null } = req;
  try {
    const client = createClient(process.env.PEXELS_API_KEY);
    const result = await client.photos.search({
      query,
      per_page: per_page,
      page: page,
    });
    return { images: result?.photos, total_results: result?.total_results };
  } catch (error) {
    if (error) {
      console.log("error",error)
      return { error: error };
    } else {
      return { error: "Unknown Error!" };
    }
  }
}
