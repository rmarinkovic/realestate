import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
    'X-RapidAPI-Key': '8027ff002dmsh405685141f70f87p1215b3jsn148bd7e27c0f',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
    });

    return data;
}