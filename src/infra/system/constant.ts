import { environment } from './../../environments/environment';

export class BaseApi {
  static readonly jsonplaceholder = environment.jsonplaceholder;
}

export class JSONPlaceholder {
  static readonly POSTS = `${BaseApi.jsonplaceholder}/posts`;
  static readonly COMMENTS = `${BaseApi.jsonplaceholder}/comments`;
  static readonly ALBUMS = `${BaseApi.jsonplaceholder}/albums`;
  static readonly PHOTOS = `${BaseApi.jsonplaceholder}/photos`;
  static readonly TODOS = `${BaseApi.jsonplaceholder}/todos`;
  static readonly USERS = `${BaseApi.jsonplaceholder}/users`;
}
