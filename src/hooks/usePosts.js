import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {

    const sortedPosts = useMemo(() =>{
        if(sort) {
            // чтобы при работе функции sort() мы не мутировали массив к которому она было применена
            //( и так как изменять состояние напрямую нельзя)
            //развернем посты в новый массив и отсортируем этот
            // массив,т.е мы  мутируем копию масива  и не мутируем состояние на прямую
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts;

    },[sort, posts])

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {

    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    },[query, sortedPosts])

return sortedAndSearchedPosts
}
