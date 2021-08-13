import axios from "axios";

const instance = axios.create({
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
     headers: {
          "API-KEY": "43a21dc1-38bb-4ad8-b192-16e838a5eef1"
     }

})

export const usersAPI = {
     getUsers(currentPage, pageSize)
     {
          return instance
               .get(`users?page=${currentPage}&count=${pageSize}`) //получаем выбранную заданную изначально страницу и количество пользователей
               .then(response => // promise возвращает объект {response}
               {
                    return response.data // получаем данные 
               })
     },

     follow(userId)
     {
          return instance
               .post(`follow/${userId}`)
     },

     unFollow(userId)
     {
          return instance
               .delete(`follow/${userId}`)
     },

     getProfile(userId)
     {
          return instance
               .get(`profile/` + userId)
     },

     auth()
     {
          return instance
               .get(
                    //получаем выбранную заданную изначально страницу и количество пользователей
                    `auth/me`,
               )

     }
}