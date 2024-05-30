// src/services/newsApi.ts
import axios from 'axios';

const BASE_URL = 'http://servicodados.ibge.gov.br/api/v3/noticias/';

export const getNews = async (quantity = 100) => {
    try {
      const response = await axios.get(BASE_URL, {
        params: {
          qtd: quantity,
        },
      });
      return response.data.items;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  };