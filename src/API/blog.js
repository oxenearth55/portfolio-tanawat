import axios from 'axios'

export const getBlogs = async () => {
      const res = await axios.get('https://damp-dawn-44626.herokuapp.com/api/blogs/earth/only')
      return res.data
    
}