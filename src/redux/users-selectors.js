import { createSelector } from "reselect"


const getUsersSelector = (state) =>
{
     return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) =>
// Принимает на вход selector и данные с примитивного selector 
// кэширует данные и при следующем обращении к селектору не вызывает его а просто отдает данные 
// можно вкладывать сложные селекторы в сложные селекторы 
{
     return users.filter(u => true)
})

export const getPageSize = (state) =>
{
     return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) =>
{
     return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) =>
{
     return state.usersPage.currentPage
}

export const getIsFetching = (state) =>
{
     return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) =>
{
     return state.usersPage.followingInProgress
}