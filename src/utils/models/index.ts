export interface User{
    includes(object: any): any;
    email:string
    password:string
}
export interface QueryParams
{
    hasCV?:boolean
    supplierId?:Number
    typeOfPaymentId?:number;
    hasEndOfMonth?: boolean;
    skillType?:string;
    search?: string;
    skip?: number;
    take?: number;
}
export interface JwtTokenDecoded {
    role: ROLE;
    iss: string;
    aud: string;
    auth_time: number;
    user_id: string;
    sub: string;
    iat: number;
    exp: number;
    email: string;
    email_verified: boolean;
    firebase: {
      identities: {
        email: string[];
      };
      sign_in_provider: string;
    };
  }
  
  export type ROLE = 'ADMIN' | 'USER';