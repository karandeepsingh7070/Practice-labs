export interface modalState {setIsModalOpen : (value: boolean) => void}
export interface loginModal {name : string, email: string}
export interface cookieModal {key : string, value?: any}
export interface loginRes { data : {token : string, user?: loginModal, message: string}}
export interface navModel { id : number, title : string}