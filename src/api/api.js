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
          console.warn("Obsolete method. Please profileAPI object.")
          return profileAPI.getProfile(userId)
     },
}

export const profileAPI = {
     getProfile(userId)
     {
          return instance
               .get(`profile/` + userId)

     },

     getStatus(userId)
     {
          return instance.get(`profile/status/` + userId)
     },

     updateStatus(status)
     {
          return instance.put(`profile/status/`, { status: status })
     }
}


export const authAPI = {
     me()
     {
          return instance
               .get(
                    `auth/me`,
               )
     },

     login(email, password, rememberMe = false)
     {
          return instance
               .post(
                    `auth/login`, { email, password, rememberMe }
               )
     },

     logout()
     {
          return instance
               .delete( // удаляем coke 
                    `auth/login`
               )
     }
}