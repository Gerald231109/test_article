import http from "../http-common";

class DataService {

    getAll(date, date2) {
        return http.get(`/article/`, {params: {
                dateOne: date,
                dateTwo: date2}
        });
    }

    createArticle(data) {
        return http.post("/article", data);
    }

    deleteComment(data) {
        return http.delete(`/article/:id`, data)
    }

    deleteArticle(data) {
        return http.delete('/article/', data);
    }

    createComment(data, id) {
        return http.post(`/article/${id}`, data);
    }

    getOne(id){
        return http.get(`/article/${id}`);
    }


    update(id, data) {
        return http.patch(`/article/${id}`, data);
    }

    updateComment(id, data) {
        return http.patch(`/article/${id}`, data);
    }




}

export default new DataService();