export class User {
    constructor(
        public email: string,
        public name: string,
        private passwd: string
    ) { }

    /**
     * matches a income user with dbUser
     */
    public matches(user: User): boolean {
        return user !== undefined &&
            user.email === this.email &&
            user.passwd === this.passwd
    }
}

export const users: {[key:string]: User} = {
    "user1@gmail.com": new User("user1@gmail.com", "user1", "123"),
    "user2@gmail.com": new User("user2@gmail.com", "user2", "123"),
    "user3@gmail.com": new User("user3@gmail.com", "user3", "123")
}