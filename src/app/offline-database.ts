import { UserRepositoriesResponse, UserRepositoryResponse } from "./modal";

export class OfflineDatabase {

    public db: Map<string, UserRepositoryResponse> = new Map();
    public pages: UserRepositoriesResponse[] = [];
    public loaded: boolean = false;
}
