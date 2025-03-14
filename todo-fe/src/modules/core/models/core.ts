export type IResponse<T> = {
  data: T;
};

export type IPaging = {
  page: number;
  total: number;
  limit: number;
};

export type IPagination<T> = {
  data: T[];
  extra: { [key: string]: string | number };
  paging: IPaging;
};
