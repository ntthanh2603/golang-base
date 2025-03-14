import interceptor from "../../core/services/axios";

export const ListTodoAPI = async <T>(): Promise<T> => {
  return new Promise((resolve, reject) => {
    interceptor
      .get<T>("/tasks/v1/tasks", {
        params: {
          limit: 200,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const DeleteTodoAPI = async <T>(id: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    interceptor
      .delete<T>(`/tasks/v1/tasks/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const UpdateTodoAPI = async <T>(
  id: string,
  title: string,
): Promise<T> => {
  return new Promise((resolve, reject) => {
    interceptor
      .patch<T>(`/tasks/v1/tasks/${id}`, {
        title,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const CreateTodoAPI = async <T>(title: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    interceptor
      .post<T>(`/tasks/v1/tasks`, {
        title,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const DoneTodoAPI = async <T>(id: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    interceptor
      .patch<T>(`/tasks/v1/tasks/${id}/done`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const DoingTodoAPI = async <T>(id: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    interceptor
      .patch<T>(`/tasks/v1/tasks/${id}/doing`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
