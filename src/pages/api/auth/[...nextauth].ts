import NextAuth,{NextAuthOptions} from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { signOut } from "next-auth/react";
import { createHash } from 'crypto';

function removerMascaraCpf(cpfComMascara: string): string {
    // Remove todos os caracteres que não são dígitos
    const cpfSemMascara = cpfComMascara.replace(/\D/g, '');
  
    return cpfSemMascara;
  }
  
  async function getUserCpf(cpf : string) :  Promise<any>{
    
    const result = await fetch('http://localhost:3000/api/usuario?cpf='+cpf)
    return  result.json()

}

const authOptions : NextAuthOptions = {
    
    providers: [CredentialsProvider({
        type: 'credentials',
        credentials: {cpf: {
            label: "CPF",
            type: "text"
        },password: {
            label: "Senha",
            type: "password"
        } },
        async authorize(credentials, req){
            
            const hash = createHash('sha256');
            const {cpf, password} = credentials as {cpf:string; password:string;};
            hash.update(password)
            const cpfSemMascara = removerMascaraCpf(cpf);
            const user = await getUserCpf(cpfSemMascara)
            if(cpfSemMascara === user[0].cpf && hash.digest('hex') === user[0].senha){
                return {id:user[0].id,name:user[0].nome,tipo:user[0].tipo_user};
            }

            return null;
            
        }
    })],
    callbacks: {
        jwt: async ({ token, user }) => {
          if (user) {
            token.id = user.id;
            token.tipo = user.tipo;
          }
    
          return token;
        },
        session:  ({ session, token }) => {
            session.user.id = token.id;
            session.user.tipo = token.tipo
            return session;
          },
      },
    secret: "jwttoken",
    pages: {
        signIn :"/login",
        signOut: "/login",
    },
    jwt: {
        secret: "jwttoken",
      },

}



export default NextAuth(authOptions);