import "next-auth";




declare module "next-auth" {
    interface User {
      id: string;
      tipo:  string;
    }
  
    interface Session {
      user: User;
    }
  }