import axios from 'axios';

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get('https://www.dbooks.org/api/recent', {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }

  static async getById(id: string) {
    const response = await axios.get(`https://www.dbooks.org/api/book/${id}`);
    return response;
  }

  static async search(query: string) {
    const response = await axios.get(
      `https://www.dbooks.org/api/search/${query}`,
    );
    return response;
  }
}
